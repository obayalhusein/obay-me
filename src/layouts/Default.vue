<template>
  <div>
    <Row size="full" no-wrap>
      <Col class="pos-sticky top-0 vh-100">
        <Rail />
      </Col>
      <Col>
        <div>
          <slot/>
          <Footer />
          <Debugger />
        </div>
      </Col>
    </Row>
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