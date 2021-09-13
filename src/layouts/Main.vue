<template>
  <navigation />
  <transition
    appear
    enter-active-class="animated slideInRight slow"
    leave-active-class="animated slideOutLeft slow overflow-hidden"
  >
    
    <router-view />
  </transition>
</template>

<script>
import Navigation from '../components/layouts/main/Navigation.vue';
  export default {
    name: "MainLayout",
    data() {
      return {}
    },
    components: {
      Navigation
    },
  }
</script>