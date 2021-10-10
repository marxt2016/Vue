<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1 class="display-1">My personal costs</h1>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["fetchDataPerPage"]),
  },
  created() {
    this.fetchDataPerPage();
  },
};
</script>

<style lang="scss" src="@/assets/styles/styles.scss">
</style>
