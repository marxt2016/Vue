<template>
  <div class="modal">
    <div class="modal-content">
      <button class="close" @click="hideModal()">x</button>
      <h3>Title</h3>
      <p>Description</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewExpenseItem",
  components: {},
  props: {
    show: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    hideModal() {
      this.$emit("hide");
    },
  },
};
</script>

<style lang="scss" src="../assets/styles/styles.scss">
</style>