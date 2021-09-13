export default function() {
  return {
    robots: localStorage.getItem("robots")
      ? JSON.parse(localStorage.getItem("robots"))
      : JSON.parse(
          JSON.stringify([
            { id: 0, name: "Larry", type: "Bipedal" },
            { id: 4, name: "Moe", type: "Bipedal" },
          ])
        ),
    robotsTasks: localStorage.getItem("robotsTasks")
      ? JSON.parse(localStorage.getItem("robotsTasks"))
      : [
          { id: 0, robotId: 0, taskId: 1, complete: false },
          { id: 1, robotId: 0, taskId: 5, complete: false },
          { id: 1, robotId: 0, taskId: 6, complete: false },
          { id: 1, robotId: 0, taskId: 3, complete: false },
          { id: 1, robotId: 0, taskId: 4, complete: false },
          { id: 0, robotId: 4, taskId: 1, complete: false },
          { id: 1, robotId: 4, taskId: 5, complete: false },
          { id: 1, robotId: 4, taskId: 6, complete: false },
          { id: 1, robotId: 4, taskId: 3, complete: false },
          { id: 1, robotId: 4, taskId: 4, complete: false },
        ],
  };
}
