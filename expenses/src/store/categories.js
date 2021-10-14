const state = {
    categoryList: [],
}

const getters = {
    getCategoryList: state => state.categoryList,
}

const mutations = {
    setCategories(state, payload) {
        if (!Array.isArray(payload)) {
            payload = [payload]
        }
        state.categoryList.push(...payload)
    },
}

const actions = {
    loadCategories({ commit }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(['Food', 'Transport', 'Education', 'Entertainment'])
            }, 1000)
        })
            .then(res => {
                commit('setCategories', res)
            })
    },
}

export default {
    state,
    actions,
    mutations,
    getters
}
