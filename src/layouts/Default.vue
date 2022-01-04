<template>
  <div>
    <main>
      <button @click="switchTheme">Switch style {{ theme }}</button>
      <br>
      <button class="btn m-5" :class="theme">current theme</button>
      <Header />
      <slot/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/layouts/footer'
import Header from '~/layouts/header'

export default {
  components: {
    Footer,
    Header
  },
  data () {
    return {
      themes: ['flat', 'neum'],
      currentTheme: null,
      darkmode: false,
    }
  },
  mounted() {
    // Set default theme
    this.currentTheme = this.themes[0];
    document.body.classList.toggle(this.currentTheme);
  },
  methods: {
    switchTheme(){
      // Remove all themes
      this.themes.forEach(theme => { document.body.classList.remove(theme); });
      
      // Set theme
      this.currentTheme = (this.currentTheme == this.themes[0])? this.themes[1] :this.themes[0];
      document.body.classList.toggle(this.currentTheme);
    }
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>