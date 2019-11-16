const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

//MD5 Password
function hashPassword(user, options) {
  const SALT_FACTOR = 8;
  let verification_code = '';

  if (!user.changed('password')) {
    return;
  }

  //4 digits pin
  for (let i = 0; i <= 3; i++) {
    verification_code += Math.floor(Math.random() * 10 + 1);
  }

  //Encrypt
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashSync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('pin', verification_code);
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
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING, //Encriptado
      expiration: DataTypes.STRING,
      pin: DataTypes.INTEGER,
      imei: {
        type: DataTypes.STRING,
        unique: true,
      },
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
