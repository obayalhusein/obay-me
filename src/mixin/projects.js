import projectsData from '@/data/projects.json'

export default {
    computed: {
        projects() {
            return projectsData.data
        },
        project() {
            return this.projects.find(project => project.name == this.$route.params.name)
        },
    },
    methods: {
        thumbnailUrl(name) {
            return `/projects/${name}/thumbnail.png`
        }
    },
}