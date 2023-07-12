const con = require('../controller/connection');
const connection = require('../controller/connection')

class Egreso {

  constructor() {
    this.connection = connection
    this.connection.on('error', function(err) {
      console.log("[mysql error]",err);
    });
  }

  async crearEgreso(id_usuario, id_categoria, id_estado, monto, fecha_pago){
    const query = `INSERT INTO egreso (id_usuario, id_categoria, id_estado, monto, fecha_pago) VALUES (${id_usuario}, ${id_categoria}, ${id_estado}, ${monto}, '${fecha_pago}')`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

  async consultarEgresos(id_usuario){
    const query = `SELECT * FROM egreso WHERE id_usuario = ${id_usuario}`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

  async eliminarEgreso(id_egreso){
    const query = `DELETE FROM egreso WHERE id_egreso = ${id_egreso}`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }
}

module.exports = Egreso
