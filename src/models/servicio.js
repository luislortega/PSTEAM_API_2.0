module.exports = (sequelize, DataTypes) => {
  const servicio = sequelize.define('servicio', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    user_hash: DataTypes.STRING,
    tipo_serv: DataTypes.INTEGER,
    tipo_disp: DataTypes.INTEGER,
    nom_marca: DataTypes.STRING,
    nom_modelo: DataTypes.STRING,
    num_serie: DataTypes.INTEGER,
    falla: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    observaciones: DataTypes.STRING,
    status: DataTypes.JSON,
    participantes: DataTypes.JSON,
    finalizado: DataTypes.INTEGER,
    chat_id: DataTypes.INTEGER,
  });
  //Asociacion de las tablas
  servicio.associate = models => {
    servicio.belongsTo(models.usuario), servicio.belongsTo(models.chat);
  };
  return servicio;
};
