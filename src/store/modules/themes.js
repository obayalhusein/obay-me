const state = {
    currentTheme: 0,
    allThemes: ['flat', 'neum'],
}

const getters = {
    currentTheme: state => state.currentTheme,
    allThemes: state => state.allThemes,
}

const actions = {}

const mutations = {
    changeCurrentTheme: (state, payload) => {
        state.currentTheme = payload
    } 
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}