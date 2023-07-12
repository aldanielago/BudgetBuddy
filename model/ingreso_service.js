class Ingreso {

  async crearIngreso(id_usuario, id_categoria, monto, descripcion, fecha){
    const query = `INSERT INTO ingreso (id_usuario, id_categoria, monto, descripcion, fecha) VALUES (${id_usuario}, ${id_categoria}, ${monto}, '${descripcion}', '${fecha}')`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

  async consultarIngresos(id_usuario){
    const query = `SELECT * FROM ingreso WHERE id_usuario = ${id_usuario}`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }

  async eliminarIngreso(id_ingreso){
    const query = `DELETE FROM ingreso WHERE id_ingreso = ${id_ingreso}`;
    const rta = await this.connection.query(query);
    return rta.rows;
  }
}

module.exports = Ingreso
