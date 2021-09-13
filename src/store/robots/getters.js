export function getRobots(state) {
  return state.robots;
}

export function getRobotsTasks(state) {
  // return state.robots.tasks
  return state.robotsTasks;
}

export function getRobotsTasksByRobotId(state) {
  // filter tasks by robotId;
  return function(robotId) {
    return state.robotsTasks.filter((task) => task.robotId === robotId);
  };
}


