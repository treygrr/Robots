<template>
  <article class="leaderboard-controls">
      <button @click="startSimulation">Start Simulation</button>
      <button @click="stopSimulation">Stop Simulation</button>
      <button @click="this.setRobots()">Reset Simulation</button>
  </article>
  <article class="leaderboard-controls">
    <div class="playerWrapper">
      <div v-for="robot in robots" :key="robot.id" class="player">
        
        {{ robot.robot.name }}
        {{ robot }}
        <div v-for="task in robot.tasks" :key="task.id" class="progressbar-wrapper">
          <p>{{ getTaskById(task.id).description }}</p>
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
        robots: [],
        countDown: 0,
      }
    },
    mounted: function () {
      this.setRobots();
      this.eachRobot()
    },
    methods: {
      getTaskById: function (id) {
        return this.$store.state.tasks.tasks.find(task => task.id === id);
      },
      setRobots: function () {
        this.$store.state.robots.robots.forEach(robot => {
          let robotData = {
            robot,
            tasks: this.$store.state.robots.robotsTasks.filter(function (task) { return task.robotId === robot.id }),
          }
          robotData.tasks.forEach(task => {
            task.completedPercent = 0;
          });
            
          this.robots.push(robotData);
          console.log(this.robots)
        });
      },
      canRobotDoTask: function (/* robot, task */) {
        // take current robot type and check against completeableBy array list to see if the bot can do it
        // and return true or false
        return true;
      },
      eachRobot: function (/* robot */) {
        this.robots.forEach(robot => {
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
        robot.tasks.every(task => {
          console.log(task);
            if (!this.canRobotDoTask(robot, task)) {
              task.completed = true;
              task.completedPercent = 0;
            }
            if (!task.completed && task.completedPercent === 0){
              this.createTimer(task, robot);
            }
        });
      },
      createTimer: function (task, robot) {
        let completedPercent = task.completedPercent;
        let eta = this.getTaskById(task.id).eta;
        let seconds = Number.parseInt(((eta % 60000) / 1000).toFixed(0));
        console.log(eta, seconds);
        let elapsedTime = 0;
        (100 * elapsedTime) / seconds;
        let interval = setInterval(() => {
          elapsedTime++;
          completedPercent = (100 * elapsedTime) / seconds;
          task.completedPercent = completedPercent;
          if (completedPercent >= 100) {
            clearInterval(interval);
            console.log('timer ended and alled eachrobots que')
            this.eachRobotsQueue(robot);
            task.complete = true;
          }
        }, 1000);
        
      }
    },
  }
</script>

<style scoped>
.progressbar-wrapper {
  position:relative;
  transition: all .2s ease-in-out;
  height: 40px;
  background-color: black;
  width: 100%;
  border: 1px solid white;
  box-sizing: border-box;
}
.progressbar-wrapper > p {
position: absolute;
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