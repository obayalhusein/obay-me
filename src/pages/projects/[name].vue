<template>
    <Layout>
        <div class="relative of-hidden" style="padding-bottom: 25%;">
            <img :src="thumbnailUrl(project.name)" :alt="project.name" class="absolute top-0 start-0 w-100 object-cover" />
        </div>
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