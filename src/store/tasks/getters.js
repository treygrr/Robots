export function getTasks(state) {
  return state.tasks;
}

export function getTaskById(state) {
  // find task by task id

  return (taskId) => {
    return state.tasks.find((task) => task.id === taskId);
  };
}
