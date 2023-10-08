<template>
  <div>
    <XanaduTitle />
    <ActivityChart :key="refreshComp" />
    <AddActivity @added="refresh" />
    <ActivityTable :key="refreshComp" />
  </div>
</template>

<script>
import XanaduTitle from "./components/XanaduTitle.vue";
import AddActivity from "./components/AddActivityBox.vue";
import ActivityTable from "./components/ActivityTable.vue";
import ActivityChart from "./components/ActivityChart.vue";

export default {
  name: "Xanadu",
  components: {
    XanaduTitle,
    AddActivity,
    ActivityTable,
    ActivityChart,
  },

  data() {
    return {
      refreshComp: 0,
    };
  },
  methods: {
    refresh() {
      this.refreshComp += 1;
    },
  },
};
</script>
