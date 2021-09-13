<template>
  <article v-if="tasks.length">
    <div class="card" v-for="task in tasks" :key="task.id">
      <strong>Description</strong>
      <p>{{ task.description }}</p>
      <p><strong>Time(seconds): </strong>{{ task.eta }}</p>
      <p v-if="task">
        <strong>Doable by</strong>:
        <span v-for="comp in task.completeableBy" :key="comp">{{ getRobotTypesById(comp) }}&nbsp;</span>
      </p>
      <button @click="deleteTask(task.id)">Delete</button>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'TaskList',
    computed: {
      tasks: function() {
        return this.$store.state.tasks.tasks;
      },
    },
    methods: {
      getRobotTypesById: function(robotId) {
        return this.$store.state.robotTypes.robotTypes.find(robot => robot.id === robotId).name;
      },
      deleteTask: function(taskId) {
        this.$store.commit('tasks/DELETE_TASK', taskId);
      },
    },
  }
</script>

<style scoped>
.card-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
}
.card {
  box-sizing: border-box;
  min-width: 200px;
  width: 100%;
  box-shadow: 0 2px 4px 0 #2c3e50;
  transition: 0.4s;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #2c3e50;
  display: block;
}
.card-spacer {
  box-sizing: border-box;
  min-width: 200px;
  width: 100%;
  height: 0;
  transition: 0.4s;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 20px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid transparent;
  display: block;
}
.card:hover {
  box-shadow: 0 4px 8px 0 #2c2c2c;
  border: 1px solid #2c3e50;
}
.card > h2 {
  margin-top: -10px;
  font-size: 1.2em;
}
.card > p {
  text-align: left;
  display: block;
  width: 100%;
  margin: 0;
}


</style>