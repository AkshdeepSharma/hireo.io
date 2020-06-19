import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../app';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('/resume/getNext route', () => {
  it('should get stuff from document store', done => {
    chai
      .request(app)
      .get('/resume/getNext')
      .end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
  });
});
