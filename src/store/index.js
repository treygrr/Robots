
import Vuex from "vuex";
import robotTypes from "./robotTypes";
import robots from "./robots";

const Store = new Vuex.Store({
  modules: {
    robotTypes,
    robots,
    
  },
});

export default Store;
