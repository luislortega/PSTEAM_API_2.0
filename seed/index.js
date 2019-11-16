//Modelos
const {
  sequelize,
  usuario,
  sleeker,
  servicio,
  comentario,
  chat,
} = require('../src/models');
const Promise = require('bluebird');
//Datos por default en JSON
const usuarios = require('./usuarios.json');
const sleekers = require('./sleekers.json');
const servicios = require('./servicios.json');
const comentarios = require('./comentarios.json');
const chats = require('./chats.json');

//Seed que crea elementos por default
sequelize.sync({ force: true }).then(async function() {
  await Promise.all(
    usuarios.map(usuarios => {
      usuario.create(usuarios);
    }),
  );
  await Promise.all(
    sleekers.map(sleekers => {
      sleeker.create(sleekers);
    }),
  );
  await Promise.all(
    servicios.map(servicios => {
      servicio.create(servicios);
    }),
  );
  await Promise.all(
    comentarios.map(comentarios => {
      comentario.create(comentarios);
    }),
  );
  await Promise.all(
    chats.map(chats => {
      chat.create(chats);
    }),
  );
});
