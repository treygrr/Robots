<template>
  <form @submit.prevent="addRobot">
    <input type="text" v-model="name" placeholder="Robot Name">
    <select v-model="selectedType">
      <option selected hidden>Select Robot Type</option>
      <option v-for="robotType in robotTypes" :value="robotType.type" :key="robotType.id">{{ robotType.name }}</option>
    </select>
    <button action="submit">Add Robot</button>
  </form>
</template>

<script>
export default {
  name: 'AddRobot',
  data() {
    return {
      name: null,
      selectedType: 'Select Robot Type',
    }
  },
  computed: {
    robotTypes: function() {
      return this.$store.getters['robotTypes/getRobotTypes'];
    },
  },
  methods: {
    async addRobot () {
      let errors = [];
      if (this.name === null) {
        errors.push('Name is required');
      }
      if (this.selectedType === 'Select Robot Type') {
        errors.push('Type is required');
      }
      if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
      }
      this.$store.commit('robots/ADD_ROBOT', { name: this.name, type: this.selectedType });
      this.name = null;
      this.selectedType = 'Select Robot Type';
    },
    

  },
}
</script>

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
