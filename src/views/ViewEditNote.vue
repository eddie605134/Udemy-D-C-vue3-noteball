<script setup>
import AddEdit from '@/components/Notes/AddEdit.vue';
import { ref } from 'vue'
import { useStoreNotes } from '@/store/storeNotes';
import { useRoute, useRouter } from 'vue-router';

const noteContent = ref('');
const route = useRoute() 
const router = useRouter() 

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const noteStore = useStoreNotes();

noteContent.value = noteStore.getNoteContent(route.params.id)

const handleSave = () => {
  if (noteContent.value) {
    noteStore.updateNote(route.params.id, noteContent.value)
    noteContent.value = ''
    router.push('/')
  }
}

;</script>
<template lang="">
  <AddEdit 
    ref="editRef"
    v-model="noteContent"
    bgColor="link"
    placeholder="Type something..."
    label="Label Text"
  >
    <template #buttons>
      <RouterLink
        to="/"
        class="button is-link is-light"
      >
        Cancel
      </RouterLink>
      <button
        class="button is-link has-background-link"
        :disabled="!noteContent"
        @click="handleSave"
      >
        Save Note
      </button>
    </template>
  </AddEdit>
</template>
<style lang=""></style>
