// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require("./tree_node.js");

function buildTree(preorder, inorder) {
  // if the tree is empty return null
  if (!preorder.length && !inorder.length) return null;
}

console.log(buildTree([], []));
