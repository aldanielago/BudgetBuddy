const express = require('express');
const router = express.Router();

router.get('/:id_categoria/:id_products', (req, res) => {
  const { id_categoria } = req.params;
  const {id_products } = req.params;

  res.json({
    id_categoria,
    id_products,
  })
});

module.exports = router
