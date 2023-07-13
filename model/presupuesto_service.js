const connection = require('../controller/connection')

class Presupuesto {
  constructor() {
    this.connection = connection
    this.connection.on('error', function(err) {
      console.log("[mysql error]",err);
    });
  }

  // No devolverá nada, solo creará el presupuesto
  async crearPresupuesto(id_usuario, id_categoria, monto){
    const query = `INSERT INTO presupuesto (id_usuario, id_categoria, monto_limite) VALUES (${id_usuario}, ${id_categoria}, ${monto})`;
    await this.connection.query(query);
  }

  // No devolverá nada, solo eliminará el presupuesto
  async eliminarPresupuesto(id_presupuesto){
    const query = `DELETE FROM presupuesto WHERE id_presupuesto = ${id_presupuesto}`;
    await this.connection.query(query);
  }
}

module.exports = Presupuesto
