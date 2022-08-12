<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns is-mobile has-text-grey-light">
          <small class="column"> {{ dateFormat }} </small>
          <small class="column has-text-right"> {{ noteLengh }} characters</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink 
        :to="`/editnote/${note.id}`" 
        href="#" 
        class="card-footer-item"
        >Edit</RouterLink
      >
      <a 
        href="#" 
        class="card-footer-item"
        @click.prevent="modals.deleteNote = true"
      >
        Delete
      </a>
    </footer>
    <ModalDeleteNote 
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :note-id="note.id"
    />
  </div>
</template>
<script setup>
import { computed, reactive } from 'vue';
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue';
import { useStoreNotes } from '@/store/storeNotes';
import { useDateFormat } from '@vueuse/core'

const noteStore = useStoreNotes();
const { removeNote } = noteStore;
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const noteLengh = computed(() => {
  return props.note.content.length;
});

/**
 * modals
 */

const modals = reactive({
  deleteNote: false,
  editnote: false
});

/**
 * format
 */


const dateFormat = computed(() => {
  let date = new Date(parseInt(props.note.date))
  return useDateFormat(date, 'YYYY-MM-DD @ HH:mm:ss').value
});
</script>
<style></style>
