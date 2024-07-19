"use strict";
let mensaje = "Hola mundo";
console.log(mensaje);
mensaje = "TypeScript";
console.log(mensaje);
let edad = 10;
let nombre = "Eduardo";
let casado = false;
function datoPersona(datos) {
    return datos;
}
let animales = ['Perro', 'Gato', 'Gallo'];
let numeros = [1, 2, 3];
let nums2 = [];
let tupla = [1, ["dato 1, datos 2, datos 3"]];
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.ExtraGrande;
console.log(variable1);
const estado = 2;
const object = {
    id: 1,
    nombre: 'Juan',
    talla: Talla.Grande,
    direccion: {
        numero: 10,
        calle: "Calle 1",
        pais: "México"
    }
};
object.nombre = "eduardo";
object.talla = Talla.Mediana;
const fn = () => {
    console.log("función que no retorna nada");
};
const fn1 = () => {
    console.log("función que no retorna cadena");
    return "";
};
const fn2 = () => {
    let x = 2;
    if (x > 5) {
        return 10;
    }
    else {
        return 1;
    }
};
const fn3 = (edad) => {
    if (edad > 17) {
        return "Eres mayor";
    }
    else {
        return "No eres mayor";
    }
};
function validaEdad(edad, msg = 'sin nombre') {
    if (edad > 17)
        return `some text ${msg}`;
    return 'No eres mayor de edad';
}
validaEdad(18, 'Eduardo');
function ErrorUsuario() {
    throw new Error("Error");
}
let animal = { id: 1, estado: '', name: '' };
function sumaDos(n) {
    if (typeof n == 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos('2');
const product = {
    created_at: '',
    modified_at: '',
    name: ''
};
const nDeSerie = 3;
function toNumber(s) {
    if (!s)
        return 0;
    return parseInt(s);
}
const n = toNumber(undefined);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return { id: 1, name: 'Eduardo', created_at: new Date() };
}
const user = getUser(1);
console.log('Usuario ', user === null || user === void 0 ? void 0 : user.created_at);
if (user && user.created_at) {
    console.log(user.created_at);
}
const arra1 = null;
console.log(arra1 === null || arra1 === void 0 ? void 0 : arra1[0]);
const fn5 = null;
console.log(fn5 === null || fn5 === void 0 ? void 0 : fn5());
//# sourceMappingURL=Index.js.map