<template>
  <transition
    appear
    enter-active-class="animated slideInRight slow"
    leave-active-class="animated slideOutLeft slow overflow-hidden"
  >
    
    <router-view />
  </transition>
</template>

<script>
  export default {
    name: "MainLayout",
    data() {
      return {}
    }
  }
</script>