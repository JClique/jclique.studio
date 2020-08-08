<template>
  <div id="app">
    <Nav @toggleMenu="toggleMenu" />
    <Menu @toggleMenu="toggleMenu" />
    <transition name="router">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Menu from '@/components/Menu.vue'

export default {
  components: {
    Nav,
    Menu
  },
  methods: {
    toggleMenu() {
      var menu = document.getElementsByClassName("menu");
      for (var i = 0; i < menu.length; i++) {
        menu.item(i).style.display = menu.item(i).style.display === 'none' ? '' : 'none';
      }
    }
  }
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@500&family=Raleway&display=swap');

#app {
  height: 110vh;
  max-width: 100vw;
}

* {  /* firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: grey transparent;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 5px;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
  max-width: 100vw;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  font-family: 'Bitter', serif;
}

.content {
  box-sizing: border-box;
  max-width: 100%;
  width: 1000px;
  margin: 7rem auto;
  text-align: center;
  padding: 1rem;
}

.content h2 {
  margin-top: 0;
}

img.art {
  max-width: 100%;
  max-height: 800px;
  margin: auto;
  pointer-events: none;
}

.desc {
  text-align: center;
  margin-bottom: 1.5rem;
}

.desc p {
  text-align: justify;
}

.desc button {
  outline: 2px solid black;
  outline-offset: 2px;
  appearance: none;
  border: none;
  padding: .5rem 1.5rem;
  background-color: transparent;
  font-family: 'Bitter', serif;
  font-weight: 900;
  transition: .4s;
  transition-property: background-color, color;
}

.desc button::before {
  content: '--';
  padding-right: .5rem;
}
.desc button::after {
  content: '--';
  padding-left: .5rem;
}

.desc button:hover {
  background-color: black;
  color: white;
}

.desc button:active {
  outline: none;
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
