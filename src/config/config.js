// Fix the deprecated system
const Sequelize = require('sequelize');
const op = Sequelize.Op;

module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || 'd69gujn4lbr2gk',
    user: process.env.DB_USER || 'nehvbemosvjsyy',
    password: process.env.DB_PASS || 'b90839bb9c0c804546a9bdb3409f3fce33056db7f425221bdae526821bc1b1ed',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'ec2-174-129-255-26.compute-1.amazonaws.com',
      operatorsAliases: op.gt, //Fix the deprecated string based operator
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret',
  },
};
