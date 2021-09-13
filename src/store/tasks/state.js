export default function() {
  return {
    tasks: localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [
          {
            id: 0,
            description: "do the dishes",
            eta: 1000,
            completeableBy: [0, 2, 3, 5],
          },
          {
            id: 1,
            description: "sweep the house",
            eta: 3000,
            completeableBy: [1, 2, 3, 5],
          },
          {
            id: 8,
            description: "bake some cookies",
            eta: 8000,
            completeableBy: [0, 1, 2, 4],
          },
          {
            id: 2,
            description: "do the laundry",
            eta: 10000,
            completeableBy: [0, 1, 2, 3, 4],
          },
          {
            id: 3,
            description: "take out the recycling",
            eta: 4000,
            completeableBy: [1, 2, 5, 4],
          },
          {
            id: 4,
            description: "make a sammich",
            eta: 7000,
            completeableBy: [0, 1, 2, 5],
          },
          {
            id: 5,
            description: "mow the lawn",
            eta: 20000,
            completeableBy: [0, 1, 4, 5],
          },
          {
            id: 6,
            description: "rake the leaves",
            eta: 18000,
            completeableBy: [1, 2, 3, 4, 5],
          },
          {
            id: 7,
            description: "give the dog a bath",
            eta: 14500,
            completeableBy: [0, 1, 3, 4],
          },
          {
            id: 9,
            description: "wash the car",
            eta: 20000,
            completeableBy: [0, 4, 5],
          },
        ],
  };
}
