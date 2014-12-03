var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);
var c = require('../../server');

var currentPort = process.env.PORT || 3000;

describe('Testing API', function() {
  it('Able to get back mean median mode', function(done) {
    chai.request('http://localhost:' + currentPort)
    .post('/mmm')
    .send([5, 5, 6, 7, 8])
    .end(function(err, res) {
      if (err) return console.log('error sending post');
      expect(res).to.have.status(200);
      expect(res.body.mean).to.eql(6.2);
      expect(res.body.median).to.eql(6);
      expect(res.body.mode).to.eql('5');
      done();
    });
  });
});
