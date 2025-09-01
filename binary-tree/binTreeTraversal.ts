import { arrayToTree } from "./arrayToBinaryTree.ts"

type TNode = ReturnType<typeof arrayToTree>

class BinTreeTraversal<T=any> {
	private binTree: TNode;
	constructor(array: Array<T>) {
		this.binTree = arrayToTree(array);
	}

	printOriginal() {
		console.log(this.binTree)
	}

	preOrder(node: TNode=this.binTree) {
		if (!node) return [];
		return [
			node.value, 
			...this.preOrder(node.left), 
			...this.preOrder(node.right)
		]
	}

	inOrder(node: TNode=this.binTree) {
		if (!node) return [];
		return [
			...this.inOrder(node.left),
			node.value,
			...this.inOrder(node.right)
		]
	}

	postOrder(node: TNode=this.binTree) {
		if (!node) return [];
		return [
			...this.postOrder(node.left),
			...this.postOrder(node.right),
			node.value,
		]
	}
}

const instance = new BinTreeTraversal([1, 2, 3, 4, 5]);
instance.printOriginal()
console.log(instance.preOrder())
// instance.preOrder()
