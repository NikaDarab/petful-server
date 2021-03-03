const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    return pets.dogs.all();
  },

  dequeue(type) {
    // Remove a pet from the queue.
    let dogs = pets.dogs.dequeue();
    if (!pets.dogs.first) {
      store.dogs.forEach((dog) => pets.dogs.enqueue(dog));
    }
    return dogs;
  },
};
