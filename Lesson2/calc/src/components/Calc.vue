
<template>
  <div>
    <h1>Test app</h1>
    <div class="display">
      <input type="text" v-model.number="op1" placeholder="0" />
      <input type="text" v-model.number="op2" placeholder="0" />
    </div>
    <h3>Result = {{ result }}</h3>
    <div class="keyboard">
      <button
        v-for="item in operations"
        :key="item"
        @click="calculateHandler(item)"
      >
        {{ item }}
      </button>

      <p class="error" v-if="error">{{ msg }}</p>
      <div>
        <input type="checkbox" id="keyboard" v-model="keyboard" />
        <label for="keyboard">Show keyboard</label>
        <br />
        <div v-if="keyboard">
          <button
            @click="postValue(keyItem)"
            v-for="keyItem in keyItems"
            :key="keyItem"
          >
            {{ keyItem }}
          </button>
          <button @click="deleteValue()">C</button>
          <div>
            <input
              type="radio"
              value="op1"
              name="operands"
              id="opid1"
              checked
              v-model="selected"
            />
            <label for="opid1">op1</label>
            <input
              type="radio"
              value="op2"
              name="operands"
              id="opid2"
              v-model="selected"
            />
            <label for="opid2">op2</label>
          </div>
        </div>
      </div>
    </div>

    <div class="logs">
      <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Calc",
  data() {
    return {
      op1: 0,
      op2: 0,
      result: 0,
      keyboard: false,
      error: false,
      selected: "op1",
      msg: "error: please provide number",
      operations: ["plus", "minus", "multiply", "divide", "pow", "ceil"],
      keyItems: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      logs: {},
    };
  },
  methods: {
    calculateHandler(operation) {
      this.error = false;
      if (!isNaN(this.op1) && !isNaN(this.op2)) {
        switch (operation) {
          case "plus":
            this.plus();
            break;
          case "minus":
            this.minus();
            break;
          case "multiply":
            this.multiply();
            break;
          case "divide":
            this.divide();
            break;
          case "pow":
            this.pow();
            break;
          case "ceil":
            this.ceil();
            break;
        }
      } else {
        this.error = true;
      }
      const key = Date.now();
      const value = `${this.op1}${operation}${this.op2}=${this.result}`;
      Vue.set(this.logs, key, value);
    },
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
      if (this.op2 !== 0 && this.op2 != "") {
        this.result = parseFloat(this.op1 / this.op2).toFixed(2);
      } else {
        this.error = true;
      }
      return this.result;
    },
    pow() {
      return (this.result = Math.pow(this.op1, this.op2));
    },
    ceil() {
      if (this.op2 !== 0 && this.op2 != "") {
        this.result = (this.op1 - (this.op1 % this.op2)) / this.op2;
      } else {
        this.error = true;
      }
      return this.result;
    },
    onChange() {
      console.log(this.selected);
    },
    postValue(value) {
      if (this.selected === "op1") {
        this.op1 += value;
      } else {
        this.op2 += value;
      }
    },
    deleteValue() {
      if (this.selected === "op1") {
        this.op1 = this.op1.toString().slice(0, -1);
      } else {
        this.op2 = this.op2.toString().slice(0, -1);
      }
    },
  },
};
</script>

<style scoped>
button {
  margin: 10px 0px 10px 0px;
}
.error {
  color: blueviolet;
}
</style>