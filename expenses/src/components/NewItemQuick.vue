<template>
  <form>
    <div class="container">
      <input type="date" name="date" v-model="newExpense.date" />
      <select v-model="newExpense.category">
        <option v-for="option in getCategoryList" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
      <input
        type="number"
        placeholder="Enter amount"
        name="amount"
        v-model="newExpense.value"
      />
    </div>
    <div v-if="errors">
      <p style="color: red">Please fillout all data.</p>
    </div>
    <a></a>
    <button class="btn" @click="saveData()">Save</button>
    <button class="btn" @click="returnHome()">Cancel</button>
  </form>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "NewExpenseItem",
  components: {},
  computed: mapGetters(["getCategoryList"]),
  data() {
    return {
      newExpense: {
        id: Math.floor(Math.random() * 1000),
        date: new Date().toISOString().split("T")[0],
        category: this.$route.query.cat,
        value: this.$route.query.n,
      },
      errors: false,
    };
  },
  methods: {
    ...mapActions(["loadCategories"]),
    ...mapMutations(["addNew"]),
    saveData() {
      this.addNew(this.newExpense);
      this.errors = false;
      this.$router.push({ name: "home" });
    },
    returnHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" src="../assets/styles/styles.scss">
</style>