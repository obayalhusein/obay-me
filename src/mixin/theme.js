import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('themes', {
            currentTheme: 'currentTheme', 
            allThemes: 'allThemes'
        })
    },
    methods: {
        setTheme(i) {
            // Remove all themes
            this.allThemes.forEach(theme => { document.body.classList.remove(theme); });
            // // Set new Theme
            this.$store.commit('themes/changeCurrentTheme', i)
            document.body.classList.toggle(this.allThemes[this.currentTheme]);
        },
        toggleDarkMode() {
            document.body.classList.toggle("d");
        },
    },
}