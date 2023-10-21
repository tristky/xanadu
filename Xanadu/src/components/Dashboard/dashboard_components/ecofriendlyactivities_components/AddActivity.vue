<script>
import { useDialog } from "primevue/usedialog";
import AddActivityBox from "./AddActivityBox.vue";

export default {
  components: {
    AddActivityBox,
  },
  methods: {
    showAddActivityBox() {
      this.$dialog.open(AddActivityBox, {});
    },
  },
  data() {
    return {
      dialog: useDialog(),
    };
  },
};
</script>

<template>
  <div>
    <Button label="Add Eco-Friendly Activity" @click="showAddActivityBox" />
    <DynamicDialog />
  </div>
</template>
