const express  = require('express');
const router_general = require('./router/index');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
const path = require('path');

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Reemplaza esta URL con la del cliente
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'view')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

router_general(app);

app.listen(port, () => {
  console.log('My port ' + port)
});
