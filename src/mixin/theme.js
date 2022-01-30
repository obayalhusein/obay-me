export default {
    data () {
        return {
          themes: ['flat', 'neum'],
          currentTheme: 0,
        }
    },
    methods: {
        setTheme(i) {
            // Remove all themes
            this.themes.forEach(theme => { document.body.classList.remove(theme); });
            // Set new Theme
            this.currentTheme = this.themes[i];
            document.body.classList.toggle(this.currentTheme);
        },
        toggleDarkMode() {
            document.body.classList.toggle("d");
        },
    },
}