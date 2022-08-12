import { defineStore } from 'pinia';
import { auth } from '@/js/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import { useStoreNotes } from '@/store/storeNotes.js';

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: {}
    };
  },
  actions: {
    init() {
      const storeNotes = useStoreNotes();

      onAuthStateChanged(auth, user => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.router.push('/');
          storeNotes.init();
        } else {
          this.user = {};
          storeNotes.clearNotes();
          this.router.replace('/auth');
        }
      });
    },
    register({ email, password }) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;
          // console.log(user);
        })
        .catch(error => {
          // console.log('errorMessage: ' + error.message);
        });
    },
    signOut() {
      signOut(auth)
        .then(() => {
          // console.log('user logout');
        })
        .catch(error => {
          // console.log('logout filure');
        });
    },
    login({ email, password }) {
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;
          // console.log(user);
        })
        .catch(error => {
          const errorMessage = error.message;
          // console.log('errorMessage: ' + errorMessage);
        });
    }
  }
});
