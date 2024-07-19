"use strict";
class DatosBasicos {
    constructor(name, desc, created_at, created_by) {
        this.name = name;
        this.desc = desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
    get fullDesc() {
        return this.name + '**' + this.desc;
    }
}
class Producto extends DatosBasicos {
    constructor(stock, sku, name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
        this.productos = [];
    }
    get fullDesc() {
        return "Producto " + super.fullDesc;
    }
    guardar() {
        console.log("Guardando la producto");
    }
}
class Categoria extends DatosBasicos {
    constructor(name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    guardar() {
        console.log("Guardando la categoría");
    }
}
let producto1 = new Producto(100, 1, "Producto1", "Producto1", new Date(), 1);
let categoria = new Categoria("Celulares", "Motorola", new Date(), 1);
categoria.agregarProducto(producto1);
console.log(producto1, categoria);
console.log(producto1.fullDesc, categoria);
console.log(producto1.guardar(), categoria.guardar());
//# sourceMappingURL=Herencia.js.map