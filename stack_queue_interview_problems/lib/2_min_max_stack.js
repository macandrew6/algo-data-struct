// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the
// constructor.
//
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).
//
//
// --------
// Example:
// --------
//
// const minMaxStack = new MinMaxStack();
//
// minMaxStack.push(10);
// minMaxStack.push(12);
// minMaxStack.push(8);
// minMaxStack.push(2);
// minMaxStack.push(20);
//
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 20
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 8
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 10
//
// minMaxStack.pop();
// console.log(minMaxStack.min());   => null
// console.log(minMaxStack.max());   => null
//
//
// -----------
// Let's code!
// -----------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// Refactor the regular Stack below into a MinMaxStack!
class MinMaxStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
    this.maxValueStorage = [];
    this.minValueStorage = [];
  }

  push(value) {
    const newNode = new Node(value);
    if (
      !this.maxValueStorage.length ||
      this.maxValueStorage[this.maxValueStorage.length - 1] <= newNode.value
    ) {
      this.maxValueStorage.push(newNode);
    }

    if (
      !this.minValueStorage.length ||
      this.minValueStorage[this.minValueStorage.length - 1] >= newNode.value
    ) {
      this.minValueStorage.push(newNode);
    }

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
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

    if (this.top.value === this.maxValueStorage[this.maxValueStorage - 1]) {
      this.maxValueStorage.pop();
    }

    if (this.top.value === this.minValueStorage[this.minValueStorage - 1]) {
      this.minValueStorage.pop();
    }

    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length -= 1;
    return temp.value;
  }

  size() {
    return this.length;
  }

  min() {
    return this.minValueStorage[this.minValueStorage - 1] || null;
  }

  max() {
    return this.maxValueStorage[this.maxValueStorage - 1] || null;
  }
}

// Forgetting something down here?
exports.Node = Node;
exports.MinMaxStack = MinMaxStack;
