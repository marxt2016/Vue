<template>
  <div id="app">
    <img alt="Vue logo" width="100px" height="100px" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>Test app</h1>
    <input type="text" v-model.number="op1" />
    <input type="text" v-model.number="op2" />
    <h3>Result = {{ result }}</h3>
    <button @click="plus">plus</button>
    <button @mouseover="minus">minus</button>
    <button @focus="multiply">multiply</button>
    <button @click="divide">divide</button>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      op1: 0,
      op2: 0,
      result: 0,
    };
  },
  methods: {
    plus() {
      return (this.result = this.op1 + this.op2);
    },
    minus() {
      return (this.result = this.op1 - this.op2);
    },
    multiply() {
      return (this.result = this.op1 * this.op2);
    },
    divide() {
      if (this.op1 !== 0 && this.op2 !== 0) {
        this.result = this.op1 / this.op2;
      } else {
        alert("error: please provide number");
      }
      return parseInt(this.result);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
