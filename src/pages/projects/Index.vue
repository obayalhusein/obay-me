<template>
  <Layout>
    <section>
      <h1></h1>
      <PageTitle text="My Work" />
      <Row size="full">
        <Col v-for="(project,index) in projects.slice().reverse()" :key="index" sm="12" md="6" lg="4" xl="3">
          <g-link :to="`/projects/${project.name}`" class="relative">
            <Row class="absolute w-100 h-100 hover-opacity-0-to-100 smooth" x="c" y="c">{{ project.name }}</Row>
            <g-image :src="thumbnailUrl(project.name)" :alt="project.name" class="w-100" />
          </g-link>
        </Col>
      </Row>
    </section>
  </Layout>
</template>

<script>
import projectsMixin from '@/mixin/projects'
import PageTitle from '@/components/common/PageTitle'

export default {
  metaInfo: {
    title: 'Projects'
  },
  mixins: [ projectsMixin ],
  components: { PageTitle },
}
</script>