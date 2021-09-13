<template>
  <navigation />
  <router-view />
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