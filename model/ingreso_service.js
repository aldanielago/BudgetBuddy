const connection = require('../controller/connection')

class Ingreso {
  constructor() {
    this.connection = connection
    this.connection.on('error', function(err) {
      console.log("[mysql error]",err);
    });
  }

  // No devolverá nada, solo creará el ingreso
  async crearIngreso(id_usuario, fuente_ingreso, monto_ingreso, fecha_ingreso){
    const query = `INSERT INTO ingreso (id_usuario, fuente_ingreso, monto_ingreso, fecha_ingreso) VALUES (${id_usuario}, ${fuente_ingreso}, ${monto_ingreso} '${fecha_ingreso}')`;
    await this.connection.query(query);
  }

  // Devolverá todos los ingresos del usuario
  async consultarIngresos(id_usuario){
    const query = `SELECT * FROM ingreso WHERE id_usuario = ${id_usuario}`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

  // No devolverá nada, solo eliminará el ingreso
  async eliminarIngreso(id_ingreso){
    const query = `DELETE FROM ingreso WHERE id_ingreso = ${id_ingreso}`;
    await this.connection.query(query);
  }
}

module.exports = Ingreso
