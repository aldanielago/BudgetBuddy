const express  = require('express');

const router = express.Router();
const ServiciosPresupuesto = require('../model/presupuesto_service');
const service = new ServiciosPresupuesto();

// Crear presupuesto
router.post('/crear', async (req, res) => {
  const {id_usuario, id_categoria, monto} = req.body;
  if (!id_usuario || !id_categoria || !monto) {
    res.status(400).json({ error: 'Faltan datos' });
    return;
  }

  const presupuesto = await service.crearPresupuesto(id_usuario, id_categoria, monto);
  res.status(201).json(presupuesto);
});

// Eliminar presupuesto
router.delete('/eliminar', async (req, res) => {
  const { id_presupuesto } = req.body;
  const presupuesto = await service.eliminarPresupuesto(id_presupuesto);
  res.status(200).json(presupuesto);
});

module.exports = router
