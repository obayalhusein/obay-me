<template>
    <Layout>
        <PageTitle :text="project.name" />
        <g-image :src="thumbnailUrl(project.name)" :alt="project.name" class="w-100" />
    </Layout>
</template>

<script>
import projectsMixin from '@/mixin/projects'
import PageTitle from '@/components/common/PageTitle'

export default {
    metaInfo: {
        title: 'Project'
    },
    mixins: [ projectsMixin ],
    components: { PageTitle },
}
</script>