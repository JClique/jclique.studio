<template lang="html">
  <form action="https://getform.io/f/664217c2-97ee-4421-a3f6-08d5b06be940" method="post">
    <h2>Contact</h2>

    <input class="input" type="email" name="email" placeholder="Your Contact Email...">

    <textarea class="input" name="message" placeholder="Start a conversation..."></textarea>

    <button type="submit" name="button">Submit</button>

  </form>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style scoped>
  form {
    max-width: 600px;
    margin: auto;
    padding-right: 1rem;
  }

  .input {
    font-family: 'Raleway', sans-serif;
    display: block;
    padding: .5rem;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
    appearance: none;
  }

  input {
    max-width: 100%;
    width: 500px;
    margin: 1rem auto;
  }

  textarea {
    width: 100%;
    height: 300px;
    margin-bottom: 1rem;
    resize: none;
  }

</style>
