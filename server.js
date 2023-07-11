const express  = require('express');
const router_general = require('./routes')

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hola mi server en express')
});

router_general(app);

app.listen(port, () => {
  console.log('My port ' + port)
});
