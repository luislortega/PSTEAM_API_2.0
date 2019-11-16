const AuthController = require('../controllers/authController');

module.exports = app => {
  /**
   * login
   * 
   * @param username  
   * @param password
   * @param pin
   * @param imei 
   * @param key
   * 
   * @return user & token
   */
  app.post('/login', AuthController.login);
  
  /**
   * register
   * 
   * @param username  
   * @param password
   * @param imei 
   * @param expiration
   * 
   * @return user & token
   */
  app.post('/register', AuthController.register);
  
  /**
   * update_date
   * 
   * @param username  
   * @param password
   * @param new_expiration
   * 
   * @return true or false
   */
  app.post('/update_date', (req, res) => {
    res.send("updating date...")
  });

  /**
   * update_date
   * 
   * @param username  
   * 
   * @return pin
   */
  app.post('/search_pin', (req, res) => {
    res.send('Searching pin...');
  });

  /**
   * d0d4e28d3f1140240e8695c97d2bf330
   * 
   * @description change all the pins every two days
   * 
   * @return true or false
   */
  app.get('/d0d4e28d3f1140240e8695c97d2bf330', (req, res) => {
    res.send('Changing pins...')
  });
};
