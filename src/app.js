//Requires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
//POSRT
const port = 8082;
//Express
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
//Routes
require('./config/routes')(app);
//Sequelize sync
sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`👽 Backend corriendo en el puerto '${port}'`);
  });
});
