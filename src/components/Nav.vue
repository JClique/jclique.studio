<template lang="html">
  <nav>
    <ul class="nav">
      <li>
        <router-link to="/"><img src="@/assets/JClique.svg" class="brand"></router-link>
      </li>
      <li class="link full">
        <router-link to="/about">About</router-link>
      </li>
      <li class="link full">
        <router-link to="/people">People</router-link>
      </li>
      <li class="link full">
        <router-link to="/insects">Insects</router-link>
      </li>
      <li class="link full">
        <router-link to="/texture">Texture</router-link>
      </li>
      <li class="link full">
        <router-link to="/code">Code</router-link>
      </li>
      <li class="full">
        <a href="https://www.twitter.com/J_Clique">
          <img src="@/assets/Twitter.svg" class="social">
        </a>
      </li>
      <li class="full">
        <a href="https://www.instagram.com/J_Clique">
          <img src="@/assets/Instagram.svg" class="social">
        </a>
      </li>
      <li class="full">
        <a href="https://www.github.com/JClique">
          <img src="@/assets/GitHub.svg" class="social">
        </a>
      </li>
      <li class="mobile">
        <img src="@/assets/menu.svg" class="menu" @click="$emit('toggleMenu')" v-if="!showMenu">
        <img src="@/assets/menu-close.svg" class="menu" @click="$emit('toggleMenu')" v-if="showMenu">
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: ['showMenu',]
}
</script>


<style lang="css" scoped>

nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 2rem;
  z-index: 5;
}

nav::before{
  content: '';
  width: 100%;
  height: 70px;
  position: absolute;
  z-index: -1;
  background-color: white;
  transform: translate(0, -35px);
}

nav::after{
  content: '';
  width: 100%;
  height: 60px;
  position: absolute;
  z-index: -1;
  transform: translate(0, -20px);
  background: linear-gradient(white, transparent);
}


ul.nav {
  display: flex;
  list-style: none;
  max-width: 900px;
  height: 55px;
  margin: auto;
  justify-content: flex-end;
}


ul.nav li {
  padding: 0;
}

ul.nav li:first-child {
  margin-right: auto;
  transform: translate(-30px, -25px);
}

li.link a {
  padding: .5rem;
  border-radius: 3px;
  color: black;
  transition: .4s;
  margin-left: .25rem;
}

li.link a:hover {
  background-color: black;
  color: white;
}

li.link a:active {
  background-color: grey;
}

img.brand {
  width: 100px;
}

img.social {
  height: 20px;
  padding: .5rem;
  margin-left: .5rem;
  border-radius: 3px;
  transform: translate(0, -8px);
  transition: .4s;
}

img.social:hover, img.menu:hover {
  background-color: white;
  filter: invert(1);
}

img.menu {
  padding: .5rem;
  border-radius: 5px;
  transform: translate(-20px, -10px);
  cursor: pointer;
}

.mobile {
  display: none;
}
@media (max-width:768px) {
  .full {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
