import projectsData from '@/data/projects.json'

export default {
    computed: {
        projects() {
            return projectsData.data
        }
    },
}