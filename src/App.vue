<template>
  <div id="app">
    <Nav @toggleMenu="toggleMenu" :showMenu="showMenu"/>
    <transition name="grow">
      <Menu @toggleMenu="toggleMenu" :showMenu="showMenu"/>
    </transition>
    <transition name="router">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Nav,
    Menu,
    Footer
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {

      // remove scroll from body when menu is visible
      var delay = 500
      if (this.showMenu) { delay = 0 }
      setTimeout(function() { // delay prevents shifting of body width due to scrollbar dissapear
        var body = document.getElementsByTagName("body")[0];
        body.style.position = body.style.position === 'fixed' ? '' : 'fixed';
      }, delay)

      this.showMenu = !this.showMenu;
    }
  }
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@500&family=Raleway&display=swap');

#app {
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
  color: black;
}
a:hover, a:active { color:grey }
a:focus { color:darkgrey; }

.content {
  box-sizing: border-box;
  max-width: 100%;
  width: 1000px;
  min-height: 93vh;
  margin: auto;
  text-align: center;
  padding: 0 1rem;
  padding-top: 120px;
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

button {
  outline: 2px solid black;
  outline-offset: 2px;
  appearance: none;
  border: none;
  padding: .5rem 1.5rem;
  margin: .5rem 1rem;
  background-color: transparent;
  font-family: 'Bitter', serif;
  font-weight: 900;
  transition: .4s;
  transition-property: background-color, color;
}

button::before {
  content: '--';
  padding-right: .5rem;
}
button::after {
  content: '--';
  padding-left: .5rem;
}

button:hover {
  background-color: black;
  color: white;
}

button:focus {
  border: 1px solid grey;
  outline-offset: 1px;
}

button:active {
  outline: none;
}

h4 {
  text-align: left;
}

hr {
  margin-bottom: 2rem;
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

.grow-enter-active, .grow-leave-active {
	visibility: visible;
	animation-name: growIn;
	animation-duration: .5s;
	transform-origin: 50% 0%;
}

.grow-enter, .grow-leave-to {
	visibility: hidden;
	animation-name: growOut;
	animation-duration: .3s;
}

@keyframes growIn {
	from {
		transform: scaleY(0);
	}
	to {
		transform: scaleY(1);
	}
}

@keyframes growOut {
	from {
		transform: scaleY(1);
	}
	to {
		transform: scaleY(0);
	}
}

</style>
