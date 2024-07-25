"use strict";
function log(a, b) {
    console.log(a, b);
    return b;
}
log("dato", 2);
log("Dato1", "Dato2");
log(1, 2);
log("hola1", "hola2");
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({
    encender: () => { }, apagar: () => { }
});
const programador1 = new Programador("Hola eduardo");
function fetchProduct() {
    return {
        key: 'id del producto',
        value: { id: 'id del producto' }
    };
}
class User1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
function print(t) {
    console.log(t);
    return t;
}
function print1(t) {
    console.log(t);
    return t;
}
print({ id: 'idUser', name: 'Eduardo' });
print1({ id: 'idUser1', name: 'Eduardo Domínguez' });
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
class EstadoEliminar extends Estado {
    eliminar(id) {
        this.data = this.data.filter(t => t.id !== id);
    }
}
class EstadoEliminar1 extends Estado {
    eliminar(id) {
        this.data = this.data.filter(t => t.id !== id);
    }
}
class EstadoUsuarios extends Estado {
    reiniciarContrasenas() {
    }
}
const calendar = {
    id: 1, fuente: 'google', dueno: 'yo mero'
};
function getProp(objeto, property) {
    return objeto[property];
}
getProp(calendar, 'id');
getProp(calendar, 'fuente');
getProp(calendar, 'dueno');
const keyVal = {
    'soy un string': 50
};
const p = {
    x: 1
};
const p1 = {
    x: 1,
    y: 1
};
const readOnly = {
    x: 1,
    y: 3,
    desc: 'soy la des'
};
//# sourceMappingURL=genericos.js.map