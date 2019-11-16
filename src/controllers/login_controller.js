module.exports = {
  login(req, res) {
    try {
      console.log(req.body);
      res.send('hi' + req.body);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'ERROR [500] in login',
      });
    }
  },
};
