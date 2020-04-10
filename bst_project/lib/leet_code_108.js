// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function sortedArrayToBST(nums) {
  // we know nums is a sorted array
  // if there are no numbers in the array return null;
  if (nums.length === 0) {
    return null;
  }

  let midIdx = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[midIdx]);
}
