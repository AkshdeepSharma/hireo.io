import admin from 'firebase-admin';

export const getNext = async (resumeList, filterList) => {
  const db = admin.firestore();
  let resumeRef = db.collection('Resumes');
  const resumeSet = new Set(resumeList);
  let documentId;

  Object.keys(filterList).forEach(filter => {
    resumeRef = resumeRef.where(`filters.${[filter]}`, '==', true);
  });

  await resumeRef.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      if (!resumeSet.has(doc.id)) {
        documentId = doc.id;
      }
    });
  });
  return documentId;
};

export const getResume = async id => {
  const db = admin.firestore();
  const collection = db.collection('Resumes');
  let response;
  await collection
    .doc(id)
    .get()
    .then(doc => {
      if (doc.exists) {
        const data = doc.data();
        response = data;
      } else {
        response = 'error';
      }
    })
    .catch(error => {
      response = error;
    });
  return response;
};

export const storeResumeService = async (timestamp, filters) => {
  const db = admin.firestore();
  const collectionRef = db.collection('Resumes').doc();
  let response;
  const pdfUrl = 'https://akshdeep.me/resume.pdf';
  // eslint-disable-next-line prefer-destructuring
  const id = collectionRef.id;

  await collectionRef
    .set({
      timestamp,
      pdfUrl,
      filters,
      id
    })
    .then(() => {
      response = id;
    })
    .catch(err => {
      response = err;
    });
  return response;
};
