<script setup>
import Note from '@/components/Notes/Notes.vue';
import AddEdit from '@/components/Notes/AddEdit.vue';
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useStoreNotes } from '@/store/storeNotes';
import { useStoreAuth } from '@/store/storeAuth.js';
import { useWatchCharacters } from '@/use/useWatchCharacters.js';

const noteStore = useStoreNotes();
const { addNote } = noteStore;
const { notes, noteLoaded } = storeToRefs(noteStore);

const editRef = ref(null);
const newNote = ref('');

const addNoteComponent = () => {
  addNote(newNote.value);
  newNote.value = '';
  editRef.value.focusTextArea();
};

useWatchCharacters(newNote, 50);
</script>
<template lang="">
  <div class="notes">
    <AddEdit v-model="newNote" ref="editRef">
      <template #buttons>
        <button
          class="button is-link has-background-success"
          :disabled="!newNote"
          @click="addNoteComponent"
        >
          Add New Note
        </button>
      </template>
    </AddEdit>

    <progress v-if="!noteLoaded" class="progress is-large is-success" max="100" />

    <template v-else>
      <Note v-for="note of notes" :key="note.id" :note="note" />
      <div
        v-if="notes.length < 1"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        No notes here yooo~~~
      </div>
    </template>
  </div>
</template>

<style lang=""></style>
