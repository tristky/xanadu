<template>
  <XanaduTitle />
  <AddActivity />
</template>

<script>
import XanaduTitle from "./components/XanaduTitle.vue";
import AddActivity from "./components/AddActivity.vue";

export default {
  name: "Xanadu",
  components: {
    XanaduTitle,
    AddActivity,
  },
};
</script>
