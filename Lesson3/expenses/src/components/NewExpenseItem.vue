<template>
  <div class="modal" @click="hideModal()">
    <div class="modal-content" @click.stop="">
      <form>
        <div class="container">
          <input type="date" name="date" v-model="newExpense.date" />
          <input
            type="description"
            placeholder="Enter category"
            name="category"
            v-model="newExpense.category"
          />
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
export default {
  name: "NewExpenseItem",
  components: {},
  props: {
    show: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
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
        const newExpense = {
          id: Math.floor(Math.random() * 1000),
          date: this.newExpense.date,
          category: this.newExpense.category,
          value: this.newExpense.value,
        };
        this.$emit("save", newExpense);
        this.hideModal();
      }
    },
  },
};
</script>

<style lang="scss" src="../assets/styles/styles.scss">
</style>