<template>
  <div class="modal" @click="hideModal()">
    <div class="modal-content" @click.stop="">
      <form>
        <div class="container">
          <input type="date" name="date" v-model="newExpense.date" />
          <select v-model="newExpense.category">
            <option
              v-for="option in getCategoryList"
              :value="option"
              :key="option"
            >
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

        <button class="btn" @click.prevent="saveData()">Save</button>
        <button class="btn" @click.prevent="hideModal()">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "NewExpenseItem",
  components: {},
  computed: mapGetters(["getCategoryList"]),
  props: {},
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
    hideModal() {
      this.$emit("hide");
    },
    saveData() {
      if (
        !this.newExpense.date.trim() ||
        !this.newExpense.category.trim() ||
        !this.newExpense.value.trim()
      ) {
        this.errors = true;
      } else {
        this.errors = false;
        this.addNew({
          id: Math.floor(Math.random() * 1000),
          date: this.newExpense.date,
          category: this.newExpense.category,
          value: this.newExpense.value,
        });
        this.hideModal();
      }
    },
  },
};
</script>

<style lang="scss" src="../assets/styles/styles.scss">
</style>