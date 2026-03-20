import { Usuario, UsuarioVIP } from './usuario.js';


let usuario1 = new Usuario("Marta", "Marta@gmail.com", "administrador" );

console.log(usuario1.saludo());
console.log(usuario1.resumen());

let usuario2 = new Usuario("Jose", "Jose@gmail.com", "jefe" );

console.log(usuario2.saludo());
console.log(usuario2.resumen());

let usuarioVIP1 = new UsuarioVIP("Jose", "Jose@gmail.com","Gold", "jefe" );

console.log(usuarioVIP1.saludo());
console.log(usuarioVIP1.resumen());
