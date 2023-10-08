<template>
  <div>
    <div><h4>Eco-Friendly Activity Bargraph</h4></div>
    <div>
      <column-chart id="activityChart" :data="activityData" />
    </div>
  </div>
</template>

<script>
import firebaseApp from "@/firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDocs, collection } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "activityChart",
  data() {
    return {
      activityData: {
        "Water Conservation": 0,
        "Energy Conservation": 0,
        "Waste Reduction": 0,
      },
      data: { Sun: 32, Mon: 46, Tues: 28 },
    };
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
    for (const category of [
      "Water Conservation",
      "Energy Conservation",
      "Waste Reduction",
    ]) {
      let points = await getActivityChartData(category);
      this.activityData[category] = points;
    }
    console.log(this.activityData);
  },
};
</script>

<style scoped>
.activityChart {
  background-color: #738678;
}
</style>
