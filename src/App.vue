<script setup>
import NavBar from '@/components/Layout/NavBar.vue';
import { useStoreAuth } from '@/store/storeAuth.js';

import { onMounted } from 'vue';

/**
 * store
 */

const storeAuth = useStoreAuth();

onMounted(() => {
  storeAuth.init();
});
</script>

<template>
  <NavBar class="mb-4"></NavBar>
  <div class="container is-max-desktop">
    <routerView />
  </div>
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>
