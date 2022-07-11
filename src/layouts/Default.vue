<template>
  <div>
    <main>
      <Header />
      <slot/>
    </main>
    <Footer />
    <Debugger />
  </div>
</template>

<script>
import Theme from '~/mixin/theme'
import Footer from '~/layouts/Footer'
import Header from '~/layouts/Header'
import Debugger from '~/components/Debugger'

export default {
  components: {
    Footer,
    Header,
    Debugger,
  },
  mixins: [Theme],
  mounted() {
    // Set default theme
    this.setTheme(this.currentTheme ? this.currentTheme.id : 1);
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