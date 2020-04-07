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
  }

  insert(val, root = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
      } else {
        this.insert(val, root.right);
      }
    }
  }

  searchRecur(value, root = this.root) {
    if (!root) return false;

    if (value < root.val) {
      return this.searchRecur(value, root.left);
    } else if (value > root.val) {
      return this.searchRecur(value, root.right);
    } else {
      return true;
    }
  }

  searchIter(value) {
    let currNode = this.root;
    while (currNode !== null) {
      if (value < currNode.val) {
        currNode = currNode.left;
      } else if (value > currNode.val) {
        currNode = currNode.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

module.exports = {
  TreeNode,
  BST
};
