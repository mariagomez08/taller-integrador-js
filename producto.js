/*
 El constructor recibe nombre, precio y categoria.
• Un metodo calcularTotal() que retorna el precio con IVA incluido (19%).
• Un metodo aplicarDescuento(porcentaje) que retorna el precio con ese descuento aplicado, sin modificar el
precio original.
• Un metodo resumen() que retorna nombre, categoria y precio base.
• Un metodo tarjeta() que retorna nombre, categoria y precio con IVA — el texto que apareceria en una
tienda.
*/
class Producto {
  constructor(nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.categoria = categoria;
  }
  calcularTotal() {
    return this.precio + this.precio * 0.19;
  }

  aplicarDescuento(porcentaje) {
    let totalDescuento = this.precio * (porcentaje / 100);
    this.precio = this.precio - totalDescuento;
    return totalDescuento;
  }

  resumen() {
    return `Hola, ${this.nombre}, su categoria es ${this.categoria} y el precio del producto sin IVA es ${this.precio}`;
  }

  tarjeta() {
    return `
Producto: ${this.nombre}
Precio: ${this.calcularTotal()}
Categoria: ${this.categoria}`;
  }
}

// 2.2 Clase extendida: ProductoDigital
// ProductoDigital hereda de Producto. En Colombia, los productos digitales no aplican IVA:
// • Recibe nombre, precio y licencia (ejemplo: "mensual", "anual", "de por vida").
// • Sobreescribe calcularTotal() — los productos digitales no tienen IVA.
// • Sobreescribe tarjeta() para incluir el tipo de licencia en el texto.

class ProductoDigital extends Producto {
  constructor(nombre, precio, licencia) {
    super(nombre, precio);
    this.licencia = licencia;
  }
  calcularTotal() {
    return this.precio;
  }
  tarjeta() {
    return `
Producto: ${this.nombre}
Precio: ${this.calcularTotal()}
Licencia : ${this.licencia}`;
  }
}

export { Producto, ProductoDigital };
