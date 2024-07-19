let mensaje = "Hola mundo";
console.log(mensaje);
mensaje = "TypeScript";
console.log(mensaje);


//* Tipos de datos JS*//
/*Primitivos 
 * 
 * number
 * string
 * boolean
 * null
 * undefined
 * undefined
 * object
 * funtion
 * 
 * Tipos de datos TS
 * Any
 * unknown
 * never
 * arrays
 * tuplas
 * enums
 * 
 * tipos inferidos
 * 
 */


let edad:number= 10;
let nombre: string = "Eduardo";
let casado: boolean = false;

function datoPersona(datos: any){
    return datos
}
let animales: string[] = ['Perro', 'Gato', 'Gallo']
let numeros : number[]  = [1,2,3]
let nums2: Array<number> = []

let tupla : [number, string[]]= [1,["dato 1, datos 2, datos 3"]]

enum Talla{
    Chica ="s", 
    Mediana="m",
    Grande="l",
    ExtraGrande = "xl"
}

const variable1= Talla.ExtraGrande;
console.log(variable1);

const enum LoadingState {Idle, Loading, Success, Error}
const estado = LoadingState.Success

type Direccion ={
    numero: number,
    calle: string, 
    pais: string
}

type Persona={
   readonly id:number,
    nombre:string,
    talla : Talla,
    direccion: Direccion
} 
const object: Persona= {
    id:1, 
    nombre:'Juan', 
    talla:Talla.Grande,
    direccion:{
        numero:10,
        calle: "Calle 1",
        pais: "México"
    }
}

object.nombre="eduardo"
object.talla = Talla.Mediana

const fn:()=> void = ()=>{
console.log("función que no retorna nada")
    
}
const fn1:()=> string = ()=>{
    console.log("función que no retorna cadena")
    return ""
}

const fn2:()=> number = ()=>{
    let x = 2
    if (x>5){
        return 10
    }else{
        return 1
    }
}

const fn3: (a:number)=> string = (edad: number)=>{
    if (edad>17){
    return "Eres mayor"
    }else{
        return "No eres mayor"
    }
}

function validaEdad (edad:number, msg='sin nombre'):string{
    if (edad>17)
        return `some text ${msg}` 
    return 'No eres mayor de edad'
    
}

validaEdad(18, 'Eduardo')


function ErrorUsuario (): never {
    throw new Error ("Error")
}


//Union Types
type Animal = {
    id:number,
    estado:string
}

type Usuario = {
    id:number,
    name:string
}

let animal: Usuario| Animal = {id:1, estado:'', name:''}
function sumaDos(n:number| string): number{
    if(typeof n=='number'){
        return n+2
    }
    return parseInt(n)+2
}

sumaDos('2')


//intersection types

type Audit = {
    created_at: string,
    modified_at: string
}

type Product = {
    name:string
}

const product : Audit & Product= {
    created_at: '',
    modified_at: '',
    name: ''
}


//literal types
type serie = 0|1|2|3|4|5|6|7|8
const nDeSerie = 3

//nullable types 
function toNumber (s:string| null|undefined){
    if (!s) return 0
    return parseInt(s)
}
const n = toNumber(undefined)


//Optional types  el signo es ?

function getUser (id:number){
    if(id<0){return null}
    return {id:1, name:'Eduardo', created_at:new Date()}
}

const user = getUser(1)
console.log('Usuario ', user?.created_at)
if(user&& user.created_at){
    console.log(user.created_at)
}
const arra1 = null
console.log(arra1?.[0])
const fn5:any = null
console.log(fn5?.())

// type assertions (AS) o (<>) para cuando se conoce el tipo
const input = document.getElementById('username') as HTMLAnchorElement
input.innerHTML= "value"

const input1 = <HTMLAnchorElement>document.getElementById('username')  
input.innerHTML= "value"


