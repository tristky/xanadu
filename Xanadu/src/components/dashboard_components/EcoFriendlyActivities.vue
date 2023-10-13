<template>
  <div>
    <ActivityTable :activityData="activityData" />
    <AddActivityBox @added="added" />
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
  watch: {
    activityData(data) {
      console.log(
        "activityData has been passed from Dashboard.vue to EcoFriendlyActivities.vue. This is activityDate:"
      );
      console.log(data);
    },
  },
  methods: {
    added() {
      this.$emit("added");
    },
  },
};
</script>
