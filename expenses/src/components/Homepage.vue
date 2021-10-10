<template>
  <v-container class="mb-4">
    <v-row class="flex-column align-between ma-0">
      <v-col>
        <v-btn class="btn" @click="showModal = true">Add expenses</v-btn>
        <v-btn class="btn" @click="clickHandler(200, 'Food')">
          Quick Add Food
        </v-btn>
        <v-btn class="btn" @click="clickHandler(50, '')">
          Quick Add Transport
        </v-btn>
        <v-btn class="btn" @click="clickHandler(2000, 'Entertainment')">
          Quick Add Fun
        </v-btn>
      </v-col>
      <v-col>
        <PaymentsDisplay :vfiltered="vfiltered" />
        <transition name="fade" mode="out-in">
          <NewExpenseItem v-if="showModal" @hide="showModal = false" />
        </transition>
        <div class="pag-container" v-if="0">
          <div
            class="pag-items"
            v-for="page in pages"
            :key="page.id"
            @click="pageClick(page)"
          >
            {{ page }}
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- <router-link to="/quickAdd">Quick Add</router-link> -->
  </v-container>
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
    vfiltered: function () {
      return this.makeArr();
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