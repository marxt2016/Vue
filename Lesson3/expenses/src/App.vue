<template>
  <div id="app">
    <header>
      <h1>My personal costs</h1>
      <hr />
    </header>
    <main>
      <button>Add expenses</button>
      <PaymentsDisplay />
      <Pagination />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    Pagination,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 500px;
}
</style>
