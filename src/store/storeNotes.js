import { defineStore } from 'pinia';
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
  query,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from '@/js/firebase.js';
import { useStoreAuth } from '@/store/storeAuth.js';

let noteCollection;
let noteCollectionQuery;
let getNoteSnap = null;

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
      noteLoaded: true
    };
  },
  actions: {
    init() {
      const storeAuth = useStoreAuth();
      // noteCollection = collection(db, 'users', storeAuth.user.id, 'notes');
      noteCollection = collection(db, 'users', storeAuth.user.id, 'notes');
      noteCollectionQuery = query(noteCollection, orderBy('date', 'desc'), limit(10));
      this.getNotes();
    },
    async getNotes() {
      this.noteLoaded = false;

      getNoteSnap = onSnapshot(noteCollectionQuery, querySnapshot => {
        let notes = [];
        querySnapshot.forEach(doc => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          };
          notes.push(note);
        });

        this.notes = notes;
        this.noteLoaded = true;
      });
    },
    async addNote(noteValue) {
      if (noteValue) {
        // this.notes.unshift({
        //   id: `${new Date().getTime()}`,
        //   content: noteValue
        // });
        // const id = `${new Date().getTime()}`

        // await setDoc(doc(noteCollection, id), {
        //   content: noteValue,
        //   id
        // });

        await addDoc(noteCollection, {
          content: noteValue,
          date: `${new Date().getTime()}`
        });
      } else {
        alert('請輸入');
      }
    },
    async updateNote(id, value) {
      // const note = this.notes.find(note => note.id === id);
      // note.content = value;
      await updateDoc(doc(noteCollection, id), {
        content: value
      });
    },
    async removeNote(id) {
      await deleteDoc(doc(noteCollection, id));
    },
    clearNotes() {
      this.notes = [];
      if (getNoteSnap) getNoteSnap();
    }
  },
  getters: {
    getNoteContent: state => {
      return id => {
        return state.notes?.find(note => note.id === id)?.content;
      };
    },
    totalNotesCount: state => {
      return state.notes.length;
    },
    totalNotesContent: state => {
      return state.notes.reduce((acc, cur) => acc + cur.content.length, 0);
    }
  }
});
