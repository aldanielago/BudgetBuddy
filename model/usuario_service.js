class Usuario {
  // Crea un usuario y lo guarda en la base de datos
  async crearUsuario(nombre, email, password) {
    const query = `INSERT INTO usuario (nombre, email, password) VALUES ('${nombre}', '${email}', '${password}')`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

  // Devuelve la informacion de usuario si se encontró, sino, devuelve null
  async buscarUsuario(nombre){
    const query = `SELECT * FROM usuario WHERE nombre = '${nombre}'`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

  // Devuelve la informacion de usuario si se autenticó correctamente, sino, devuelve null
  async autenticarUsuario(nombre, password){
    const query = `SELECT * FROM usuario WHERE nombre = '${nombre}' AND password = '${password}'`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

}

module.exports = Usuario
