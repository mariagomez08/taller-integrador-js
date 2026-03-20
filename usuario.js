/*
Un metodo saludo() que retorna una presentacion con nombre y rol.
• Un metodo desactivar() que cambia activo a false y retorna un mensaje confirmando el cambio.
• Un metodo resumen() que retorna nombre, email, rol y si la cuenta esta activa o inactiva
*/
class Usuario{
    constructor(nombre, email, rol = "cliente"){
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;

    }

    saludo(){
        return `Hola ${this.nombre} tienes como rol ${this.rol}`
    }

    desactivar() {
    this.activo = false;
    return `Su estado es inactivo `;
    }
    resumen(){
        const estadoCuenta = this.activo ? "activa" : "inactiva";
        return `El nombre del usuario es : ${this.nombre} tiene como rol ${this.rol}, su email es : ${this.email} y su cuenta está ${estadoCuenta}`
    }

}

class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia, rol = "Cliente VIP"){
        super(nombre, email, rol);
        this.membresia = membresia;
    }

    saludo(){
        return `${super.saludo()} y cuentas con una membresia ${this.membresia}`;
    }

    }
export { Usuario, UsuarioVIP };