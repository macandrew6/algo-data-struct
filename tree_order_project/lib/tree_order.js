function inOrderArray(root) {
  if (!root) return [];
  // deconstructs the return value of inOrderArray(root) =>
  // which is an array
  return [...inOrderArray(root.left), root.val, ...inOrderArray(root.right)];
}

function postOrderArray(root) {
  if (!root) return [];
  // deconstructs the return value of postOrderArray(root) =>
  // which is an array
  return [
    ...postOrderArray(root.left),
    ...postOrderArray(root.right),
    root.val
  ];
}

module.exports = {
  inOrderArray,
  postOrderArray
};
