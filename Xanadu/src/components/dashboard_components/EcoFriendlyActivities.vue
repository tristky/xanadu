<template>
  <div>
    <ActivityTable :activityData="activityData" />
    <AddActivityBox />
  </div>
</template>

<script>
import AddActivityBox from "./ecofriendlyactivities_components/AddActivityBox.vue";
import ActivityTable from "./ecofriendlyactivities_components/ActivityTable.vue";

export default {
  components: {
    AddActivityBox,
    ActivityTable,
  },
  props: {
    activityData: Object,
  },
};
</script>
