<template>
  <div>
    <Rail />
    <main>
      <div id="root-content">
        <slot/>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
import Theme from '~/mixin/theme'
import Footer from '~/layouts/Footer'
import Rail from '~/layouts/Rail'

export default {
  components: { Footer, Rail },
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