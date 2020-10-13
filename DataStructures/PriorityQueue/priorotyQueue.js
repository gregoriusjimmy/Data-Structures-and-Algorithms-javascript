class Node {
  constructor(value, priority) {
    this.val = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let elementIdx = this.values.length - 1;
    const element = this.values[elementIdx];
    while (elementIdx > 0) {
      const parentIdx = Math.floor((elementIdx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[elementIdx] = parent;
      elementIdx = parentIdx;
    }
  }

  dequeue() {
    if (!this.values.length) return;
    this.swap(0, this.values.length - 1);
    const oldNode = this.values.pop();
    this.bubbleDown();
    return oldNode;
  }
  bubbleDown() {
    //trikle down
    let parentIdx = 0,
      childLeftIdx = 1,
      childRightIdx = 2;
    //Math.max returns NaN is one of the arguments is undefined
    let min = Math.min(
      this.values[childLeftIdx]?.priority,
      this.values[childRightIdx]?.priority || Infinity
    );

    while (this.values[parentIdx]?.priority > min) {
      let childIdx =
        this.values[childLeftIdx]?.priority === min
          ? childLeftIdx
          : childRightIdx;
      this.swap(parentIdx, childIdx);
      parentIdx = childIdx;
      childLeftIdx = parentIdx * 2 + 1;
      childRightIdx = parentIdx * 2 + 2;
      min = Math.min(
        this.values[childLeftIdx]?.priority,
        this.values[childRightIdx]?.priority || Infinity
      );
    }
  }

  swap(inx1, inx2) {
    [this.values[inx1], this.values[inx2]] = [
      this.values[inx2],
      this.values[inx1],
    ];
  }
}

let ER = new PriorityQueue();
ER.enqueue('Commond cold', 5);
ER.enqueue('gunshot Wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
// heap.insert(55);
// heap.insert(100);
