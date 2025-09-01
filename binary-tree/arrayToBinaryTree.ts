class TreeNode<T=any> {
	public value: T;
	public left: TreeNode<T> | null;
	public right: TreeNode<T> | null

	constructor(value: T) {
		this.value = value
		this.left = null
		this.right = null
	}
}

export function arrayToTree<T=any>(array: Array<T>, i=0) {
	if (i >= array.length) return null;
	const root = new TreeNode(array[i]);
	root.left = arrayToTree(array, 2 * i + 1);
	root.right = arrayToTree(array, 2 * i + 2);
	return root;
}


const isMainModule = (import.meta as unknown as {main: boolean}).main
if (isMainModule) {
	console.log(arrayToTree([1, 2, 3, 4, 5, 6, 7]))
}