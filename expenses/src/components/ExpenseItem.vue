<template>
  <div>
    <div>{{ itemsData.id }}</div>
    <div>{{ itemsData.date }}</div>
    <div>{{ itemsData.category }}</div>
    <div>{{ itemsData.value }}</div>
    <div @click="onShow"><i class="fa fa-ellipsis-v icon"></i></div>
    <transition name="fade" mode="out-in">
      <Plugin v-if="showWindow === 'plugin'" :itemsData="itemsData" />
    </transition>
  </div>
</template>

<script>
import Plugin from "@/components/Plugin.vue";

export default {
  name: "ExpenseItem",
  components: {
    Plugin,
  },
  methods: {
    onShow() {
      this.showWindow = "plugin";
    },
    onHide() {
      this.showWindow = "";
    },
    onEdit(data) {
      console.log(data.id);
    },
  },
  props: {
    itemsData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      showWindow: "",
    };
  },
  mounted() {
    this.$myplugin.EventBus.$on("show", this.onShow);
    this.$myplugin.EventBus.$on("hide", this.onHide);
  },
};
</script>

<style lang="scss">
</style>