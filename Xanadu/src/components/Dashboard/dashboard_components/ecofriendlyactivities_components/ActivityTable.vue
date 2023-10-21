<template>
  <div class="card p-fluid">
    <DataTable
      v-model:editingRows="editingRows"
      :value="activityData"
      editMode="row"
      dataKey="id"
      @row-edit-save="onRowEditSave"
      tableClass="editable-cells-table"
      tableStyle="min-width: 50rem"
    >
      <Column
        field="activityDescription"
        header="Description"
        style="width: 20%"
      >
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column field="activityType" header="Type" style="width: 20%">
        <template #editor="{ data, field }">
          <Dropdown
            v-model="data[field]"
            :options="statuses"
            optionLabel="label"
            optionValue="value"
            placeholder="Select a Status"
          >
            <!-- <template #option="slotProps">
              <Tag :value="slotProps.option.value" />
            </template> -->
          </Dropdown>
        </template>
        <!-- <template #body="slotProps">
          <Tag :value="slotProps.data.activityType" />
        </template> -->
      </Column>
      <Column field="amount" header="Amount" style="width: 20%">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
          <h3>{{ getUnits(activityType) }}</h3>
        </template>
      </Column>
      <Column field="sustainabilityPoints" header="Points" style="width: 20%">
      </Column>
      <Column field="date" header="Date" style="width: 20%">
        <template #editor="{ data, field }">
          <Calendar v-model="data[field]" showIcon />
          <!-- <InputText v-model="data[field]" /> -->
        </template>
      </Column>
      <Column
        :rowEditor="true"
        style="width: 10%; min-width: 8rem"
        bodyStyle="text-align:center"
      ></Column>
      <Column> </Column>
    </DataTable>
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
    activityData: Array, // this is in the right format for the DataTable
  },
  data() {
    return {
      activityDescription: null,
      activityType: null,
      amount: null,
      sustainabilityPoints: null,
      date: null,
      editingRows: [],
      statuses: [
        { label: "Water Conservation", value: "Water Conservation" },
        { label: "Energy Conservation", value: "Energy Conservation" },
        { label: "Waste Reduction", value: "Waste Reduction" },
      ],
      activityTypeEnergyConservation: false,
      activityTypeWaterConservation: false,
      activityTypeWasteReduction: false,
    };
  },
  methods: {
    async onRowEditSave(event) {
      let { newData, index } = event;
      // var points = (newData.amount) / 10;
      // const doc = doc(
      //   db,
      //   "Users/Green Rangers/TestingAcct/Eco-Friendly Activities/" +
      //     newData.activityType +
      //     "/" +
      //     activityId
      // );
      // await updateDoc(doc, {
      //   activityDescription: description,
      //   activityType: type,
      //   amount: amount,
      //   sustainabilityPoints: points,
      //   date: date,
      // });
      // this.products[index] = newData;
      this.$emit("activityEdited");
      console.log(this.activityType);
      console.log(newData);
    },
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
    async updateActivity(description, type, amount, date) {
      alert("Editing activity!");
      var points = amount / 10;
      const doc = doc(
        db,
        "Users/Green Rangers/TestingAcct/Eco-Friendly Activities/" +
          activityType +
          "/" +
          activityId
      );
      await updateDoc(doc, {
        activityDescription: description,
        activityType: type,
        amount: amount,
        sustainabilityPoints: points,
        date: date,
      });
      this.toggleUpdateForm(null);
      this.$emit("deletedActivity");
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
  watch: {
    updateForm(form) {
      if (form.type == "Water Conservation") {
        this.activityTypeWaterConservation = true;
        this.activityTypeEnergyConservation = false;
        this.activityTypeWasteReduction = false;
      } else if (form.type == "Energy Conservation") {
        this.activityTypeWaterConservation = false;
        this.activityTypeEnergyConservation = true;
        this.activityTypeWasteReduction = false;
      } else if (form.type == "Waste Reduction") {
        this.activityTypeWaterConservation = false;
        this.activityTypeEnergyConservation = false;
        this.activityTypeWasteReduction = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}
</style>
