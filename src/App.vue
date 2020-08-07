<template>
  <div id="app">
    <Nav />
    <transition name="router">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@500&family=Raleway&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
}

a {
  text-decoration: none;
  font-family: 'Bitter', serif;
}

.router-enter-active, .router-leave-active {
  transition: opacity .5s ease-in-out;
}

.router-enter-active {
  transition-delay: .5s;
}

.router-enter, .router-leave-to {
  opacity: 0;
}


</style>
