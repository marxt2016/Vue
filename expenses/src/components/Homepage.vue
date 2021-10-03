<template>
  <div>
    <button class="btn" @click="showModal = true">Add expenses</button>

    <PaymentsDisplay :filtered="filtered" />
    <transition name="fade" mode="out-in">
      <NewExpenseItem v-if="showModal" @hide="showModal = false" />
    </transition>
    <div class="pag-container">
      <div
        class="pag-items"
        v-for="page in pages"
        :key="page.id"
        @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
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
import NewExpenseItem from "@/components/NewExpenseItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    NewExpenseItem,
  },
  computed: {
    ...mapGetters(["getCategoryList", "perpage", "alldata"]),
    pages: function () {
      let res = this.makeArr();
      return Math.ceil(res.length / this.perPage);
    },
    filtered: function () {
      let start = (this.currentPage - 1) * this.perPage;
      let end = start + this.perPage;

      let res = this.makeArr();
      return res.slice(start, end);
    },
  },
  data() {
    return {
      showModal: false,
      currentPage: 1,
      totalpages: 3,
      perPage: 3,
    };
  },
  methods: {
    ...mapActions(["loadCategories", "fetchDataPerPage"]),
    clickHandler(num, cat) {
      this.$router.push({ name: "quick1", query: { n: num, cat: cat } });
    },
    pageClick(page) {
      this.currentPage = page;
    },
    makeArr() {
      let res = [];
      for (let j in this.perpage) {
        for (let i = 0; i < this.perpage[j].length; i++) {
          res.push(this.perpage[j][i]);
        }
      }
      return res;
    },
  },
  created() {},
};
</script>