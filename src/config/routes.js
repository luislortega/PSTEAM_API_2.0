const LoginController = require('../controllers/login_controller');

module.exports = app => {
  /**
   * login
   *
   * Receive a JSON with the user
   *
   * Verify the password
   * Verify that it has not expired.
   * Verify the device's unique android id
   * Verify the user's pin
   *
   * Returns the user data to double check the UI
   */
  app.post('/login', LoginController.login);

  /**
   * verify_version
   *
   * Receive the hash of the version
   *
   * Remove the encryption to the received version and compare them
   *
   * Returns TRUE or FALSE if they do not match
   */
  app.get('/verify_version/:hash_version', (req, res) => {
    res.send('Verificando la version...');
  });

  /**
   * verify_server
   *
   * Receive the server ip hash
   *
   * Remove the encryption to the received ip and compare them
   *
   * Returns TRUE or FALSE if they do not match
   */
  app.get('/verify_server/:hash_server', (req, res) => {
    res.send('Verificando servidor...');
  });

  /**
   * consult_pin
   *
   * Receive the customer's username
   *
   * Returns the user's pin
   */
  app.get('/consult_pin/:username', (req, res) => {
    res.send('Consultando el nuevo pin');
  });

  /**
   * d0d4e28d3f1140240e8695c97d2bf330
   *
   * Update all user pins
   */
  app.get('/d0d4e28d3f1140240e8695c97d2bf330', (req, res) => {
    res.send('Actualizando los pins...');
  });
};
