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
      v-for="items in filtered"
      :key="items.id"
      v-bind:itemsData="items"
    />
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
    filtered: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      itemsList: [this.displayOnPage()],
      defaultpage: 1,
    };
  },
  methods: {
    ...mapMutations(["setExpenses"]),
    ...mapActions(["loadCategories", "fetchDataPerPage"]),
    async displayOnPage() {
      await this.fetchDataPerPage();
      this.itemsList = [];
      this.itemsList.push(this.perpage);
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