const connection = require('../router/connection')

class Egreso {
  constructor() {
    this.connection = connection
    this.connection.on('error', function(err) {
      console.log("[mysql error]",err);
    });
  }

  // No devolverá nada, solo creará el egreso
  async crearEgreso(id_usuario, id_categoria, id_estado, monto, fecha_pago){
    const query = `INSERT INTO egreso (id_usuario, id_categoria, id_estado, monto_egreso, fecha_pago) VALUES (${id_usuario}, ${id_categoria}, ${id_estado}, ${monto}, '${fecha_pago}')`;
    await this.connection.query(query, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  }

  // Devolverá todos los egresos del usuario
  async consultarEgresos(id_usuario){
    const query = `SELECT * FROM egreso WHERE id_usuario = ${id_usuario}`;
    const rta = await this.connection.query(query, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    return rta.rows;
  }

  // No devolverá nada, solo eliminará el egreso
  async eliminarEgreso(id_egreso){
    const query = `DELETE FROM egreso WHERE id_egreso = ${id_egreso}`;
    const rta = await this.connection.query(query, function (err, result) {
      if (err) throw err;
      console.log("1 record deleted");
    });
  }
}

module.exports = Egreso
