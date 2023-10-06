<template>
  <div class="container">
    <form id="addEcoFriendlyActivity">
      <h2>Add Activity</h2>
      <div class="formli">
        <!-- <label for="activityType">Activity Type:</label> -->
        <div>
          <select v-model="activityType" id="activityType" placeholder="hello">
            <option value="" disabled selected>Activity Type</option>
            <option value="option1">Option 1</option>
          </select>
        </div>
        <br />
        <div class="formli">
          <label for="activityDescription">Activity Description:</label>
          <br />
          <textarea
            v-model="activityDescription"
            id="activityDescription"
            placeholder="Activity Description"
          ></textarea>
        </div>
        <div>
          <input
            type="text"
            v-model.number="amount"
            placeholder="Amount"
            style="display: inline-flex"
          />
          <h3 style="display: inline-flex">Kg</h3>
        </div>
        <br />
        <button type="submit">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activityType: "",
      activityDescription: "",
      amount: "",
      activityDate: "",
    };
  },
};
</script>

<style>
.container {
  color: darkgrey;
}
button {
  background-color: #738678;
  color: white;
  font-weight: bold;
  width: 100%;
}
</style>
