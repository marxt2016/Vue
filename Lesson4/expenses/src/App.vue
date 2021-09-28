<template>
  <div id="app">
    <header>
      <h1>My personal costs</h1>
      <hr />
    </header>
    <main>
      <button class="btn" @click="showModal = true">Add expenses</button>
      <PaymentsDisplay ref="PaymentsDisplay" :perPage="3" />
      <transition name="fade" mode="out-in">
        <NewExpenseItem v-if="showModal" @hide="showModal = false" />
      </transition>
      <Pagination
        :totalPages="totalpages"
        :perPage="3"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
      />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import Pagination from "@/components/Pagination.vue";
import NewExpenseItem from "@/components/NewExpenseItem.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    Pagination,
    NewExpenseItem,
  },
  data() {
    return {
      showModal: false,
      currentPage: 1,
      totalpages: 3,
    };
  },
  methods: {
    onPageChange(page) {
      this.$refs.PaymentsDisplay.displayOnPage(page);
      this.currentPage = page;
    },
  },
  created() {},
};
</script>

<style lang="scss" src="@/assets/styles/styles.scss">
</style>
