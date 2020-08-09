<template>
  <div class="content">
    <p class="contact">
      While I'm not able to take Art comissions, I do welcome all feedback on my work.
      To help support you can purchase prints at my store, or share my work on social media.
    </p>

    <p class="contact">
      If you would like to discuss development projects, from simple static web pages to full backend data API projects please fill in the contact form bellow.
    </p>

    <ContactForm />
  </div>
</template>


<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Contact',
  components: {
    ContactForm
  },
}
</script>


<style scoped>
  p.contact {
    max-width: 800px;
    margin: 1rem auto;
    text-align: justify;
  }
</style>
