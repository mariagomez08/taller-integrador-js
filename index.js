import { Usuario, UsuarioVIP } from './usuario.js';

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
