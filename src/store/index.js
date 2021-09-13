import Vuex from "vuex";
import leaderboard from "./leaderboard";
import robots from "./robots";
import robotTypes from "./robotTypes";
import tasks from "./tasks";

const Store = new Vuex.Store({
  modules: {
    leaderboard,
    robots,
    robotTypes,
    tasks,
  },
});

export default Store;
