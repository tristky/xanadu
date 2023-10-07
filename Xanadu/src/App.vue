<template>
  <div>
    <XanaduTitle />
    <AddActivity @added="updateTable" />
    <ActivityTable :key="refreshComp" />
  </div>
</template>

<script>
import XanaduTitle from "./components/XanaduTitle.vue";
import AddActivity from "./components/AddActivityBox.vue";
import ActivityTable from "./components/ActivityTable.vue";

export default {
  name: "Xanadu",
  components: {
    XanaduTitle,
    AddActivity,
    ActivityTable,
    ActivityTable,
  },

  data() {
    return {
      refreshComp: 0,
    };
  },
  methods: {
    updateTable() {
      this.refreshComp += 1;
    },
  },
};
</script>
