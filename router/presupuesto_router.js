const express  = require('express');

const router = express.Router();
const ServiciosPresupuesto = require('../service/presupuesto_service');
const service = new ServiciosPresupuesto();

// Crear presupuesto
router.post('/crear', async (req, res) => {
  try {
    const {id_usuario, id_categoria, monto} = req.body;
    if (!id_usuario || !id_categoria || !monto) {
      res.status(400).json({ error: 'Faltan datos' });
      return;
    }

    await service.crearPresupuesto(id_usuario, id_categoria, monto);
    res.status(200).json({ mensaje: 'Presupuesto creado' });
  } catch (error) {
    res.status(500).json({ error: 'Error raro' });
  }
});

// Eliminar presupuesto
router.delete('/eliminar', async (req, res) => {
  try {
    const { id_presupuesto } = req.body;
    if (!id_presupuesto) {
      res.status(400).json({ error: 'Faltan datos' });
      return;
    }

    await service.eliminarPresupuesto(id_presupuesto);
    res.status(200).json({ mensaje: 'Presupuesto eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error raro' + error });
  }
});

module.exports = router
