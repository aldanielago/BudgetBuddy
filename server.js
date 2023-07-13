const express  = require('express');
const router_general = require('./controller/index')
const { logError, errorHandler, boomErrorHandler } = require('./controller/error_handler');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
const cors = require('cors')
const path = require('path');

app.use(express.json());
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.use(express.static(path.join(__dirname, 'view')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

router_general(app);

app.listen(port, () => {
  console.log('My port ' + port)
});
