import { createRouter, createWebHashHistory } from 'vue-router';
import { useStoreAuth } from '@/store/storeAuth.js';
import ViewNotes from '@/views/ViewNotes.vue';
import ViewStats from '@/views/ViewStats.vue';
import ViewEditNote from '@/views/ViewEditNote.vue';
import ViewAuth from '@/views/ViewAuth.vue';

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/editnote/:id',
    name: 'edit-note',
    component: ViewEditNote
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  },
  {
    path: '/auth',
    name: 'auth',
    component: ViewAuth
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// navigation guards
router.beforeEach((to, from) => {
  const storeAuth = useStoreAuth();
  console.log(to.name);
  console.log(storeAuth.user.id);
  if (to.name === 'auth' && storeAuth.user.id) {
    return false;
  } else if (to.name !== 'auth' && !storeAuth.user.id) {
    return {
      path: '/auth'
    };
  }
});

export default router;
