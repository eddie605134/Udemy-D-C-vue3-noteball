<template lang="">
  <div class="modal is-active p-2">
  <div class="modal-background"></div>
  <div 
    ref="deleteModal"
    class="modal-card"
  >
    <header class="modal-card-head">
      <p class="modal-card-title">Delete Note</p>
      <button 
        class="delete" 
        aria-label="close"
        @click.prevent="closeModal"
      >
      </button>
    </header>
    <section class="modal-card-body">
      Are you sure you want to delete this note?
    </section>
    <footer class="modal-card-foot is-justify-content-end">
      <button
        class="button"
        @click.prevent="closeModal"
      >Cancel</button>
      <button 
        class="button is-danger"
        @click.prevent="deleteNote"
      >
        Delete
      </button>
    </footer>
  </div>
</div>
</template>
<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { onClickOutside } from '@vueuse/core'
import { useStoreNotes } from '@/store/storeNotes';

const noteStore = useStoreNotes();

const deleteModal = ref(null);
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: false,
  },
  noteId: {
    type: String,
    required: true,
  }
});

const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
  emit('update:modelValue', false)
};

onClickOutside(deleteModal, closeModal);


const handleKB = (e) => {
  if (e.keyCode === 27) {
    closeModal();
  }
};
onMounted(() => {
  document.addEventListener('keyup', handleKB)
});

onUnmounted(() => {
  document.removeEventListener('keyup', handleKB)
});

const deleteNote = () => {
  noteStore.removeNote(props.noteId);
  closeModal();
};
</script>
<style lang="">
  
</style>