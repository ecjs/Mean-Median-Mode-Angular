var mmm = require('../lib/mmm.js');

module.exports = function(app) {
  app.post('/mmm', function(req, res) {
    res.send({
      mean: mmm.meanFind(req.body),
      median: mmm.medianFind(req.body),
      mode: mmm.modeFind(req.body)
    });
  });
};
