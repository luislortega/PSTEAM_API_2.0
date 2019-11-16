export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    expiration: DataTypes.STRING,
    pin: DataTypes.INTEGER,
    unique_id_android: DataTypes.STRING,
  });
  return User;
};
