<template>
  <div>
    <ul class="pag-container">
      <li class="pag-items">
        <a href="#" @click="onClickPage(1)">&lt;</a>
      </li>
      <li class="pag-items" v-for="page in pages" :key="page.name">
        <a href="#" @click="onClickPage(page.name)">{{ page.name }}</a>
      </li>

      <li class="pag-items">
        <a href="#" @click="onClickPage(pages.length)">&gt;</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  components: {},
  props: {
    totalPages: {
      type: Number,
      default: 5,
    },
    perPage: {
      type: Number,
      default: 3,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    maxVisibleButtons: {
      type: Number,
      default: 2,
    },
  },
  methods: {
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
        });
      }

      return range;
    },
  },
};
</script>

<style lang="scss" src="../assets/styles/styles.scss">
</style>