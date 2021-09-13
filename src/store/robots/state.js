export default function() {
  return {
    robots: localStorage.getItem("robots")
      ? JSON.parse(localStorage.getItem("robots"))
      : JSON.parse(JSON.stringify([])),
    robotsTasks: localStorage.getItem("robotsTasks")
      ? JSON.parse(localStorage.getItem("robotsTasks"))
      : [
          { id: 0, robotId: 0, taskId: 1, complete: false },
          { id: 1, robotId: 0, taskId: 5, complete: false },
          { id: 2, robotId: 0, taskId: 6, complete: false },
          { id: 3, robotId: 0, taskId: 3, complete: false },
          { id: 4, robotId: 0, taskId: 4, complete: false },
          { id: 5, robotId: 4, taskId: 2, complete: false },
          { id: 6, robotId: 4, taskId: 7, complete: false },
          { id: 7, robotId: 4, taskId: 3, complete: false },
          { id: 8, robotId: 4, taskId: 1, complete: false },
          { id: 9, robotId: 4, taskId: 9, complete: false },
        ],
  };
}
