<template lang="">
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ noteStore.totalNotesCount}}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ noteStore.totalNotesContent }}</td>
        </tr>
      </tbody>
    </table>
    <input v-model="loveNoteball" type="text" class="input" placeholder="Do You Like noteball?" v-autofocus>
  </div>
</template>
<script setup>
  import { useStoreNotes } from '@/store/storeNotes';
  import { vAutofocus } from '@/directives/vAutofocus';
  import { useWatchCharacters } from '@/use/useWatchCharacters.js'
  import { ref } from 'vue'

  const noteStore = useStoreNotes();

  const loveNoteball = ref('');

  useWatchCharacters(loveNoteball, 20);


</script>
<style lang="">
  
</style>