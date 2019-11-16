module.exports = app => {
  /**
   *  login
   *
   * Recibe un JSON con el usuario
   *
   * Verifica la contraseña
   * Verifica que no haya expirado.
   * Verifica el id unico de android del dispositivo
   * Verifica el pin del usuario
   *
   * Devuelve los datos del usuario para hacer una doble verificacion en la UI
   */
  app.post('/login', (req, res) => {
    res.send('Login seguro...');
  });

  /**
   * verificar_version
   *
   * Recibe el hash de la version
   *
   * Quita la encriptacion a la version recibida y las compara
   *
   * Devuelve TRUE o FALSE en caso de que no coincidan
   */
  app.get('/verificar_version/:hash_version', (req, res) => {
    res.send('Verificando la version...');
  });

  /**
   * verificar_server
   *
   * Recibe el hash del ip del servidor
   *
   * Quita la encriptacion al ip recibido y los compara
   *
   * Devuelve TRUE o FALSE en caso de que no coincidan
   */
  app.get('/verificar_server/:hash_server', (req, res) => {
    res.send('Verificando servidor...');
  });

  /**
   * consultar_pin
   *
   * Recibe el nombre de usuario del cliente
   *
   * Devuelve el pin del usuario
   */
  app.get('/consultar_pin/:username', (req, res) => {
    res.send('Consultando el nuevo pin');
  });

  /**
   * d0d4e28d3f1140240e8695c97d2bf330
   *
   * Actualiza todos los pins de los usuarios
   */
  app.get('/d0d4e28d3f1140240e8695c97d2bf330', (req, res) => {
    res.send('Actualizando los pins...');
  });
};
