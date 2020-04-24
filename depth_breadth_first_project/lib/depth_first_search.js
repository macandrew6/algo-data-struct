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
    console.log(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

module.exports = {
  depthFirstSearch
};

/*
DFS
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

// bst
a.left = b;
a.right = e;
b.left = c;
b.right = d;
e.right = f;
