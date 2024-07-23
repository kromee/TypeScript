function log<T,V> (a: T, b:V): V{
console.log(a,b);
return b;
}

log<string, number> ("dato", 2);
log<string, string>("Dato1","Dato2");
log(1,2);
log("hola1", "hola2");


//Genericos en clases

type Computador = {
    encender: ()=> void;
    apagar: ()=> void;

}


class Programador<T> {
 computador: T;
 constructor (t: T){
    this.computador =t;
 }
}


const programador = new Programador <Computador> ({
    encender: ()=> {}, apagar: ()=> {}
})

const programador1 = new Programador<string>("Hola eduardo");



//Genericos en interfases

interface KeyValue<T, V>{
    key:T,
    value:V,
}


interface Producto2{
    id:string
}

function fetchProduct (): KeyValue<string, Producto2>{
    return {
        key: 'id del producto',
        value: {id: 'id del producto'}
    }
}


//Constraint en genericos 

interface User {
    id:string,
    name: string
}
class User1 {
    constructor(public id:string, public name:string){

    }
}       

function print<T extends User>(t:T):T{
    console.log(t);
    return t;
}

function print1<T extends User1>(t:T):T{
    console.log(t);
    return t;
}

print({id:'idUser', name:'Eduardo'})
print1({id:'idUser1', name:'Eduardo Domínguez'})

class Estado<T> {
    protected data:T[] = [];
    agregar(t:T):void
    {
        this.data.push(t);
    }
    getEstado():T[]{
        return this.data;
    }
}


//pasar generico con restricciones
class EstadoEliminar<T extends {id:string}> extends Estado<T>{
    eliminar(id:string){
        this.data = this.data.filter(t => t.id !== id)
    }
}
type objetid={
    id: string
}
class EstadoEliminar1<T extends objetid> extends Estado<T>{
    eliminar(id:string){
        this.data = this.data.filter(t => t.id !== id)
    }
}

//pasar generico fijo

class EstadoUsuarios extends Estado<Usuario>{
    reiniciarContrasenas(){

    }
}

//

type Calendar = {
    id:number,
    fuente:string,
    dueno:string
}
const calendar: Calendar= {
    id: 1, fuente: 'google', dueno: 'yo mero'
}

function getProp<T>(objeto: T, property: keyof T):unknown
{
    return objeto[property];
}

getProp<Calendar>(calendar, 'id');
getProp<Calendar>(calendar, 'fuente');

//con typeof se limita a buscas solo por el tipo
getProp<Calendar>(calendar, 'otracosa');



//Utility Types

type Punto = {
    x:number,
    y:number,
    desc?:string
}

type Puntofinal = Partial<Punto>
type PuntoRequerido = Required<Punto>

const keyVal: Record<string, number>={
'soy un string' : 50
}
type kV = {[hey:string]:number}


const p: Omit<Punto, 'Desc'| 'y'>={
    x:1
}

const p1 :Pick<Punto, 'x'| 'y'>={
    x:1,
    y:1
}

const readOnly: Readonly<Punto>={
    x:1,
    y:3,
    desc:'soy la des'
}

//marca error el compilador
readOnly.x=2
