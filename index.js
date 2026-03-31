import { Usuario, UsuarioVIP } from './usuario.js';
import { Producto, ProductoDigital } from './producto.js';
import { calcularTotalCarrito } from './utilidades.js';

/*
//! Checkpoint 1 
//Creen dos instancias de Usuario con roles distintos. Llamen saludo() y resumen() en ambas. 
// Los resultados deben reflejar los datos de cada instancia por separado.
let usuario1 = new Usuario("Marta", "Marta@gmail.com", "administrador" );

console.log(usuario1.saludo());
console.log(usuario1.resumen());
console.log("\n");

let usuario2 = new Usuario("Jose", "Jose@gmail.com", "jefe" );

console.log(usuario2.saludo());
console.log(usuario2.resumen());
console.log("\n");

let usuarioVIP1 = new UsuarioVIP("Jose", "Jose@gmail.com","Gold", "jefe" );

console.log(usuarioVIP1.saludo());
console.log(usuarioVIP1.resumen());
console.log(usuarioVIP1.beneficios());
console.log("\n");


//! Checkpoint 2
//Creen una instancia de UsuarioVIP. Verifiquen que hereda resumen() y desactivar() sin
//necesidad de redefinirlos, y que su saludo() es diferente al de Usuario base.


let usuario3 = new UsuarioVIP("Maria", "maria@gmail.com", "Administrador" );

console.log(usuarioVIP1.saludo());
console.log(usuario3.desactivar());
console.log(usuario3.resumen()+ "\n");
console.log("\n");

//!Checkpoint 3 
// Creen dos productos de categorias distintas. Llamen tarjeta() en ambos y verifiquen que
// calcularTotal() refleja el IVA correctamente. Apliquen un descuento y confirmen que el precio
// original no cambio.

let producto1 = new Producto("Leche", "3500", "lacteos")
console.log(producto1.tarjeta())
producto1.aplicarDescuento(20)
console.log(producto1.tarjeta())

let producto2 = new Producto("Papel Higienico", "2500", "Hogar")
console.log(producto2.tarjeta())
producto1.aplicarDescuento(20)
console.log(producto1.tarjeta())


//!Checkpoint 4
// Creen un ProductoDigital. Llamen calcularTotal() y confirmen que retorna el precio sin IVA.
// Comparen tarjeta() entre un Producto normal y un ProductoDigital.

let productoDigital1 = new ProductoDigital("Mantequilla", "10000", "Mensual" )
console.log(productoDigital1.calcularTotal())
console.log("Factura Producto digital sin IVA " + productoDigital1.tarjeta())
console.log("Factura Producto digital con IVA " + producto1.tarjeta())
*/

//? 3.2 Simular la tienda
// Con las clases importadas, construyan el siguiente escenario:

// 1. Creen al menos tres usuarios: un cliente regular, un administrador y un UsuarioVIP.
console.log("===============USUARIOS===================")
let usuario1 = new Usuario("Marta", "Marta@gmail.com", "regular" );

console.log(usuario1.saludo());
console.log(usuario1.resumen());
console.log("\n");

let usuario2 = new Usuario("Jose", "Jose@gmail.com", "administrador" );

console.log(usuario2.saludo());
console.log(usuario2.resumen());
console.log("\n");

let usuarioVIP1 = new UsuarioVIP("Camila", "Camila@gmail.com","Gold", "jefe" );

console.log(usuarioVIP1.saludo());
console.log(usuarioVIP1.resumen());
console.log(usuarioVIP1.beneficios());
console.log("\n");
console.log("=".repeat(60) + "\n")
// 2. Creen al menos cuatro productos: dos fisicos de categorias distintas y dos digitales con diferentes tipos
// de licencia.
console.log("===============Productos===================")
let producto1 = new Producto("Leche", "3500", "lacteos")
console.log(producto1.tarjeta())


let producto2 = new Producto("Papel Higienico", "2500", "Hogar")
console.log(producto2.tarjeta())


let productoDigital1 = new ProductoDigital("Mantequilla", "10000", "Mensual" )
console.log(productoDigital1.tarjeta())

let productoDigital2 = new ProductoDigital("Queso", "25000", "De por vida" )
console.log(productoDigital2.tarjeta())

const productos = [producto1, producto2, productoDigital1, productoDigital2]

console.log("======================================")
// 3. Desactiven uno de los usuarios y verifiquen que resumen() lo refleja.
usuarioVIP1.desactivar()
console.log(usuarioVIP1.resumen())

// 4. Apliquen un descuento de 20% a uno de los productos fisicos e impriman el precio resultante.
console.log("================Descuento================")
producto1.aplicarDescuento(20)
console.log(`Descuento aplicado a producto 1 : \n ${producto1.tarjeta()}`)
producto2.aplicarDescuento(20)
console.log(`Descuento aplicado a producto 2 : \n ${producto2.tarjeta()}`)

console.log("========================================== \n")

//!Checkpoint 5
// Checkpoint 5 Ejecuten node index.js. El output debe mostrar la tarjeta de cada producto y el resumen de
// cada usuario. Ninguna clase debe estar definida en este archivo.

// 5. Impriman la tarjeta() de todos los productos.
console.log("=============Tarjeta de todos los producto==============")
console.log(producto1.tarjeta())
console.log(producto2.tarjeta())
console.log(productoDigital1.tarjeta())
console.log(productoDigital2.tarjeta())
console.log("=".repeat(60) + "\n")
// 6. Impriman el resumen() de todos los usuarios.
console.log("============IMPRESION TODOS LOS USUARIOS=================")
console.log(usuario1.resumen())
console.log(usuario2.resumen())
console.log(usuarioVIP1.resumen())
console.log("=".repeat(60) + "\n")

console.log("==================TOTAL CARRITO===========================")
console.log(`El total del carrito es igual a ${calcularTotalCarrito(productos)}`)
console.log("=".repeat(60) + "\n")
