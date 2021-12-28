<template>
  <div>
    <Header />
    <main><slot/></main>
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
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>