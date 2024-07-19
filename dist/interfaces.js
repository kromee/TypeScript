"use strict";
class Caballo {
    constructor() {
        this.name = "Rocinante";
    }
    caminar() {
        console.log("Caballo caminando");
    }
    anomatopeya() {
        return "hin";
    }
}
class Cerdo {
    constructor() {
        this.name = "Marrano";
    }
    caminar() {
        console.log("Puerco caminando");
    }
    anomatopeya() {
        return "Oing";
    }
}
class Perro {
    constructor() {
        this.name = "Boby";
    }
    caminar() {
        console.log("Perro caminando");
    }
    anomatopeya() {
        return "Guau";
    }
}
class DiccionarioUsuario {
}
let diccionarioUsuarios = new DiccionarioUsuario();
diccionarioUsuarios['a1'] = "Usuario 1";
diccionarioUsuarios['1a'] = "Usuario 2";
console.log(diccionarioUsuarios);
//# sourceMappingURL=interfaces.js.map