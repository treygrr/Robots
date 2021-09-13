export async function addRobot({ /* state, */ commit }, payload) {
  const robot = payload;
  return commit("ADD_ROBOT", robot);
}

export async function assignTasksToRobot({ /* state, */ commit }, payload) {
  const { robot, tasks } = payload;
  return commit("ASSIGN_TASKS_TO_ROBOT", { robot, tasks });
}
