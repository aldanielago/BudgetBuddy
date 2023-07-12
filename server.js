const express  = require('express');
const router_general = require('./controller')
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


router_general(app);

app.listen(port, () => {
  console.log('My port ' + port)
});
