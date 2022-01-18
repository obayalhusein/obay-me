<template>
  <div>
    <main>      <Header />
      <slot/>
    </main>
    <Footer />
    <Debugger />
  </div>
</template>

<script>
import Footer from '~/layouts/Footer'
import Header from '~/layouts/Header'
import Debugger from '~/components/Debugger'

export default {
  components: {
    Footer,
    Header,
    Debugger,
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