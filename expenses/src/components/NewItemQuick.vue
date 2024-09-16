<template>
  <form @submit.prevent="truefill()">
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
        id: "",
        date: "",
        category: "",
        value: "",
      },
      errors: false,
    };
  },
  methods: {
    ...mapActions(["loadCategories"]),
    ...mapMutations(["addNew"]),
    saveData() {
      this.truefill();
      if (this.errors == false) {
        this.addNew(this.newExpense);
        this.returnHome();
      } else {
        this.errors = true;
      }
    },
    returnHome() {
      this.$router.push({ name: "home" });
    },
    truefill() {
      if (this.newExpense.category && this.newExpense.value) {
        console.log("form is filled");
        return (this.errors = false);
      } else {
        return (this.errors = true);
      }
    },
  },
  created() {
    this.newExpense = {
      id: Math.floor(Math.random() * 1000),
      date: new Date().toISOString().split("T")[0],
      category: this.$route.query.cat,
      value: this.$route.query.n,
    };
  },
};
</script>

<style lang="scss" src="../assets/styles/styles.scss">
</style>