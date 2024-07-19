abstract class DatosBasicos {
    constructor (
        public name:string,
        public desc:string,
        protected created_at: Date,
        protected created_by:number
    ){}
    get fullYear() {
        return this.created_at.getFullYear()
    }

    get fullDesc(){
        return this.name + '**' + this.desc
    }

    abstract guardar(): void;

}


class Producto extends DatosBasicos {
    public productos: Producto[] = [];

    constructor(
        public stock: number,
        public sku:number,
        name:string,
        desc:string,
        created_at: Date,
        created_by:number)
    {
        super(name, desc, created_at, created_by)
    }

    override get fullDesc(){

        return "Producto " +super.fullDesc
    }
    guardar(){
        console.log("Guardando la producto")
    }

}

class Categoria extends DatosBasicos {
public productos: Producto[] = [];

    constructor(
      
        name:string,
        desc:string,
        created_at: Date,
        created_by:number 
    )
    {
        super(name, desc, created_at, created_by)
    }

    agregarProducto(producto: Producto){
        this.productos.push(producto)
    }
    guardar(){
        console.log("Guardando la categoría")
    }
} 


//Herencia

let producto1 = new Producto(
    100, 1, "Producto1", "Producto1", new Date(), 1)

let categoria = new Categoria ("Celulares","Motorola", new Date(), 1)

categoria.agregarProducto(producto1)
console.log(producto1,categoria)

console.log(producto1.fullDesc, categoria)
console.log(producto1.guardar(),categoria.guardar())

//No se puede crear una nueva istancia porque es abstractad la clase, 
//Solo se puede instanciar una sola vez
//let datos = new DatosBasicos("", "", new Date(), 1)


//intefaces


