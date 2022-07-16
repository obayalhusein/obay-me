import projectsData from '@/data/projects.json'

export default {
    data () {
        return {
            project: {},
        }
    },
    computed: {
        projects() {
            return projectsData.data
        },
    },
    mounted () {
        this.project = this.projects.find(project => project.name == this.$route.params.name)
    },
    methods: {
        thumbnailUrl(name) {
            return `/projects/${name}/thumbnail.jpg`
        }
    },
}