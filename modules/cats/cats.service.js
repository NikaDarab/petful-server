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
    return pets.cats.all();
  },

  dequeue(type) {
    // Remove a pet from the queue.
    let cats = pets.cats.dequeue();
    if (!pets.cats.first) {
      store.cats.forEach((cat) => pets.cats.enqueue(cat));
    }
    return cats;
  },
};
