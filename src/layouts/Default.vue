<template>
  <div>
    <main>
      <button @click="setTheme('neum')">Set neum</button>
      <button @click="setTheme('flat')">Set flat</button>
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
      currentTheme: 'flat',
      darkmode: false,
    }
  },
  mounted() {
    // Set default theme
    this.setTheme(this.currentTheme);
  },
  methods: {
    setTheme(newTheme) {
      // Remove all themes
      this.themes.forEach(theme => { document.body.classList.remove(theme); });
      // Set new Theme
      this.currentTheme = newTheme;
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