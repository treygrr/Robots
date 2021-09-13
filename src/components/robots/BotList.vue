<template>
    <article class="details-wrapper" v-if="robots">
      <details v-for="robot in robots" :key="robot.id">
        <summary>{{ robot.name }}</summary>
        <div class="card-wrapper" v-if="getTasks(robot.id).length">
          <div class="card" v-for="task in getTasks(robot.id)" :key="task.id">
            <h2>Task Information</h2>
            <p><strong>Description</strong> <br>{{ getTasksData(task.taskId).description }}</p>
            <p><strong>Time</strong>: <br>{{ getTasksData(task.taskId).eta }} </p>
            <p><strong>Completed</strong>: <br>{{ task.complete}} </p>
          </div>
          <div class="card-spacer" />
          <div class="card-spacer" />
        </div>
        <div v-else>
          <li style="list-style: none;">No tasks</li>
        </div>
      </details>
    </article>
</template>

<script>
  export default {
    name: 'BotList',
    computed: {
      robots() {
        return this.$store.getters['robots/getRobots'];
      }
    },
    methods: {
      getTasks(robotId) {
        return this.$store.getters['robots/getRobotsTasksByRobotId'](robotId);
      },
      getTasksData(taskId) {
        return this.$store.getters['tasks/getTaskById'](taskId);
      }
    },
  }
</script>

<style scoped>
summary {
  font-size: 1.3em;
  font-weight: bold;
}
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
  margin: 10px;
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
  margin: 10px;
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
details {
  padding: 0;
  margin: 0;
  background-color: lightgray;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;
  text-decoration: none;
  position: relative;
  transition: all 0.2s ease-in-out;
  color: #2c3e50;
  background-color: lightslategray;
  border-radius: 4px;
  border: 1px solid #2c3e50;
  box-shadow: 0 4px #2c3e50;
}
details[open], details:hover {
  background-color: #42b983;
  box-shadow: 0 0px #2c3e50;
  transform: translateY(4px);
}

@media (max-width: 768px) {
  .card-wrapper {
    flex-direction: column;
  }
  .card {
    min-width: unset;
    box-sizing: border-box;
    width: 95%;
    margin: 10px auto;
  }
  .card-spacer {
    min-width: unset;
    box-sizing: border-box;
    width: 95%;
    margin: 10px auto;
  }
}
</style>