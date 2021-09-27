const state = {
    expenses: []
}
const getters = {
    allData(state) {
        return state.expenses
    },
    allDataProp: (state, getters) => {
        console.etters.allData(state);
        return getters.allData(state)
    }

}
const mutations = {
    setExpenses(state, expenses) {
        state.expenses = expenses
    },
    addNew(state, newItem) {
        state.expenses.unshift(newItem)
    }
}
const actions = {
    async fetchData({ commit }) {
        const result = await fetch('http://localhost:3000/expenseItems');
        const expenses = await result.json();
        commit('setExpenses', expenses)
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}