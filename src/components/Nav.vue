<template lang="html">
  <ul>
    <li>
      <router-link to="/"><img src="@/assets/JClique.svg" class="brand"></router-link>
    </li>
    <li class="link">
      <router-link to="/about">About</router-link>
    </li>
    <li class="link">
      <router-link to="/people">People</router-link>
    </li>
    <li class="link">
      <router-link to="/insects">Insects</router-link>
    </li>
    <li class="link">
      <router-link to="/texture">Texture</router-link>
    </li>
    <li class="link">
      <router-link to="/code">Code</router-link>
    </li>
    <li>
      <img src="@/assets/Twitter.svg" class="social">
    </li>
    <li>
      <img src="@/assets/Instagram.svg" class="social">
    </li>
    <li>
      <img src="@/assets/GitHub.svg" class="social">
    </li>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

ul {
  display: flex;
  list-style: none;
  max-width: 900px;
  margin: 2.5rem auto;
  justify-content: flex-end;
}

li {
  padding: 0;
}

li:first-child {
  margin-right: auto;
  transform: translate(0, -25px);
}

li.link a {
  padding: .5rem;
  border-radius: 3px;
  color: black;
  transition: .4s;
  margin-left: .25rem;
}

li.link a:hover {
  background-color: darkgrey;
  color: white;
}

li.link a:active {
  background-color: grey;
}



img.brand {
  width: 100px;
}

img.social {
  height: 25px;
  margin-left: 1.5rem;
  transform: translate(0, -5px);
}

</style>
