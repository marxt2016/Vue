<template>
  <div>
    <div>{{ itemsData.id }}</div>
    <div>{{ itemsData.date }}</div>
    <div>{{ itemsData.category }}</div>
    <div>{{ itemsData.value }}</div>
  </div>
</template>

<script>
export default {
  name: "ExpenseItem",
  components: {},
  props: {
    itemsData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
</style>