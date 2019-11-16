const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const crypto = require('crypto');

//Generacion del password encriptado
function hashPassword(sleeker, options) {
  const SALT_FACTOR = 8;
  if (!sleeker.changed('password')) {
    return;
  }
  //encriptacion md5
  let encrypt = crypto
    .createHash('md5')
    .update(
      sleeker.email + sleeker.nombres + sleeker.apellidos + sleeker.createdAt,
    )
    .digest('hex');
  //bcrypt
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashSync(sleeker.password, salt, null))
    .then(hash => {
      sleeker.setDataValue('password', hash);
      sleeker.setDataValue('hash_id', encrypt);
    });
}

module.exports = (sequelize, DataTypes) => {
  const sleeker = sequelize.define(
    'sleeker',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      hash_id: {
        type: DataTypes.STRING,
        unique: true,
      },
      nombres: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      num_tel: DataTypes.STRING,
      usuario: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING, //Encriptado
      num_servicios_completados: DataTypes.INTEGER,
      url_foto_perfil: DataTypes.STRING,
      tipo_sleeker: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeSave: hashPassword,
      },
    },
  );
  return sleeker;
};
