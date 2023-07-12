const con = require("../controller/connection");

class Presupuesto {

  async crearPresupuesto(id_usuario, id_categoria, monto){
    const query = `INSERT INTO presupuesto (id_usuario, id_categoria, monto) VALUES (${id_usuario}, ${id_categoria}, ${monto})`;
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
