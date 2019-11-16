module.exports = (sequelize, DataTypes) => {
  const comentario = sequelize.define('comentario', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    status_usuario: DataTypes.INTEGER,
    user_url_foto_perfil: DataTypes.STRING,
    user_nombres: DataTypes.STRING,
    user_apellidos: DataTypes.STRING,
    comentario: DataTypes.STRING,
  });
  //Asociacion de las tablas
  comentario.associate = models => {
    comentario.belongsTo(models.usuario); // User than use Bookmark
  };
  return comentario;
};
