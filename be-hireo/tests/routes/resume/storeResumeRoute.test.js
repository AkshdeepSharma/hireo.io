import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../app';
import { badMockCreateBody, mockCreateBody } from '../../mockData';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('resume/store route', () => {
  it('should return status 200', done => {
    chai
      .request(app)
      .post('/resume/store')
      .send(mockCreateBody)
      .end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
  });

  it('should return error on bad data', done => {
    chai
      .request(app)
      .post('/resume/store')
      .send(badMockCreateBody)
      .end((err, res) => {
        res.status.should.be.equal(400);
        done();
      });
  });
});
