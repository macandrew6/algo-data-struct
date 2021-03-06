function depthFirstSearch(root, targetVal) {
  // pseudo code depthFirstSearch
  // use a stack
  // push a node on to the stack at every leaf level
  // whenever popping a node from the stack consider it visited
  const stack = [root];

  // while theres something in the array keep going
  while (stack.length) {
    let node = stack.pop();
    // if node exists
    // console.log(node);
    if (node.val === targetVal) return node;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return null;
}

module.exports = {
  depthFirstSearch
};

/*
DFS
touches every leaf node first
        A
      /   \
    B       E
  /   \       \
C       D       F  
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");
let e = new TreeNode("e");
let f = new TreeNode("f");
let g = new TreeNode("g");

// bst
a.left = b;
a.right = e;
b.left = c;
b.right = d;
e.left = f;
e.right = g;

console.log(depthFirstSearch(a, "g"));
