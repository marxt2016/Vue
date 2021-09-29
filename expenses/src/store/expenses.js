
import isSubset from '/node_modules/is-subset/module/index.js';

const state = {
    expenses: []
}
const getters = {
    perpage(state) {
        return state.expenses
    },
    alldata(state) {
        return state.expenses
    }

}
const mutations = {
    setExpenses(state, val) {
        let res = false;
        for (let i = 0; i < state.expenses.length; i++) {
            if (isSubset(state.expenses[i], val) || state.expenses[i].length > val.length) {
                return res = true
            }
        }
        if (!res) {
            state.expenses.push(val);
        }
    },
    addNew(state, newItem) {
        state.expenses[0].unshift(newItem);
    },
}
const actions = {
    async fetchDataPerPage({ commit }, page) {
        const result = await fetch('https://marxt2016.github.io/db.json');
        const expenses = await result.json();
        const keys = Object.keys(expenses);
        commit('setExpenses', expenses[keys[page - 1]])
    },
}
export default {
    state,
    actions,
    mutations,
    getters
}