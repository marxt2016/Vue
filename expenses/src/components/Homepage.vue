<template>
  <div>
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

    <hr />
    <button class="btn" @click="clickHandler(200, 'Food')">
      Quick Add Food
    </button>
    <button class="btn" @click="clickHandler(50, '')">
      Quick Add Transport
    </button>
    <button class="btn" @click="clickHandler(2000, 'Entertainment')">
      Quick Add Entertainment
    </button>
    <!-- <router-link to="/quickAdd">Quick Add</router-link> -->
  </div>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import Pagination from "@/components/Pagination.vue";
import NewExpenseItem from "@/components/NewExpenseItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    Pagination,
    NewExpenseItem,
  },
  computed: mapGetters(["getCategoryList", "perpage"]),
  data() {
    return {
      showModal: false,
      currentPage: 1,
      totalpages: 3,
    };
  },
  methods: {
    ...mapActions(["loadCategories", "fetchDataPerPage"]),
    onPageChange(page) {
      this.$refs.PaymentsDisplay.displayOnPage(page);
      this.currentPage = page;
    },
    clickHandler(num, cat) {
      this.$router.push({ name: "quick1", query: { n: num, cat: cat } });
    },
  },
  created() {},
};
</script>