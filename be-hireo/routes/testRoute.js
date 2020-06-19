import express from 'express';
import admin from 'firebase-admin';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.post('/create', (req, res) => {
  const db = admin.firestore();
  db.collection('test')
    .doc('LxVLTTzpUMA5LfoE8p7D')
    .set({ test: 'test' })
    .then(() => {
      res.send('Success');
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Error setting document: ', err);
    });
});

router.get('/read', (req, res) => {
  const db = admin.firestore();
  db.collection('test')
    .doc('LxVLTTzpUMA5LfoE8p7D')
    .get()
    .then(doc => {
      res.send(doc.id);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Error reading doc: ', err);
    });
});

router.post('/update', (req, res) => {
  const db = admin.firestore();
  db.collection('test')
    .doc('LxVLTTzpUMA5LfoE8p7D')
    .set({ test: 'test1' })
    .then(() => {
      res.send('Success');
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Error setting document: ', err);
    });
});

router.delete('/delete', (req, res) => {
  const { firestore } = admin;
  const { FieldValue } = firestore;
  const db = admin.firestore();
  db.collection('test')
    .doc('LxVLTTzpUMA5LfoE8p7D')
    .update({ test: FieldValue.delete() })
    .then(() => {
      res.send('Success');
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Error getting document: ', err);
    });
});

router.get('/error', (req, res) => {
  const db = admin.firestore();
  db.collection('test1')
    .doc('test')
    .get()
    .then(doc => {
      if (!doc.exists) {
        res.send("Error document doesn't exist");
      } else {
        res.send(doc.data());
      }
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Error getting document: ', err);
    });
});

export default router;

/* Statuses For reference
res.sendStatus(200) // equivalent to res.status(200).send('OK')
res.sendStatus(403) // equivalent to res.status(403).send('Forbidden')
res.sendStatus(404) // equivalent to res.status(404).send('Not Found')
res.sendStatus(500) // equivalent to res.status(500).send('Internal Server Error')
*/
