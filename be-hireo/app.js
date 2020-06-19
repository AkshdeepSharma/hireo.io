/* eslint-disable import/order */
/* eslint-disable import/first */
import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert('./.keys/hireo_firebase.json'),
  databaseURL: 'https://hireo-897d1.firebaseio.com',
  storageBucket: 'gs://hireo-897d1.appspot.com/'
});

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import responseTime from 'response-time';
import testRoute from './routes/testRoute';
import resumeRoute from './routes/resume/route';

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
const corsOptions = {
  exposedHeaders: 'x-response-time'
};
app.use(cors(corsOptions));
app.use(responseTime());

const port = 4000;

app.get('/', (req, res) => {
  res.send('Default ("/") path - no data here.');
});

app.use('/test', testRoute);
app.use('/resume', resumeRoute);
app.use('/resume', resumeRoute);
app.use('/resume', resumeRoute);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}!`);
});

export default app;
