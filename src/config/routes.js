const AuthController = require('../controllers/authController');

module.exports = app => {
  /**
   * User
   * 
   * * Login
   * * Registro
   */
  app.post('/login', AuthController.login);
  app.post('/register', AuthController.register);
  /**
   * ONFIX partner
   * 
   * * Login
   * * Registro
   */
  app.post('/loginslk', AuthController.login_sleeker);
  app.post('/registroslk', AuthController.register_sleeker);
};
