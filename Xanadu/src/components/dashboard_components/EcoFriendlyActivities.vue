<template>
  <div>
    <ActivityTable
      :activityData="activityData"
      @deletedActivity="deletedActivity"
    />
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
        "activityData has been passed from Dashboard.vue to EcoFriendlyActivities.vue. This is activityData:"
      );
      console.log(data);
    },
  },
  methods: {
    deletedActivity() {
      console.log("emit of deletedActivity from AddActivityBox received!");
      this.$emit("deletedActivity");
      console.log("EcoFriendlyActivities have emitted 'deletedActivity'!");
    },
    added() {
      console.log("emit of added from AddActivityBox received!");
      this.$emit("added");
      console.log("EcoFriendlyActivities have emitted 'added'!");
    },
  },
};
</script>
