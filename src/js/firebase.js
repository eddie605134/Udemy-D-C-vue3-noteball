
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDgwBjeXR8u3oP30gH45lCHjXL0ccDZcjo',
  authDomain: 'noteballs-b945b.firebaseapp.com',
  projectId: 'noteballs-b945b',
  storageBucket: 'noteballs-b945b.appspot.com',
  messagingSenderId: '1037466599705',
  appId: '1:1037466599705:web:b9e5e9f50d515ae632c588'
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth
}