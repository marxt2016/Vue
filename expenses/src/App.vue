<template>
  <div id="app">
    <header>
      <h1>My personal costs</h1>
      <hr />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["fetchDataPerPage"]),
  },
  created() {
    this.fetchDataPerPage(1);
    console.log("created");
  },
};
</script>

<style lang="scss" src="@/assets/styles/styles.scss">
</style>
