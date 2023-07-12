const express  = require('express');
const router_general = require('./controller')
const { logError, errorHandler, boomErrorHandler } = require('./controller/error_handler');
const port = 3000;

const app = express();

app.use(express.json())
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello, mi server in express')
});

router_general(app);

app.listen(port, () => {
  console.log('My port ' + port)
});
