<template>
  <div>
    <main>
      <button @click="setTheme(1)">Set neum</button>
      <button @click="setTheme(0)">Set flat</button>
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
      currentTheme: 0,
      darkmode: false,
    }
  },
  mounted() {
    // Set default theme
    this.setTheme(this.currentTheme);
  },
  methods: {
    setTheme(i) {
      // Remove all themes
      this.themes.forEach(theme => { document.body.classList.remove(theme); });
      // Set new Theme
      this.currentTheme = this.themes[i];
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