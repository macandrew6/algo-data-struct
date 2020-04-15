function inOrderArray(root) {
  if (!root) return [];
  return [...inOrderArray(root.left), root.val, ...inOrderArray(root.right)];
}

function postOrderArray(root) {
  if (!root) return [];
  // deconstructs the return value of postOrderArray
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
