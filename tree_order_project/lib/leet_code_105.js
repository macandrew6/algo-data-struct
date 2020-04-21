// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require("./tree_node.js");

function buildTree(preorder, inorder) {
  // preorder = [self, left, right]
  // inorder = [left, self, right]
  // if the tree is empty return null
  if (!preorder.length && !inorder.length) return null;

  // find the rootVal from preorder
  let rootVal = preorder[0];
  // create our root tree node
  let root = new TreeNode(rootVal);
  let midIdx = inorder.indexOf(rootVal);

  let leftInorder = inorder.slice(0, midIdx);
  let rightInorder = inorder.slice(midIdx + 1);
  console.log(rightInorder);

  let leftPreorder = preorder.filter(val => leftInorder.includes(val));
  let rightPreorder = preorder.filter(val => rightInorder.includes(val));

  let leftTree = buildTree(leftPreorder, leftInorder);
  let rightTree = buildTree(rightPreorder, rightInorder);

  root.left = leftTree;
  root.right = rightTree;

  return root;
}

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];

/*
first stack
midIdx = 1;
leftInorder = [9]
rightInorder = [15, 20, 7]

leftPreorder = [9]
rightPreorder = [20, 15, 7]

  left substack buildTree([9], [9])
  leftInorder = []
  rightInorder = []

  leftPreorder = []
  rightPreorder = []

  => returns null

  right substack buildTree([20, 15, 7], [15, 20, 7])
  leftInorder = [15]
  rightInorder = [7]

  leftPreorder = [15]
  rightPreorder = [7]

  => returns ?
    left substack buildTree([15], [15])
*/

console.log(buildTree(preorder, inorder));
