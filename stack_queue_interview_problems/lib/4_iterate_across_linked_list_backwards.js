// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished,
// return a string representing the original linked list's values backwards
// in the following format:
//
//                             'A -> B -> C -> D'
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
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

  push(value) {
    const newNode = new Node(value);
    if (!this.bottom) {
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
}

function iterateAcrossLinkedListBackwards(linkedList) {
  const stack = new Stack();
  let current = linkedList.head;
  let result = "";

  while (current !== null) {
    stack.push(current);
    current = current.next;
  }

  while (stack.size() > 0) {
    if (stack.size() > 1) {
      result += `${stack.pop().value} -> `;
    } else {
      result += `${stack.pop().value}`;
    }
  }

  return result;
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
