import Sequelize from 'sequelize';

const sequelize = new Sequelize('psteam', 'postgres', '1298Luis', {
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
});

const models = {
  User: sequelize.import('./user'),
  Global_vars: sequelize.import('./global_vars'),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
