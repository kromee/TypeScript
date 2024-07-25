

function Route(ruta: string) {
    return (constructor: Function)=>{
        console.log('Ejecutando el decorador de la ruta');
        constructor.prototype.route = ruta;
    }
}

function Method(method: string){
    console.log(method);

  return (target: any, methodname: string, descriptor: PropertyDescriptor)=>{
    console.log(target,methodname, descriptor);
    const original = descriptor.value;
    descriptor.value= function(...args: any){
        console.log('antes metodo');
        original.call(this, ...args);
        console.log('despues metodo');
    }
  }
}


@Route('/productos')
class ProductoDecorador {
    @Method('get')
     Find (val: string){
       console.log("Soy el método find" + val);
    }
}


//Decorador en Clase
//const productodocorador = new ProductoDecorador() as any;
//console.log(productodocorador.Route);

//Decorador en Metodos
const met = new ProductoDecorador();
met.Find(' Hola mundo');




//Decoradores en getters and Setters

function UpperCase(target: any, methodName: string, propertyDescriptor: PropertyDescriptor){
    console.log(target, methodName, propertyDescriptor);
    
    const original = propertyDescriptor.get;
    propertyDescriptor.get = function(){
        const r =original?.call(this)
        if ( typeof r === 'string'){
            return r.toUpperCase();
        }
        return r;
    }
}

function Min(min:number){
    return (target: any, propertyName: string )=>{
        let val:string;
        const descriptor: PropertyDescriptor= {
            get(){
                return  val;
            },
            set(v:string){
                if (v.length<min){
                    throw new Error(`La propiedad ${propertyName} debe ser menor ${min}`)
                }
                val = v

            },
        }
        Object.defineProperty(target, propertyName, descriptor);

    }

}

class Users{

    @Min(6)
    public password: string 

    constructor(public name: string, public lastname: string, password: string){
        this.password = password;

    }
    @UpperCase
    get fullName(){
        return `${this.name} ${this.lastname}`;
    }
}

const usuario = new Users("Hola", "Mundo", '123456')
console.log(usuario.password);

//composicion de los decoradores, orden de ejecución de los decoradores
function Dec1 (constructor: Function){
    console.log('Decorador 1 ' +  constructor);
}
function Dec2 (constructor: Function){
    console.log('Decorador 2 ' +  constructor );

}

@Dec1
@Dec2
class UsurioComposer{

}
