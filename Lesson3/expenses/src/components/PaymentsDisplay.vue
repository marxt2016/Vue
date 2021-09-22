<template>
  <div>
    <div class="table header">
      <div>#</div>
      <div>Date</div>
      <div>Category</div>
      <div>Value</div>
    </div>
    <ExpenseItem
      class="table"
      v-for="item in itemsList"
      :key="item.id"
      v-bind:itemsData="item"
    />
  </div>
</template>

<script>
import ExpenseItem from "@/components/ExpenseItem.vue";

export default {
  name: "PaymentsDisplay",
  components: { ExpenseItem },
  data() {
    return { itemsList: [] };
  },
  methods: {
    fetchData() {
      return [
        {
          id: 1,
          date: "11.11.1998",
          category: "Transport",
          value: 100,
        },
        {
          id: 2,
          date: "11.12.1998",
          category: "Food",
          value: 200,
        },
        {
          id: 3,
          date: "13.12.1998",
          category: "Clothes",
          value: 500,
        },
        {
          id: 4,
          date: "17.12.1998",
          category: "Entertainment",
          value: 550,
        },
      ];
    },
  },
  created() {
    this.itemsList = this.fetchData();
    console.log(this.itemsList);
  },
};
</script>

<style lang="scss" src="../assets/styles/styles.scss">
</style>