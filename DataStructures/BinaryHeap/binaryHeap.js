class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let elementIdx = this.values.length - 1;
    const elementValue = this.values[elementIdx];
    while (elementIdx > 0) {
      const parentIdx = Math.floor((elementIdx - 1) / 2);
      const parentValue = this.values[parentIdx];
      if (elementValue < parentValue) break;
      this.values[parentIdx] = elementValue;
      this.values[elementIdx] = parentValue;
      elementIdx = parentIdx;
    }
  }

  extractMax() {
    if (!this.values.length) return;

    this.swap(0, this.values.length - 1);
    const oldNode = this.values.pop();

    //trikle down
    let parentIdx = 0,
      childLeftIdx = 1,
      childRightIdx = 2;
    //Math.max returns NaN is one of the arguments is undefined
    let max = Math.max(
      this.values[childLeftIdx],
      this.values[childRightIdx] || -Infinity
    );

    while (this.values[parentIdx] < max) {
      let childIdx =
        this.values[childLeftIdx] === max ? childLeftIdx : childRightIdx;
      this.swap(parentIdx, childIdx);
      parentIdx = childIdx;

      childLeftIdx = parentIdx * 2 + 1;
      childRightIdx = parentIdx * 2 + 2;
      max = Math.max(
        this.values[childLeftIdx],
        this.values[childRightIdx] || -Infinity
      );
    }
    return oldNode;
  }
  swap(inx1, inx2) {
    [this.values[inx1], this.values[inx2]] = [
      this.values[inx2],
      this.values[inx1],
    ];
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(100);
