export default (sequelize, DataTypes) => {
  const Global_vars = sequelize.define('global_vars', {
    hash_version: DataTypes.STRING,
    hash_pin: DataTypes.STRING,
  });
  return Global_vars;
};
