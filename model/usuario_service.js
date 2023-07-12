const connection = require('../controller/connection')

class Usuario {
  constructor() {
    this.connection = connection
    this.connection.on('error', function(err) {
      console.log("[mysql error]",err);
    });
  }

  // Crea un usuario y lo guarda en la base de datos
  async crearUsuario(nombre, email, password) {
    const query = `INSERT INTO usuario (nombre_usuario, correo, contraseña) VALUES ('${nombre}', '${email}', '${password}')`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

  // Devuelve la informacion de usuario si se encontró, sino, devuelve null
  async buscarUsuario(nombre){
    const query = `SELECT * FROM usuario WHERE nombre_usuario = '${nombre}'`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

  // Devuelve la informacion de usuario si se autenticó correctamente, sino, devuelve null
  async autenticarUsuario(nombre, password){
    const query = `SELECT * FROM usuario WHERE nombre_usuario = '${nombre}' AND contraseña = '${password}'`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

}

module.exports = Usuario
