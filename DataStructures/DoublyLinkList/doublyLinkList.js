class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let currentNode;
    if (idx <= this.length / 2) {
      currentNode = this.head;
      while (counter !== idx) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      currentNode = this.tail;
      counter = this.length - 1;
      while (counter !== idx) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }

  set(val, idx) {
    let foundNode = this.get(idx);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(val, idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let foundPrevNode = this.get(idx - 1);
    newNode.prev = foundPrevNode;
    newNode.next = foundPrevNode.next;
    foundPrevNode.next.prev = newNode;
    foundPrevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let removedNode = this.get(idx);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    this.length--;
    removedNode.next = null;
    removedNode.prev = null;
    return removedNode;
  }

  reverse() {
    if (this.length === 1) return this;
    [this.head, this.tail] = [this.tail, this.head];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      [currentNode.next, currentNode.prev] = [
        currentNode.prev,
        currentNode.next,
      ];
      currentNode = currentNode.next;
    }
    return this;
  }
}

let list = new DoublyLinkedList();
list.push(12);
list.push(13);
list.push(14);
list.push(15);
