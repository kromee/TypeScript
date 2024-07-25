"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Route(ruta) {
    return (constructor) => {
        console.log('Ejecutando el decorador de la ruta');
        constructor.prototype.route = ruta;
    };
}
function Method(method) {
    console.log(method);
    return (target, methodname, descriptor) => {
        console.log(target, methodname, descriptor);
        const original = descriptor.value;
        descriptor.value = function (...args) {
            console.log('antes metodo');
            original.call(this, ...args);
            console.log('despues metodo');
        };
    };
}
let ProductoDecorador = class ProductoDecorador {
    Find(val) {
        console.log("Soy el método find" + val);
    }
};
__decorate([
    Method('get')
], ProductoDecorador.prototype, "Find", null);
ProductoDecorador = __decorate([
    Route('/productos')
], ProductoDecorador);
const met = new ProductoDecorador();
met.Find(' Hola mundo');
function UpperCase(target, methodName, propertyDescriptor) {
    console.log(target, methodName, propertyDescriptor);
    const original = propertyDescriptor.get;
    propertyDescriptor.get = function () {
        const r = original === null || original === void 0 ? void 0 : original.call(this);
        if (typeof r === 'string') {
            return r.toUpperCase();
        }
        return r;
    };
}
function Min(min) {
    return (target, propertyName) => {
        let val;
        const descriptor = {
            get() {
                return val;
            },
            set(v) {
                if (v.length < min) {
                    throw new Error(`La propiedad ${propertyName} debe ser menor ${min}`);
                }
                val = v;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class Users {
    constructor(name, lastname, password) {
        this.name = name;
        this.lastname = lastname;
        this.password = password;
    }
    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
}
__decorate([
    Min(6)
], Users.prototype, "password", void 0);
__decorate([
    UpperCase
], Users.prototype, "fullName", null);
const usuario = new Users("Hola", "Mundo", '123456');
console.log(usuario.password);
function Dec1(constructor) {
    console.log('Decorador 1 ' + constructor);
}
function Dec2(constructor) {
    console.log('Decorador 2 ' + constructor);
}
let UsurioComposer = class UsurioComposer {
};
UsurioComposer = __decorate([
    Dec1,
    Dec2
], UsurioComposer);
//# sourceMappingURL=decoradores.js.map