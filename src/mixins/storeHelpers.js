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

export function getRandomTasks(array, count) {
  // this gets a random sample of items from an array
  const howMany = count? count : 5;
  // default to 5 if count is not specified
  let items = [];
  let randomItems = [];
  while (items.length < howMany) {
    let randomIndex = Math.floor(Math.random() * array.length);
    if (items.indexOf(randomIndex) === -1) {
      // checks to see if the random index has already been added to the items array
      items.push(randomIndex);
      randomItems.push(array[randomIndex]);
    }
  }
  return randomItems;
}