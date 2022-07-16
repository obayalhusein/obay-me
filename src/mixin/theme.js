import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('themes', {
            currentTheme: 'currentTheme', 
            allThemes: 'allThemes'
        })
    },
    methods: {
        setTheme(id) {
            // Remove old theme class
            if(this.currentTheme){
                document.body.classList.remove(this.currentTheme.name);
            }
            else {
                document.body.classList.add('flat');
            }
            // Set new Theme
            this.$store.commit('themes/changeCurrentTheme', this.allThemes.find(theme => theme.id == id))
            document.body.classList.add(this.currentTheme.name);
        },
        toggleDarkMode() {
            document.body.classList.toggle("d");
        },
    },
}