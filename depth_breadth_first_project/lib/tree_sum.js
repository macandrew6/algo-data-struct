function treeSum(root) {
  if (!root) {
    return 0;
  }

  let sum = 0;
  let queue = [root];

  while (queue.length) {
    // remove a node off the front of the queue when visited
    let node = queue.shift();

    // build our array one node value at a time
    sum += node.val;

    // visit lets node
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return sum;
}

// elegant recursive approach

module.exports = {
  treeSum
};
