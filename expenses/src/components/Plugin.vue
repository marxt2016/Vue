<template>
  <div v-click-outside="hideActions" class="modal-actions">
    <div class="wrapper">
      <div class="modal-content-actions">
        <div v-show="!show" @click="edit(itemsData)">
          <i class="fa fa-pencil icon"></i><span>Edit</span>
        </div>
        <div v-show="show">
          <input type="date" v-model="UpdatedItem.date" />
          <select v-model="UpdatedItem.category">
            <option
              v-for="option in getCategoryList"
              :value="option"
              :key="option"
            >
              {{ option }}
            </option>
          </select>
          <input type="number" v-model="UpdatedItem.value" />

          <button class="btn" @click="updateItemInStore">Save</button>
          <button class="btn" @click="hideActions">Cancel</button>
        </div>

        <div v-show="!show" @click="del(itemsData)">
          <i class="fa fa-trash icon"></i><span>Delete</span>
        </div>
      </div>
      <div class="close" v-show="!show" @click="$myplugin.hide()">x</div>
    </div>
  </div>
</template>
<script>
import vClickOutside from "v-click-outside";
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Plugin",
  components: {},
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      show: false,
      update: this.$myplugin.EventBus.$on("edit", this.showEditForm),
      UpdatedItem: {
        id: "",
        date: "",
        category: "",
        value: "",
      },
    };
  },
  computed: mapGetters(["getCategoryList"]),
  props: {
    itemsData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapMutations(["deleteItem", "updateItem"]),
    hideActions() {
      this.$myplugin.hide();
    },
    edit(data) {
      this.$myplugin.edit(data);
    },
    del(data) {
      this.$myplugin.del(data);
    },
    removeFromStore(data) {
      this.deleteItem(data);
    },
    updateItemInStore() {
      this.updateItem(this.UpdatedItem);
      this.hideActions();
    },
    showEditForm() {
      this.show = true;
      this.UpdatedItem = {
        id: this.itemsData.id,
        date: this.itemsData.date,
        category: this.itemsData.category,
        value: this.itemsData.value,
      };
    },
  },
  mounted() {
    this.$myplugin.EventBus.$on("delete", this.removeFromStore);
  },
  created() {},
};
</script>
<style scoped>
</style>
