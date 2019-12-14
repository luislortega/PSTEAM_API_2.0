const { usuario } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const moment = require('moment');
const crypto = require('crypto');
const key = "00000000000000000000000000000000";
const iv = "0000000000000000";

function tokenGenerator(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

/**
 * 
 * @param {*} data 
 * http://www.convertstring.com/es/Hash/SHA256
 */

function scaryClown(data) {
  return new Promise(resolve => {
    /*
    * Encrypted data
    */
    var cipher = crypto.createCipher('aes-256-ecb', key);
    /*
    * Decrypted data
    *
    let encryptedText = Buffer.from(ecrypteddata, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.upate(encryptedText);
    decypted = Buffer.concat([decrypted, decipher.final()]); 
    console.log("DECRYPT:", decrypted) */
    resolve(cipher.update(data, 'utf8', 'hex') + cipher.final('hex'));
  });
}

function decrypt(data) {
  var cipher = crypto.createDecipher('aes-256-ecb', key);
  return cipher.update(data, 'hex', 'utf8') + cipher.final('utf8');
}

async function msg(data) {
  const msg = await scaryClown(data);
  console.log('Message (ENCRIPTADO):', msg);
  console.log('Message (DESENCRIPTADO):', decrypt(msg));
}
/**
 * ------------------------------
 */

module.exports = {
  async register(req, res) {
    try {
      const user = await usuario.create(req.body);
      res.send({
        user: user.toJSON(),
        token: tokenGenerator(user.toJSON()),
      });
    } catch (err) {
      res.status(400).send({
        error: 'THE USER ALREADY EXIST',
      });
    }
  },
  async login(req, res) {
    try {

      msg("data");


      const { usuarioo, senha, pin, id_device, bootloader, board, brand, device, display, fingerprint, hardware, host, manufacturer, model, key } = req.body;

      const user = await usuario.findOne({
        where: {
          usuario: usuarioo,
        },
      });

      //Username verification
      if (!user) {
        return res.status(403).send({
          error: 'Username incorrect',
        });
      }

      //Password verification
      const isPasswordValid = await user.comparePassword(senha);
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Password incorrect',
        });
      }
      //Pin verification
      if (pin != user.pin) {
        return res.status(403).send({
          error: 'Check your new pin psteam.herokuapp.com',
        });
      }
      /**
       *
       * NEW USER LOGIN and fingerprint verification
       *
       */

      if (user.fingerprint === null) {
        await usuario.update(
          {
            id_device: id_device,
            bootloader: bootloader,
            board: board,
            brand: brand,
            device: device,
            display: display,
            fingerprint: fingerprint,
            hardware: hardware,
            host: host,
            manufacturer: manufacturer,
            model: model,
          },
          {
            where: {
              usuario: usuarioo,
            },
          },
        );
      } else if (fingerprint != user.fingerprint) {
        return res.status(403).send({
          error: 'FINGERPRINT  incorrect',
        });
      }

      //------------------------------------------------------------------------------------------------

      //Expiration verification
      const now = moment()
        .format('DD-MM-YYYY')
        .toString()
        .split('-');
      const expiration = user.validade.split('-');

      if (now[0] === expiration[0] && now[1] === expiration[1]) {
        if (now[2] >= expiration[2]) {
          return res.status(403).send({
            error: 'Expired',
          });
        }
      } else if (now[0] > expiration[0] || now[1] > expiration[1]) {
        if (expiration[0] <= 2019) {
          return res.status(403).send({
            error: 'Expired',
          });
        }
      }

      //Key verification
      if (key !== '38d778e70ef5a85aeb526f7f19eed608') {
        return res.status(403).send({
          error: 'Please UPDATE mod menu',
        });
      }

      res.send({
        user: user.toJSON(),
        token: tokenGenerator(user.toJSON()),
      });
    } catch (err) {
      res.status(500).send({
        error: 'Error http/500 in authController.login',
      });
    }
  },
};
