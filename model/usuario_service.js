const connection = require('../controller/connection')

class Usuario {
  constructor() {
    this.connection = connection
    this.connection.on('error', function(err) {
      console.log("[mysql error]",err);
    });
  }

  // Devolverá la informacion del usuario creado
  async crearUsuario(nombre, email, password) {
    const query = `INSERT INTO usuario (nombre_usuario, correo, contraseña) VALUES ('${nombre}', '${email}', '${password}')`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

  // Devolverá la informacion del usuario
  async buscarUsuario(nombre){
    const query = `SELECT * FROM usuario WHERE nombre_usuario = '${nombre}'`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

  // Devolverá la informacion del usuario
  async autenticarUsuario(nombre, password){
    const query = `SELECT * FROM usuario WHERE nombre_usuario = '${nombre}' AND contraseña = '${password}'`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

}

module.exports = Usuario
