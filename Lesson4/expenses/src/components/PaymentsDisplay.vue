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
      v-for="item in allData"
      :key="item.id"
      v-bind:itemsData="item"
    />
  </div>
</template>

<script>
import ExpenseItem from "@/components/ExpenseItem.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "PaymentsDisplay",
  components: { ExpenseItem },
  computed: mapGetters(["allData"]),
  props: {},

  data() {
    return {
      itemsList: [],
    };
  },
  methods: {
    ...mapMutations(["setExpenses"]),
    ...mapActions(["fetchData"]),
  },

  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" src="../assets/styles/styles.scss">
</style>