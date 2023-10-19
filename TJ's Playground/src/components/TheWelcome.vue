<template>
  <div>
    <h1>This is the home page</h1>
    <Toast> </Toast>
    <span class="p-float-label">
      <InputText id="txt" v-model="text" />
      <label for="txt">Text</label>
    </span>
    <br />
    <Button label="Greet" @click="greet" icon="pi pi-user"> </Button>
    <br />
    <br />
    <Calendar v-model="date" showIcon />
    <br />
    <br />
    <Button label="Show Date" @click="showDate"> </Button>
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  methods: {
    greet() {
      this.$toast.add({
        severity: "success",
        summary: "PrimeTime",
        detail: this.text,
      });
    },
    showDate() {
      console.log(this.date);
    },
  },

  data() {
    return {
      text: null,
      date: "",
      products: [
        { code: 1, name: "A", category: "i", quantity: "5" },
        { code: 2, name: "B", category: "ii", quantity: "6" },
        { code: 3, name: "C", category: "iii", quantity: "7" },
        { code: 4, name: "D", category: "iv", quantity: "8" },
      ],
      // products: {
      //   "code": [1, 2, 3, 4],
      //   "name": ["A", "B", "C", "D"],
      //   "category": ["i", "ii", "iii", "iv"],
      //   "quantity": [5, 6, 7, 8],
      // },
      // products: [
      //   [1, 2, 3, 4],
      //   ["A", "B", "C", "D"],
      //   ["i", "ii", "iii", "iv"],
      //   [5, 6, 7, 8],
      // ],
    };
  },
};
</script>

<!-- <script setup>

import { ref } from "vue";
import { useToast } from 'primevue/usetoast';

const text = ref();
const toast = useToast();
const greet = () => {
      toast.add({
        severity: "success",
        summary: "PrimeTime",
        detail: text.value,
      });
    };
  </script> -->
