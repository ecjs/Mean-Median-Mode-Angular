var mmm = require('../lib/mmm.js');
module.exports = function(app) {
  app.post('/mmm', function(req, res) {
    res.send('works');
  });
};
