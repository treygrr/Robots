<template>
  <article class="leaderboard-controls">
    <div class="playerWrapper">
      <div v-for="robot in robots" :key="robot.id" class="player">
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
      }
    },
    mounted: function () {
      this.setRobots();
    },
    methods: {
      setRobots: function () {
        this.$store.state.robots.robots.forEach(robot => {
          let robotData = {
            robot,
            tasks: this.$store.state.robots.robotsTasks.filter(function (task) { return task.robotId === robot.id}),
          }
          this.robots.push(robotData);
        });
      }
    },
  }
</script>
