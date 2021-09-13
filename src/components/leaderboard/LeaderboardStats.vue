<template>
  <article class="leaderboard-controls">
    <div class="playerWrapper">
      <div v-for="robot in robots" :key="robot.id" class="player">
        <div class="progressbar-wrapper" style="transition: all .2s ease-in-out; height: 10px;background-color: black; width: 100%; border: 1px solid white;">
          <div class="progress" :style="`height: 10px; background-color: lightgreen; width: ${Number.parseInt(countDown)}%;`">
            {{ countDown }}
            {{ robot.tasks[0].description }}
          </div>
        </div>
        {{ robot }}
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
      this.createTimer();
    },
    methods: {
      setRobots: function () {
        this.$store.state.robots.robots.forEach(robot => {
          let robotData = {
            robot,
            tasks: this.$store.state.robots.robotsTasks.filter(function (task) { return task.robotId === robot.id }),
          }
          
          this.robots.push(robotData);
        });
      },
      canRobotDoTask: function (/* robot, task */) {
        // take current robot type and check against completeableBy array list to see if the bot can do it
        // and return true or false
      
      },
      eachRobot: function (/* robot */) {
      },
      eachRobotsQueue: function (/* robot */) {
        // loop through each item in their que
        // check if they can do it
        // if not set completed to false
        // start the timer if they can do it
        // when timer ends set completed to true
        // start next task
      },
      createTimer: function () {
        // create a timer for each robot
        console.log('create timer');
        let timeleft = 0;
        let robotProgress = setInterval(() => {
          this.countDown = timeleft * 10;
          console.log(this.countDown);
          if(timeleft >= 10){
            clearInterval(robotProgress);
          }
          
          timeleft += 1;
        }, 1000);
      }
    },
  }
</script>
