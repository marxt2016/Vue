<template>
  <div>
    <div class="table header" v-if="0">
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
    <v-data-table
      :headers="headers"
      :items="this.vfiltered"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
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
    vfiltered: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      itemsList: [this.displayOnPage()],
      headers: [
        {
          text: "#",
          value: "id",
          align: "start",
          sortable: false,
        },
        { text: "Date", value: "date" },
        { text: "Cagegory", value: "category" },
        { text: "Value", value: "value" },
      ],
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

<style>
.v-data-table-header th {
  font-weight: 600 !important;
  font-size: 16px !important;
}
</style>