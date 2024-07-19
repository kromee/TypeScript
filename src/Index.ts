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




