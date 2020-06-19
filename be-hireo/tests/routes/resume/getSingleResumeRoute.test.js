import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../app';
import { mockViewId, mockInvalidId } from '../../mockData';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('/resume/getSingle route', () => {
  it('should return status 200', done => {
    chai
      .request(app)
      .get(`/resume/getSingle/${mockViewId}`)
      .end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
  });

  it('should handle no id', done => {
    chai
      .request(app)
      .get('/resume/getSingle/')
      .end((err, res) => {
        res.status.should.be.equal(404);
        done();
      });
  });

  it('should handle invalid id', done => {
    chai
      .request(app)
      .get(`/resume/getSingle/${mockInvalidId}`)
      .end((err, res) => {
        res.status.should.be.equal(400);
        done();
      });
  });
});
