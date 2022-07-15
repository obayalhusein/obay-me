<template>
  <div>
    <Rail />
    <main>
      <div id="root-content">
        <slot/>
      </div>
      <Footer />
      <Debugger />
    </main>
  </div>
</template>

<script>
import Theme from '~/mixin/theme'
import Footer from '~/layouts/Footer'
import Rail from '~/layouts/Rail'
import Debugger from '~/components/Debugger'

export default {
  components: {
    Footer,
    Rail,
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