<template>
  <div id="app">
    <header>
      <h1>My personal costs</h1>
      <hr />
    </header>
    <main>
      <button class="btn" @click="showModal = true">Add expenses</button>
      <PaymentsDisplay />
      <transition name="fade" mode="out-in">
        <NewExpenseItem v-if="showModal" @hide="showModal = false" />
      </transition>
      <Pagination />
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
    return { showModal: false };
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
.btn {
  background-color: linear-gradient(#f7f8fa, #e7e9ec);
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.6) 0 1px 0 inset;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  height: 29px;
  outline: 0;
  overflow: hidden;
  padding: 0 11px;
  text-align: center;
  text-decoration: none;
}

button:hover {
  background-color: #d1d2d4;
  border-color: #a2a6ac;
  box-sizing: border-box;
}
</style>
