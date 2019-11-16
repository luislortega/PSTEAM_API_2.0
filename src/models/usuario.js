const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const crypto = require('crypto');

//Generacion del password encriptado
function hashPassword(user, options) {
  const SALT_FACTOR = 8;
  let verification_code = '';

  if (!user.changed('password')) {
    return;
  }

  //encriptacion md5
  let encrypt = crypto
    .createHash('md5')
    .update(user.email + user.nombres + user.apellidos + user.createdAt)
    .digest('hex');

  //Codigo de verificacion de 4 digitos
  for (let i = 0; i <= 3; i++) {
    verification_code += Math.floor(Math.random() * 10 + 1);
  }

  //bcrypt
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashSync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('hash_id', encrypt);
      user.setDataValue('cod_verificacion', verification_code);
      user.setDataValue('password', hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    'usuario',
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
      cod_verificacion: DataTypes.INTEGER,
      activo: DataTypes.SMALLINT,
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      num_tel: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING, //Encriptado
      latitud: DataTypes.STRING,
      longitud: DataTypes.STRING,
      num_servicios: DataTypes.INTEGER,
      url_foto_perfil: DataTypes.STRING,
    },
    {
      hooks: {
        beforeSave: hashPassword,
      },
    },
  );
  //Comparacion de la password encriptada
  usuario.prototype.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  return usuario;
};
