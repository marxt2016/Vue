const state = {
    expenses: []
}
const getters = {
    allData(state) {
        return state.expenses
    },
}
const mutations = {
    setExpenses(state, val) {
        state.expenses.push(val);
    },
    addNew(state, newItem) {
        state.expenses.unshift(newItem)
    }
}
const actions = {
    async fetchData({ commit }, page) {
        const result = await fetch('https://marxt2016.github.io/db.json');
        const expenses = await result.json();
        const keys = Object.keys(expenses);

        if (page > 0) {
            const arr = expenses[keys[page - 1]]
            let object = Object.assign({}, arr);
            console.log(object);
            for (const property in object) {
                commit('setExpenses', object[property])
            }
            //commit('setExpenses', object.forEach(item => commit('setExpenses', item)))

        } else if (page === undefined) {
            keys.forEach((key) => {
                expenses[key].forEach(item => commit('setExpenses', item))
            });
        }

    }
}
export default {
    state,
    actions,
    mutations,
    getters
}