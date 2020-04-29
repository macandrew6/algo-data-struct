function breadthFirstArray(root) {
  // breadth first search uses a queue
  // save visited node values in an array
  let visited = [];
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    visited.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return visited;
}

module.exports = {
  breadthFirstArray
};
