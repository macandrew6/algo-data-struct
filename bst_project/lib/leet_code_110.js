// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

const getHeight = root => {
  if (!root) return -1;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
};

function isBalanced(root) {
  // iterate through the tree and return true or false if the tree is balanced
}
