<template>
  <Layout>
    <Intro />
    <Bio />
    <Frameworks />
    <Skills />
    <Hobbies />
    <Experiences />
    <Future />
    <Hireme />
  </Layout>
</template>

<script>
import Intro from '~/sections/Intro.vue'
import Bio from '~/sections/Bio.vue'
import Frameworks from '~/sections/Frameworks.vue'
import Skills from '~/sections/Skills.vue'
import Hobbies from '~/sections/Hobbies.vue'
import Experiences from '~/sections/Experiences.vue'
import Future from '~/sections/Future.vue'
import Hireme from '~/sections/Hireme.vue'

export default {
  metaInfo: {
    title: 'Portfolio'
  },
  components: {
    Intro,
    Bio,
    Frameworks,
    Skills,
    Hobbies,
    Experiences,
    Future,
    Hireme,
  }
}
</script>