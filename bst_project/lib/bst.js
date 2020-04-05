class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.left = [];
    this.right = [];
  }
}

module.exports = {
  TreeNode,
  BST
};
