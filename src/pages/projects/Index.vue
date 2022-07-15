<template>
  <Layout>
    <section>
      <h1>My Work</h1>
      <Row size="full">
        <Col v-for="(project,index) in projects" :key="index" sm="6" md="6" lg="3" xl="2">
          <g-link :to="`/projects/${project.id}`" class="relative">
            <div>{{ project.name }}</div>
            <g-image :src="project.images.thumbnail" class="w-100" />
          </g-link>
        </Col>
      </Row>
    </section>
  </Layout>
</template>

<script>
import projectsMixin from '@/mixin/projects'

export default {
  metaInfo: {
    title: 'Projects'
  },
  mixins: [ projectsMixin ],
}
</script>