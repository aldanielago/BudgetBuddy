const connection = require('../controller/connection')

class Presupuesto {
  constructor() {
    this.connection = connection
    this.connection.on('error', function(err) {
      console.log("[mysql error]",err);
    });
  }

  async crearPresupuesto(id_usuario, id_categoria, monto){
    const query = `INSERT INTO presupuesto (id_usuario, id_categoria, monto_limite) VALUES (${id_usuario}, ${id_categoria}, ${monto})`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

  async eliminarPresupuesto(id_presupuesto){
    const query = `DELETE FROM presupuesto WHERE id_presupuesto = ${id_presupuesto}`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }
}

module.exports = Presupuesto
