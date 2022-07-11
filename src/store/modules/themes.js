const state = {
    currentTheme: null,
    allThemes: [
        {
            id: 1,
            name: 'flat',
            colors: {
                primary: 'purple', 
            },
        },
        {
            id: 2,
            name: 'neum',
            colors: {
                primary: 'green', 
            },
        },
    ],
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