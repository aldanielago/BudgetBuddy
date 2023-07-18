const connection = require('../router/connection')

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
    const rta = await this.connection.query(query, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    return rta.rows;
  }

  // Devolverá la informacion del usuario
  async buscarUsuario(nombre){
    const query = `SELECT * FROM usuario WHERE nombre_usuario = '${nombre}'`;
    const rta = await this.connection.query(query, function (err, result) {
      if (err) throw err;
      console.log(result.rows);

    });
    console.log(rta.rows);
    return rta.rows;
  }

  // Devolverá la informacion del usuario
  async autenticarUsuario(nombre, password){
    const query = `SELECT id_usuario FROM usuario WHERE nombre_usuario = '${nombre}' AND contraseña = '${password}'`;

    const rta = await this.connection.query(query, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted" + result.rows);
      }
    );
    console.log("En autenticar usuario esta mandando: ");
    return rta.rows;
  }

}

module.exports = Usuario
