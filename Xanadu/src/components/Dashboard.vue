<template>
  <div>
    <Graphs />
    <MilestoneProgress />
    <EcoFriendlyActivities />
  </div>
</template>

<script>
import EcoFriendlyActivities from "./dashboard_components/EcoFriendlyActivities.vue";
import MilestoneProgress from "./dashboard_components/MilestoneProgress.vue";
import Graphs from "./dashboard_components/Graphs.vue";

export default {
  components: {
    EcoFriendlyActivities,
    MilestoneProgress,
    Graphs,
  },
};
</script>
