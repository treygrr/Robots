<template>
  <article class="leaderboard-controls">
      <button @click="this.setRobots();this.eachRobot();">Start Simulation</button>
      <button @click="this.setRobots();this.clearTimers();">Reset Simulation</button>
  </article>
  <article class="leaderboard-controls">
    <div class="playerWrapper">
      <div v-for="robot in stats" :key="robot.id" class="player">
        <p><strong>{{ robot.robot.name }}</strong>
        Score: {{ robot.robot.tasksComplete? robot.robot.tasksComplete: '0' }} / 5</p>
        <div v-for="task in robot.tasks" :key="task.id" class="progressbar-wrapper" :style="task.failed? 'background-color: red;': ''">
          <p>{{ getTaskById(task.taskId).description }}</p>
          <div class="progress" :style="`width: ${Number.parseInt(task.completedPercent)}%;`">
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'LeaderboardStats',
    data: function () {
      return {
        stats: [],
        countDown: 0,
        timers: [],
      }
    },
    computed: {
      robots() {
        return this.$store.state.robots.robots;
      },
      robotsCount() {
        return this.$store.state.robots.robots.length;
      },
      robotsTasks() {
        return this.$store.state.robots.robotsTasks;
      },
      robotsTasksCount() {
        return this.$store.state.robots.robotsTasks.length;
      },
      tasksList() {
        return this.$store.state.tasks.tasks;
      },
      tasksListCount() {
        return this.$store.state.tasks.tasks.length;
      },
    },
    watch: {
      robotsCount() {
        this.setRobots();
      },
      robotsTasksCount() {
        this.setRobots();
      },
      tasksListCount() {
        this.setRobots();
      },
    },

    mounted: function () {
      this.setRobots();
    },
    methods: {
      getTaskById: function (id) {
        return this.$store.state.tasks.tasks.find(task => task.id === id);
      },
      clearTimers: function () {
        this.timers.forEach(timer => {
          clearInterval(timer);
        });
      },
      canRobotCompleteTask: function (robot, taskId) {
        const completeableBy = this.getTaskById(taskId).completeableBy;
        const robotTypes = this.$store.state.robotTypes.robotTypes;
        const currentRobotType = robot.robot.type;

        let completeableByStrings = [];
        completeableBy.forEach(type => {
          completeableByStrings.push(robotTypes.find(robotType => robotType.id === type).name);
        });

        let doable = false;
        completeableByStrings.forEach(type => {
          if (type === currentRobotType) {
            doable = true;
          }
        });
        return doable;
      },
      setRobots: function () {
        this.stats = [];
        this.clearTimers();
        this.$store.commit('robots/RESET_COMPLETED_TASKS');

        this.robots.forEach(robot => {
          let robotData = {
            robot,
            tasks: this.$store.state.robots.robotsTasks.filter(function (task) { return task.robotId === robot.id }),
          }
          robotData.robot.tasksComplete = 0;

          robotData.tasks.forEach(task => {
            task.completedPercent = 0;
            task.failed = false;
          });
            
          this.stats.push(robotData);
        });
      },
      eachRobot: function (/* robot */) {
        this.stats.forEach(robot => {
          this.eachRobotsQueue(robot);
        });
      },
      eachRobotsQueue: function (robot) {
        // loop through each item in their que
        // check if they can do it
        // if not set completed to false
        // start the timer if they can do it
        // when timer ends set completed to true
        // start next task
        console.log(robot)
        let tasks = robot.tasks;
        for (let i = 0; i < tasks.length; i++) {
            if (!tasks[i].complete && tasks[i].completedPercent < 100){
              if (!this.canRobotCompleteTask(robot, tasks[i].taskId)) {
                tasks[i].complete = true;
                tasks[i].failed = true;
                tasks[i].completedPercent = 0;
              } else {
              this.createTimer(tasks[i], robot);
              break;
            }
          }
        }
      },
      createTimer: function (task, robot) {
        let completedPercent = task.completedPercent;
        let eta = this.getTaskById(task.taskId).eta;
        let seconds = Number.parseInt(((eta % 60000) / 1000).toFixed(0));
        let elapsedTime = 0;
        (100 * elapsedTime) / seconds;
        let interval = setInterval(() => {
          elapsedTime++;
          completedPercent = (100 * elapsedTime) / seconds;
          task.completedPercent = completedPercent;
          if (completedPercent >= 100) {
            clearInterval(interval);
            robot.robot.tasksComplete++;
            console.log('here is the bot', robot.robot.tasksComplete);
            this.eachRobotsQueue(robot);
            task.complete = true;
          }
        }, 1000);
        this.timers.push(interval);
      }
    },
  }
</script>

<style scoped>
button {
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  color: #2c3e50;
  background-color: lightslategray;
  border-radius: 4px;
  border: 1px solid #2c3e50;
  box-shadow: 0 4px #2c3e50;
  width: 100%;
  margin-bottom: 10px;
}

button:hover {
  background-color: #42b983;
  box-shadow: 0 0px #2c3e50;
  transform: translateY(4px);
}
.progressbar-wrapper {
  position:relative;
  transition: all .2s ease-in-out;
  height: 40px;
  background-color: black;
  width: calc(100% - 20px);
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 10px auto;
}
.progressbar-wrapper > p {
  position: absolute;
  color: white;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  line-height: 40px;
  text-align: center;
}
.progress {
  height: 40px;
  background-color: rgba(144, 238, 144, .5);
  position: absolute;
  top: 0;
  left: 0;
  transition: all .2s linear;
}
.player {
  border: 1px solid #42b983;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
  border-radius: 4px;

}
</style>