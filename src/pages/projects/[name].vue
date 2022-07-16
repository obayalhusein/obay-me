<template>
    <Layout>
        <PageTitle :text="project.name" />
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