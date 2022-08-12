<template>
  <div class="my-nav-bar">
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
      <div class="container is-max-desktop">
        <div class="navbar-brand">
          <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

          <a
            ref="burg"
            role="button"
            class="navbar-burger"
            :class="{ 'is-active': !showMobileNav }"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            @click="showMobileNav = !showMobileNav"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          class="navbar-menu"
          :class="{ 'is-active': !showMobileNav }"
          ref="navbarMwnuRef"
        >
          <div class="navbar-start">
            <button
              v-if="storeAuth.user.id"
              class="button is-small is-info mt-3 ml-3"
              @click="signOut"
            >
              Log out {{ storeAuth.user.email }}
            </button>
          </div>
          <div class="navbar-end">
            <routerLink
              to="/"
              class="navbar-item"
              active-class="is-active"
              @click="showMobileNav = !showMobileNav"
            >
              Notes
            </routerLink>
            <routerLink
              to="/stats"
              class="navbar-item"
              active-class="is-active"
              @click="showMobileNav = !showMobileNav"
            >
              Stats
            </routerLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="" setup>
/**
 * import
 */

import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useStoreAuth } from '@/store/storeAuth';

/**
 * mobile nav
 */

const showMobileNav = ref(true);
const navbarMwnuRef = ref(null);
const burg = ref(null);
const storeAuth = useStoreAuth();

onClickOutside(
  navbarMwnuRef,
  () => {
    showMobileNav.value = true;
  },
  {
    ignore: [burg]
  }
);

const signOut = () => {
  showMobileNav.value = false;
  storeAuth.signOut();
};
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
