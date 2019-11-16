//import sendEmail from '../mailservice/mailer';
const { usuario } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');


/**
 * Generacion de token para sesion de usuario
 * @param {*} user
 */
function tokenGenerator(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await usuario.create(req.body);
      /* mail service */
      //sendEmail(user);
      res.send({
        user: user.toJSON(),
        token: tokenGenerator(user.toJSON()),
      });
    } catch (err) {
      res.status(400).send({
        error: 'Error http/400 error al registrar',
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await usuario.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: 'Error http/403 el usuario no existe',
        });
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Error http/403 la contraseña no es la correcta',
        });
      }
      res.send({
        user: user.toJSON(),
        token: tokenGenerator(user.toJSON()),
      });
    } catch (err) {
      res.status(500).send({
        error: 'Error http/500 en authController.login',
      });
    }
  },
  register_sleeker(req, res) {
    try {
      // Do the function.
    } catch (err) {
      res.status(500).send({
        error: 'Error http/500 en authController.register_sleeker',
      });
    }
  },
  login_sleeker(req, res) {
    try {
      // Do the function.
    } catch (err) {
      res.status(500).send({
        error: 'Error http/500 en authController.login_sleekr',
      });
    }
    res.send('Metodo de login funcionadno');
  },
};
