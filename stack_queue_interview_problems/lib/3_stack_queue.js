// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push
//   - Pop
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(newStackNode) {
    if (!newStackNode) {
      return null;
    }
    if (!this.bottom) {
      this.top = newStackNode;
      this.bottom = newStackNode;
    } else {
      const temp = this.top;
      this.top = newStackNode;
      this.top.next = temp;
    }
    this.length += 1;
    return this.length;
  }

  pop() {
    const temp = this.top;
    if (!this.bottom) {
      return null;
    }
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length -= 1;
    return temp;
  }

  size() {
    return this.length;
  }
}

class StackQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.inStack.size === 0 && this.outStack.size === 0) {
      this.front = newNode;
      this.back = newNode;
    }
  }

  dequeue() {}

  size() {}
}

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
