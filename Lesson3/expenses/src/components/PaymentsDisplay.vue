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
      v-for="item in filteredItemsList"
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
  props: {
    perPage: {
      type: Number,
      default: 3,
    },
    page: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      itemsList: [],
      filteredItemsList: [],
      maxPages: 2,
    };
  },
  methods: {
    fetchData() {
      return [
        {
          id: 1,
          date: "2021-03-07",
          category: "Transport",
          value: 100,
        },
        {
          id: 2,
          date: "2021-01-07",
          category: "Food",
          value: 200,
        },
        {
          id: 3,
          date: "2021-05-07",
          category: "Clothes",
          value: 500,
        },
        {
          id: 4,
          date: "2021-05-05",
          category: "Entertainment",
          value: 550,
        },
        {
          id: 5,
          date: "2021-05-06",
          category: "Entertainment",
          value: 555,
        },
      ];
    },
    filteredItems(page) {
      if (page > 1) {
        let start = this.perPage * page - this.perPage;
        for (
          let i = start;
          i < Math.min(this.itemsList.length, this.perPage * page);
          i++
        ) {
          this.filteredItemsList.push(this.itemsList[i]);
        }
      } else {
        for (let i = page - 1; i < this.perPage; i++) {
          this.filteredItemsList.push(this.itemsList[i]);
        }
        return this.filteredItemsList;
      }
    },
    displayOnPage(page) {
      this.filteredItemsList = [];
      this.filteredItems(page);
    },
  },

  created() {
    this.itemsList = this.fetchData();
    this.filteredItemsList = this.filteredItems(this.page);
  },
};
</script>

<style lang="scss" src="../assets/styles/styles.scss">
</style>