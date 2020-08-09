<template>
  <div class="content">
    <div class="desc">
      <p>
        J_Clique is a freelance Artist and Web Developer living in Manchester, UK.
        He spends his days moving data around with Python, experimenting with Vue JS and creating artwork.

      </p>

      <h4>Art</h4>
      <p>
        Using bold, colouful palettes mixed from a CMYK acrylic base his artwork focuses on
        <router-link to="/people">People</router-link> - larger than life characters and their impact on the world,
        <router-link to="/insects">Insects</router-link> - some of the smallest creatures on planet and the many forms they take,
        and finally
        <router-link to="/texture">Texture</router-link> - the medium itself in a isolated experiment with colour and form.
      </p>

      <h4>Dev</h4>
      <p>
        Working first with Python building Twitter bots and web scrapers, he adopted the Django Rest API framework to create an internally used API at Ticketmaster UK.
        This API currently serves thousands of pieces of Event, Venue and Artist data, and supports all internal queries relating to this information.
      </p>

      <p>
        Moving towards front-end development he created several small applications focusing on data manipulation and visualisation using Vue JS framework.
      </p>

    </div>

  </div>
</template>


<style scoped>
  h4 {
    text-align: left;
  }

  hr {
    margin-bottom: 2rem;
  }
</style>
