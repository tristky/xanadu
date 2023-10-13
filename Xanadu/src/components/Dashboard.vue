<template>
  <div>
    <Graphs />
    <MilestoneProgress />
    <EcoFriendlyActivities
      :activityData="activityData"
      @added="refresh"
      :key="refreshComp"
    />
  </div>
</template>

<script>
import EcoFriendlyActivities from "./dashboard_components/EcoFriendlyActivities.vue";
import MilestoneProgress from "./dashboard_components/MilestoneProgress.vue";
import Graphs from "./dashboard_components/Graphs.vue";
import firebaseApp from "@/firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDocs, collection } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  components: {
    EcoFriendlyActivities,
    MilestoneProgress,
    Graphs,
  },
  data() {
    return {
      activityData: null,
      refreshComp: 0,
    };
  },
  methods: {
    refresh() {
      this.refreshComp += 1;
    },
  },
  async mounted() {
    async function getActivityChartData(category) {
      const subcollectionRefs = [
        collection(
          db,
          "Users/Green Rangers/TestingAcct/Eco-Friendly Activities/" + category
        ),
      ];
      const promises = subcollectionRefs.map((ref) => getDocs(ref));
      var points = 0;
      try {
        const allSnapshots = await Promise.all(promises);
        allSnapshots.forEach((snapshot) => {
          snapshot.forEach((doc) => {
            let document = doc.data();
            points += Number(document.sustainabilityPoints);
          });
        });
        console.log("Points for " + category + ": ", points);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
      return points;
    }
    var ad = {
      "Water Conservation": 0,
      "Energy Conservation": 0,
      "Waste Reduction": 0,
    };
    for (const category of [
      "Water Conservation",
      "Energy Conservation",
      "Waste Reduction",
    ]) {
      let points = await getActivityChartData(category);
      console.log(points);
      ad[category] = points;
    }
    this.activityData = ad;
    console.log(
      "activityData has loaded in Dashboard.vue. Here is activityDate:"
    );
    console.log(this.activityData);
  },
};
</script>
