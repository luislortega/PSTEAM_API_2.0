const { usuario } = require('../models');

module.exports = {
  async updateDate(req, res) {
    try {
      const user = await usuario.update(
        {
          expiration: req.body.new_expiration,
        },
        {
          where: {
            username: req.body.username,
          },
        },
      );
      res.send(user);
    } catch (err) {
      res.status(500).send({
        error: 'Error http/500 in userController.updateDate',
      });
    }
  },
  async searchPin(req, res){
    try {
      const user = await usuario.findOne({
        where: {
          username: req.body.username,
        }
      })
      res.send({
        pin: user.pin
      });
    } catch (err) {
      res.status(500).send({
        error: 'Error http/500 in userController.searchPin',
      });
    }
  }
};
