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
import Intro from '@/components/sections/Intro.vue'
import Bio from '@/components/sections/Bio.vue'
import Frameworks from '@/components/sections/Frameworks.vue'
import Skills from '@/components/sections/Skills.vue'
import Hobbies from '@/components/sections/Hobbies.vue'
import Experiences from '@/components/sections/Experiences.vue'
import Future from '@/components/sections/Future.vue'
import Hireme from '@/components/sections/Hireme.vue'

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