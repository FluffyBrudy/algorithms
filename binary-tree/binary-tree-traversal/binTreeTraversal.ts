export type TNode<T> = {
  data: T;
  left: TNode<T> | null;
  right: TNode<T> | null;
};

function preOrder<T>(node: TNode<T> | null) {
  if (!node) return [];
  return [node.data].concat(preOrder(node.left)).concat(preOrder(node.right));
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder<T>(node: TNode<T> | null) {
  if (!node) return [];
  return inOrder(node.left).concat([node.data]).concat(inOrder(node.right));
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder<T>(node: TNode<T> | null) {
  if (!node) return [];
  return postOrder(node.left).concat(postOrder(node.right)).concat([node.data]);
}
