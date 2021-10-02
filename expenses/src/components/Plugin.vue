<template>
  <div v-click-outside="hideActions" class="modal-actions">
    <div class="wrapper">
      <div class="modal-content-actions">
        <div @click="edit()">
          <i class="fa fa-pencil icon"></i><span>Edit</span>
        </div>
        <div @click="del()">
          <i class="fa fa-trash icon"></i><span>Delete</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vClickOutside from "v-click-outside";
export default {
  name: "Plugin",
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {};
  },
  props: {
    showAction: {
      type: Boolean,
      default() {
        return false;
      },
    },
    itemsData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    hideActions() {
      this.$emit("hideAction");
    },
    edit() {
      console.log(this.itemsData.id);
      this.$myplugin.edit(this.itemsData.id);
    },
    del() {
      this.$myplugin.delete();
    },
  },
  mounted() {
    this.$myplugin;
  },
};
</script>
<style scoped>
</style>
