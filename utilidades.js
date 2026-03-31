// 3.3 Reto adicional
// Si terminan antes del tiempo: Agreguen una funcion calcularTotalCarrito(productos) en
// un archivo nuevo utilidades.js. La funcion recibe un array de productos y retorna la suma de
// calcularTotal() de cada uno. Importenla en index.js y usela con al menos tres productos

export function calcularTotalCarrito(productos) {
    let totalCarrito = 0;
    for(let producto of productos) {
        totalCarrito = producto.calcularTotal() + totalCarrito;
    }
    return totalCarrito;
}