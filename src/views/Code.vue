<template>
  <div class="content">

    <img src="@/assets/code/datadash.jpg" class="art">
    <div class="desc">
      <p>
        Data-dash is an exercise in rendering data using Scalable Vector Graphics (SVGs).
        A random dataset is generated and fed into a method that calculates the plots, angles and lines necessary to produce the resulting chart.
      </p>
      <p>
        As these charts are created using vectors, they look just as good on mobile as they do on extra-large high resolution desktop monitors.
        The colours are easily customised, and the axis and guidelines are an optional extra.
      </p>
      <a href="https://bit.ly/j_clique-Data-Dash">
        <button type="button" name="button">View Demo</button>
      </a>
      <a href="https://github.com/JClique/data-dash">
        <button type="button" name="button">View Code</button>
      </a>
    </div>

    <img src="@/assets/code/helveticalc.jpg" class="art">
    <div class="desc">
      <p>
        Helveticalc is a simple interactive front-end application experimenting in javascript methods to replicate basic calculator functionality.
        The design is inspired by Apple's desktop and iOS Calc applications, and Mac Miedinger's famous sans-serif font Helvetica.
      </p>
      <a href="https://bit.ly/j_clique-Helveticalc">
        <button type="button" name="button">View Demo</button>
      </a>
      <a href="https://github.com/JClique/Helveticalc">
        <button type="button" name="button">View Code</button>
      </a>
    </div>

    <img src="@/assets/code/jclique.jpg" class="art">
    <div class="desc">
      <p>
        jclique.studio is the self-built platform used to showcase some of my favourite artwork and latest development projects.
        The design does it's best to support the content and present it without distraction, offering the user a clean and simple experience.
      </p>
      <a href="https://github.com/JClique/jclique.studio">
        <button type="button" name="button">View Code</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Code'
}
</script>
