const express  = require('express');

const router = express.Router();
const ServiciosIngreso = require('../model/ingreso_service');
const service = new ServiciosIngreso()

// Crear ingreso retorna 400 si algo falló o 201 si se creó correctamente
router.post('/crear', async (req, res) => {
  const { id_usuario, fuente_ingreso, monto_ingreso, fecha_ingreso } = req.body
  if (!id_usuario || !fuente_ingreso || !monto_ingreso || !fecha_ingreso) {
    res.status(400).json({ error: 'Faltan datos' })
    return
  }

  const ingreso = await service.crearIngreso(id_usuario, fuente_ingreso, monto_ingreso, fecha_ingreso)
  res.status(201).json(ingreso)
});

// Consultar ingresos por usuario
router.get('/consultar', async (req, res) => {
  const { id_usuario } = req.body
  const ingresos = await service.consultarIngresos(id_usuario);
  res.status(200).json(ingresos)
});

// Eliminar ingreso
router.delete('/eliminar', async (req, res) => {
  const { id_ingreso } = req.body
  const ingreso = await service.eliminarIngreso(id_ingreso);
  res.status(200).json(ingreso)
});

module.exports = router
