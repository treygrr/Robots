// this is a function that searches an array of
// objects for a id and gets the next id
// then adds the new type to the array

export function getNextId(arr) {
  let nextId = 0;
  arr.forEach((type) => {
    if (type.id >= nextId) {
      nextId = type.id + 1;
    }
  });
  return nextId;
}
