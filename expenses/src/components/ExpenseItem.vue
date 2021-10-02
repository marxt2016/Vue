<template>
  <div>
    <div>{{ itemsData.id }}</div>
    <div>{{ itemsData.date }}</div>
    <div>{{ itemsData.category }}</div>
    <div>{{ itemsData.value }}</div>
    <div @click="showAction = true"><i class="fa fa-ellipsis-v icon"></i></div>
    <transition name="fade" mode="out-in">
      <Plugin
        v-if="showAction"
        @hideAction="showAction = false"
        :itemsData="itemsData"
      />
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
      showAction: false,
    };
  },
};
</script>

<style lang="scss">
</style>