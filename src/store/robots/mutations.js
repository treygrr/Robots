import { getNextId } from "../../mixins/storeHelpers";

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

export function ADD_TYPE(state, robotTypes) {
  const nextId = getNextId(state.robotTypes);
  const newType = {
    id: nextId,
    type: robotTypes.type,
    name: robotTypes.name,
  };
  state.robotTypes.push(newType);
}
