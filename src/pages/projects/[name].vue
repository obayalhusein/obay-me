<template>
    <Layout>
        <div class="relative of-hidden" style="padding-bottom: 25%;">
            <img :src="thumbnailUrl(project.name)" :alt="project.name" class="absolute top-0 left-0 w-100 object-cover" />
        </div>
        <h1>{{ project.name }}</h1>
    </Layout>
</template>

<script>
import projectsMixin from '@/mixin/projects'

export default {
    metaInfo: {
        title: 'Project'
    },
    mixins: [ projectsMixin ],
}
</script>