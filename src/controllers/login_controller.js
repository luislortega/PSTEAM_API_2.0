const { user } = require('../models')

module.exports = {
  login(req, res) {
    try {
      const user = req.body;
      console.log(user.password);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'ERROR [500] in logsin',
      });
    }
  },
  async create_user(req, res){
    try {
        await user.create({
            username:"blabla",
            password: "dsadasd",
            expiration: "2000-12-31",
            pin: 1234,
            unique_id_android: "103085836787603"
        });

        res.send("listo crack")
      } catch (err) {
          console.log(err);
        res.status(400).send({
          error: "ERROR CREATING THE USER"
        })
      }
  }
};
