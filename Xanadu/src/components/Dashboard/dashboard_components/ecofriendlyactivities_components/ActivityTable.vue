<template>
  <div>
    <h2 style="color: black">Eco-Friendly Activities</h2>
    <table id="ecoFriendlyActivitiesTable" class="auto-index">
      <tr>
        <th>Activity Description</th>
        <th>Activity Type</th>
        <th>Amount</th>
        <th>Sustainability Points</th>
        <th>Date</th>
        <th>Options</th>
      </tr>
      <tr v-for="activity in activityData" :key="activity.id">
        <td>{{ activity.activityDescription }}</td>
        <td>{{ activity.activityType }}</td>
        <td>{{ activity.amount }}{{ getUnits(activity.activityType) }}</td>
        <td>{{ activity.sustainabilityPoints }}</td>
        <td>{{ activity.date }}</td>
        <td>
          <button @click="deleteActivity(activity.activityType, activity.id)">
            X
          </button>
        </td>
      </tr>
    </table>
    <br /><br />
    <!-- <button id="buttonToAddActivity">Add Activity</button> -->
  </div>
</template>

<script>
import firebaseApp from "@/firebase.js";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  getDocs,
  setDoc,
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  emits: ["deletedActivity"],
  props: {
    activityData: Array,
  },
  methods: {
    getUnits(activityType) {
      let units = "";
      if (activityType === "Water Conservation") {
        units = "L";
      } else if (activityType === "Energy Conservation") {
        units = "KwH";
      } else if (activityType === "Waste Reduction") {
        units = "Kg";
      }
      return units;
    },
    async deleteActivity(activityType, activityId) {
      console.log(activityType);
      console.log(activityId);
      alert("Deleting activity!");
      await deleteDoc(
        doc(
          db,
          "Users/Green Rangers/TestingAcct/Eco-Friendly Activities/" +
            activityType +
            "/" +
            activityId
        )
      );
      this.$emit("deletedActivity");
    },
  },
  // data() {
  //   return {
  //     activities: {},
  //   };
  // },
  // watch: {
  //   activityData(data) {
  //     console.log(
  //       "activityData has been passed from EcoFriendlyActivities.vue to ActivityTable.vue. This is activityData:"
  //     );
  //     console.log(data);
  //   },
  // },
};
</script>
