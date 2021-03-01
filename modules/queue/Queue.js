class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    // Return the next item in the queue.
    if (!this.first) {
      return null;
    }
    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    let currentNode = this.first;
    let allPets = [];
    if (currentNode === null) {
      return;
    }
    while (currentNode !== null) {
      allPets.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return allPets;
    // Return all items in the queue.
  }
}

module.exports = Queue;
