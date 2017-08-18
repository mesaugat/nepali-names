import * as firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  databaseURL: 'https://nepali-names.firebaseio.com'
};

firebase.initializeApp(config);

export default firebase;
