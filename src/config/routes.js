const AuthController = require('../controllers/authController');
const UserController = require('../controllers/userController');
const PinController = require('../controllers/pinController');

module.exports = app => {
  /**
   * login
   *
   * @param usuarioo 
   * @param senha 
   * @param pin 
   * @param id_device 
   * @param bootloader 
   * @param board 
   * @param brand 
   * @param device 
   * @param display 
   * @param fingerprint 
   * @param hardware 
   * @param host 
   * @param manufacturer 
   * @param model 
   * @param key
   *
   * @return user & token
   */
  app.post('/login', AuthController.login);

  /**
   * register
   *
   * @param usuarioo
   * @param senha
   * @param validade
   * @param host
   * @param vendedor
   *
   * @return user & token
   */
  app.post('/register', AuthController.register);

  /**
   * 41747ca060fc704c1c3f7c0ebacde6e7
   *
   * @description update the validade of an user
   *
   * @param usuarioo
   * @param new_validade
   *
   * @return true or false
   */
  app.post('/41747ca060fc704c1c3f7c0ebacde6e7', UserController.updateDate);

  /**
   * search user's pin
   *
   * @param usuarioo
   *
   * @return pin
   */
  app.post('/search_pin', UserController.searchPin);

  /**
   * d0d4e28d3f1140240e8695c97d2bf330
   *
   * @description change all the pins every two days
   *
   * @return true or false
   */
  app.get('/d0d4e28d3f1140240e8695c97d2bf330', PinController.updateAllPins);
};
