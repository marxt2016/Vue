<template>
  <div>
    <div class="table header">
      <div>#</div>
      <div>Date</div>
      <div>Category</div>
      <div>Value</div>
    </div>
    <div v-for="item in itemsList" :key="item.id">
      <ExpenseItem
        class="table"
        v-for="items in item"
        :key="items.id"
        v-bind:itemsData="items"
      />
    </div>
  </div>
</template>

  

<script>
import ExpenseItem from "@/components/ExpenseItem.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "PaymentsDisplay",
  components: { ExpenseItem },
  computed: mapGetters(["getCategoryList", "perpage"]),
  props: {
    perPage: {
      type: Number,
      default: 3,
    },
  },

  data() {
    return {
      itemsList: [this.displayOnPage(1)],
      defaultpage: 1,
    };
  },
  methods: {
    ...mapMutations(["setExpenses"]),
    ...mapActions(["loadCategories", "fetchDataPerPage"]),
    async displayOnPage(page) {
      await this.fetchDataPerPage(page);
      this.itemsList = [];
      this.itemsList.push(this.perpage[page - 1]);
      return this.itemsList;
    },
  },

  created() {},
  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }
  },
};
</script>

<style lang="scss" src="../assets/styles/styles.scss">
</style>