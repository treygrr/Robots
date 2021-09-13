<template>
  <main>
    <div class="container">
      <section>
        <h2>Add a Robot:</h2>
        <AddRobot/>
        <h2>Bot List</h2>
        <BotList />
      </section>
      <section>
        <h2>Add a Task:</h2>
        <AddTasks />
        <h2>Task List</h2>
        <TaskList />
      </section>
      <section>
        <h2>Leaderboard:</h2>
        <LeaderboardControls />
        <h2>Stats:</h2>
        <LeaderboardStats />
      </section>
    </div>
  </main>
</template>

<script>
import AddRobot from '../components/robots/AddRobot.vue';
import BotList from '../components/robots/BotList.vue';
import AddTasks from '../components/tasks/AddTasks.vue';
import TaskList from '../components/tasks/TaskList.vue';
import LeaderboardControls from '../components/leaderboard/LeaderboardControls.vue';
import LeaderboardStats from '../components/leaderboard/LeaderboardStats.vue';

export default {
  name: 'Home',
  components: {
    AddTasks,
    AddRobot,
    BotList,
    TaskList,
    LeaderboardControls,
    LeaderboardStats

  }
}
</script>

<style scoped>
main {
  height: calc(100vh - 100px);
  width: 100vw;
  background-color: lightblue;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
section {
  width: 33%;
  height: calc(100vh - 100px);
  overflow: scroll;
  padding: 20px;
  box-sizing: border-box;
}
@media (max-width: 1268px) {
  section {
    width: 100%;
  }
}
</style>