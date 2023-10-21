<template>
  <div>
    <Graphs :activityChartData="activityChartData" :key="refreshComp" />
    <MilestoneProgress />
    <EcoFriendlyActivities
      :activityData="activityData"
      @added="refresh"
      @deletedActivity="refresh"
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
      activityChartData: null,
      activityData: null,
      refreshComp: 0,
    };
  },
  methods: {
    async refresh() {
      console.log("refreshed!");
      this.refreshComp += 1;
      this.activityData = await this.getActivityData();
      var acd = {
        "Water Conservation": 0,
        "Energy Conservation": 0,
        "Waste Reduction": 0,
      };
      for (const category of [
        "Water Conservation",
        "Energy Conservation",
        "Waste Reduction",
      ]) {
        let points = await this.getActivityChartData(category);
        // console.log(points);
        acd[category] = points;
      }
      this.activityChartData = acd;
    },
    async getActivityData() {
      const subcollectionRefs = [
        collection(
          db,
          "Users/Green Rangers/TestingAcct/Eco-Friendly Activities/Water Conservation"
        ),
        collection(
          db,
          "Users/Green Rangers/TestingAcct/Eco-Friendly Activities/Energy Conservation"
        ),
        collection(
          db,
          "Users/Green Rangers/TestingAcct/Eco-Friendly Activities/Waste Reduction"
        ),
      ];
      const promises = subcollectionRefs.map((ref) => getDocs(ref));
      var allDocuments = [];
      try {
        const allSnapshots = await Promise.all(promises);

        allSnapshots.forEach((snapshot) => {
          snapshot.forEach((doc) => {
            let document = doc.data();
            document.id = doc.id;
            allDocuments.push(document);
          });
        });

        console.log("All documents for activity table:", allDocuments);
        return allDocuments;
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    },
    async getActivityChartData(category) {
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
        // console.log("Points for " + category + ": ", points);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
      return points;
    },
  },
  async mounted() {
    // async function getActivityData() {

    // }
    // async function getActivityChartData(category) {

    // }
    var acd = {
      "Water Conservation": 0,
      "Energy Conservation": 0,
      "Waste Reduction": 0,
    };
    for (const category of [
      "Water Conservation",
      "Energy Conservation",
      "Waste Reduction",
    ]) {
      let points = await this.getActivityChartData(category);
      // console.log(points);
      acd[category] = points;
    }
    this.activityChartData = acd;
    console.log(
      "activityData has loaded in Dashboard.vue. Here is activityDate:"
    );
    console.log(this.activityChartData);
    let activityData = await this.getActivityData();
    this.activityData = activityData;
    // For debugging
    this.activityData.forEach((doc) => {
      console.log(doc);
    });
    // console.log(this.activityData);
  },
};
</script>
