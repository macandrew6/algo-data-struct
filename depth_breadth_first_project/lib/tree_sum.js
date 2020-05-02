// bfs approach
// function treeSum(root) {
//   if (!root) {
//     return 0;
//   }

//   let sum = 0;
//   let queue = [root];

//   while (queue.length) {
//     // remove a node off the front of the queue when visited
//     let node = queue.shift();

//     // build our array one node value at a time
//     sum += node.val;

//     // visit lets node
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }

//   return sum;
// }

// dfs approach
// function treeSum(root) {
//   if (!root) {
//     return 0;
//   }

//   const stack = [root];
//   let sum = 0;

//   while (stack.length) {
//     let node = stack.pop();
//     console.log(sum);

//     sum += node.val;

//     if (node.right) stack.push(node.right);
//     if (node.left) stack.push(node.left);
//   }

//   return sum;
// }

// elegant recursive approach
function treeSum(root) {
  if (!root) return 0;
  return treeSum(root.left) + root.val + treeSum(root.right);
}

module.exports = {
  treeSum,
};
