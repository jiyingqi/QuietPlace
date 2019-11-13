import Fb from 'firebase';

const config = {
  apiKey: 'AIzaSyBla9HueTWOkqMjfU8aBSsXZfnC6oihLFM',
  authDomain: 'project-quiet-place.firebaseapp.com',
  databaseURL: 'https://project-quiet-place.firebaseio.com/',
};

const Firebase = Fb.initializeApp(config);

export default Firebase;