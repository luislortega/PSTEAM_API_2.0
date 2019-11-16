module.exports = (sequelize, DataTypes) => {
  const chat = sequelize.define('chat', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    user_hash: DataTypes.STRING,
    sleeker_hash: DataTypes.STRING,
    mensajes: DataTypes.JSON,
  });
  //Asociacion de las tablas
  chat.associate = models => {
    chat.belongsTo(models.usuario), chat.belongsTo(models.sleeker);
  };
  return chat;
};
