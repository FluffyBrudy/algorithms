/*
You are given a binary tree. Implement a function that returns the maximum sum of a route from root to leaf.

For example, given the following tree:

    17
   /  \
  3   -10
 /    /  \
2    16   1
         /
        13

The function should return 23, since 17 -> -10 -> 16 is the route from root to leaf with the maximum sum.

Return 0 if the tree is empty.

Please note that you are not to find the best possible route in the tree, but the best possible route from root to leaf, e.g. for the following tree, you cannot skip the leaves and return 5 + 10 = 15: the expected answer is 5 + 4 + -60 = -51

        5
      /   \
    4      10
   / \     /
-80 -60 -90

A tree node type is preloaded for you:

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
*/

export type TNode<T = number> = {
  value: T;
  left: TNode<T> | null;
  right: TNode<T> | null;
};

export type ParamNode = TNode<number> | null;

function maxSum(root: ParamNode) {
  const icb = (root: ParamNode) => {
    if (!root) return -Infinity;
    if (!root.left && !root.right) return root.value;
    const leftSum = icb(root.left);
    const rightSum = icb(root.right);
    return root.value + Math.max(leftSum, rightSum);
  };
  const res = icb(root);
  return res === -Infinity ? 0 : res;
}
