<template lang="html">
  <ul class="menu" style="display: none;">
    <li class="link" @click="$emit('toggleMenu')">
      <router-link to="/about">About</router-link>
    </li>
    <li class="link" @click="$emit('toggleMenu')">
      <router-link to="/people">People</router-link>
    </li>
    <li class="link" @click="$emit('toggleMenu')">
      <router-link to="/insects">Insects</router-link>
    </li>
    <li class="link" @click="$emit('toggleMenu')">
      <router-link to="/texture">Texture</router-link>
    </li>
    <li class="link" @click="$emit('toggleMenu')">
      <router-link to="/code">Code</router-link>
    </li>
    <li class="social">
      <a href="https://www.twitter.com/J_Clique">
        <img src="@/assets/Twitter.svg" class="social">
      </a>
      <a href="https://www.instagram.com/J_Clique">
        <img src="@/assets/Instagram.svg" class="social">
      </a>
      <a href="https://www.github.com/JClique">
        <img src="@/assets/GitHub.svg" class="social">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu'
}
</script>


<style lang="css" scoped>

ul.menu {
  position: fixed;
  top: 0;
  padding-top: 8rem;
  background-color: white;
  width: 100%;
  height: 100%;
  z-index: 4;
  line-height: 3rem;
  list-style-image: url("../assets/caret.svg");
}

ul.menu li.social {
  list-style: none;
  margin-top: 2rem;
}

li.link a {
  padding: .5rem;
  border-radius: 3px;
  color: black;
  transition: .4s;
  margin-left: .5rem;
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


</style>
