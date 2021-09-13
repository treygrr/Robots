import { getNextId } from "../../mixins/storeHelpers";

export function ADD_TASK(state, task) {
  const nextId = getNextId(state.tasks);
  const newTask = {
    id: nextId,
    description: task.description,
    eta: task.eta,
    completeableBy: task.completeableBy,
  };
  state.tasks.push(newTask);
}

export function DELETE_TASK(state, taskId) {
  // search an array and find the index of the matching id
  const indexOfTask = state.tasks.findIndex((task) => task.id === taskId);

  for (let i = 0; i < this.state.robots.robotsTasks.length; i++) {
    if (this.state.robots.robotsTasks[i].taskId === taskId) {
      this.state.robots.robotsTasks.splice(i, 1);
    }
  }
  state.tasks.splice(indexOfTask, 1);
}
