import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('test route', () => {
  it('should return status 200', done => {
    chai
      .request(app)
      .get('/test')
      .end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
  });

  it('should return a success message for the create route', done => {
    chai
      .request(app)
      .post('/test/create')
      .end((err, res) => {
        res.text.should.equal('Success');
        done();
      });
  });

  it('should return the document id', done => {
    const id = 'LxVLTTzpUMA5LfoE8p7D';
    chai
      .request(app)
      .get('/test/read')
      .end((err, res) => {
        res.text.should.equal(id);
        done();
      });
  });

  it('should return a success message for the update route', done => {
    chai
      .request(app)
      .post('/test/update')
      .end((err, res) => {
        res.text.should.equal('Success');
        done();
      });
  });

  it('should return a success message for the delete route', done => {
    chai
      .request(app)
      .delete('/test/delete')
      .end((err, res) => {
        res.text.should.equal('Success');
        done();
      });
  });

  it('should return an error message', done => {
    const message = "Error document doesn't exist";
    chai
      .request(app)
      .get('/test/error')
      .end((err, res) => {
        res.text.should.equal(message);
        done();
      });
  });
});
