// Imports
import models from './models';
//Requires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./config/routes')(app);

models.sequelize.sync({ force: true }).then(() => {
  app.listen(8081, () => {
    console.log('👽 Backend running');
  });
});
