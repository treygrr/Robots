import { getNextId, getRandomTasks } from "../../mixins/storeHelpers";

const defaultState = [
  {
    id: 0,
    type: "UNIPEDAL",
    name: "Unipedal",
  },
  {
    id: 1,
    type: "BIPEDAL",
    name: "Bipedal",
  },
  {
    id: 2,
    type: "QUADRUPEDAL",
    name: "Quadrupedal",
  },
  {
    id: 3,
    type: "ARACHNID",
    name: "Arachnid",
  },
  {
    id: 4,
    type: "RADIAL",
    name: "Radial",
  },
  {
    id: 5,
    type: "AERONAUTICAL",
    name: "Aeronautical",
  },
];

export function RESET_TYPES(state) {
  // reset state here to default types provided
  state.robotTypes = defaultState;
}

export function ADD_ROBOT(state, robot) {
  const nextId = getNextId(state.robots);
  const newType = {
    id: nextId,
    ...robot,
  };

  state.robots.push(newType);

  const randomTasks = getRandomTasks(this.state.tasks.tasks, 5);
  randomTasks.forEach((task) => {
    const newTask = {
      id: getNextId(this.state.tasks.tasks),
      taskId: task.id,
      robotId: newType.id,
    };
    state.robotsTasks.push(newTask);
  });
}

export function ASSIGN_TASKS_TO_ROBOT(state, { robotId, taskId }) {
  const nextId = getNextId(state.robotsTasks);
  const newTask = {
    id: nextId,
    robotId,
    taskId,
  };
  state.robotsTasks.push(newTask);
}
