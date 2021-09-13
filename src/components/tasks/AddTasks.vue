<template>
  <form @submit.prevent="addTask">
    <input type="text" v-model="description" placeholder="Job description">
    <input type="number" v-model="time" placeholder="Seconds to complete">

    <select multiple v-if="robotTypes" v-model="completeableBy">
      <option selected hidden>Select all who can complete this task?</option>
      <option v-for="robotType in robotTypes" :value="robotType.id" :key="robotType.id">{{ robotType.name }}</option>
    </select>
    <button action="submit">Add Robot</button>
  </form>
</template>

<script>
  export default {
    name: 'AddTasks',
    data() {
      return {
        description: null,
        time: null,
        completeableBy: 'Select all who can complete this task?'
      }
    },
    computed: {
      robotTypes() {
        return this.$store.state.robotTypes.robotTypes
      },
    },
    methods: {
      addTask() {
        let errors = [];
        console.log(this.completeableBy);
        if (!this.description) {
          errors.push('Description is required');
        }
        if (!this.time) {
          errors.push('Time is required');
        }
        if (this.time > 30) {
          errors.push('Time cannot be greater than 30 seconds');
        }
        if (this.time < 1) {
          errors.push('Time cannot be less than 1 second');
        }
        if (!this.completeableBy.length) {
          errors.push('Must select at least one robot that can complete this task!');
        }
        if (errors.length) {
          alert(errors.join('\n'));
          return;
        }
        console.log(this.description, this.time, this.completeableBy);
      }
    }
  }
</script>

<style scoped>
<style scoped>
form {
  width: 100%;
  display: inline-block;
}
form input, select, button {
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 40px;
  font-size: 20px;
  line-height: 30px;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  margin-bottom: 5px;
}

form select {
  height: fit-content;
  max-height: 250px;
}

form input::placeholder, form input, select {
  text-align: center;
  color: #2c3e50b7;
}
form button {
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  color: #2c3e50;
  background-color: lightslategray;
  border-radius: 4px;
  border: 1px solid #2c3e50;
  box-shadow: 0 4px #2c3e50;
}

form button:hover {
  background-color: #42b983;
  box-shadow: 0 0px #2c3e50;
  transform: translateY(4px);
}
</style>