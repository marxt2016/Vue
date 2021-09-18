<template>
  <div>
    <h1>Test app</h1>
    <input type="text" v-model.number="op1" />
    <input type="text" v-model.number="op2" />
    <h3>Result = {{ result }}</h3>
    <button @click="plus">plus</button>
    <button @mouseover="minus">minus</button>
    <button @focus="multiply">multiply</button>
    <button @click="divide">divide</button>
    <br />
    <button @click="pow">power</button>
    <button @click="ceil">divInt</button>
  </div>
</template>

<script>
export default {
  name: "Calc",
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
    pow() {
      return (this.result = Math.pow(this.op1, this.op2));
    },
    ceil() {
      return (this.result = Math.ceil(this.op1 / this.op2));
    },
  },
};
</script>