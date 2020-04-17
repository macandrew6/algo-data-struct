// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require("./tree_node.js");

function buildTree(preorder, inorder) {
  // if the tree is empty return null
  if (!preorder.length && !inorder.length) return null;
  let rootVal = preorder[0];

  let root = new TreeNode(rootVal);
  let midIdx = inorder.indexOf(rootVal);
  let leftInorder = inorder.slice(0, midIdx);
  let rightInorder = inorder.slice(midIdx + 1);
}

console.log(buildTree([], []));
