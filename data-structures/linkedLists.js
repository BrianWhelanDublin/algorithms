/**
 * Listnode Class
 */

class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/**
 * Linked List Class
 */

class LinkedList {
	constructor(value) {
		this.head = new ListNode(value);
	}
	/**
	 *
	 * @returns The length of the list
	 */
	size() {
		let count = 0;
		let node = this.head;
		while (node) {
			count++;
			node = node.next;
		}
		return count;
	}
	/**
	 * Clears the list
	 */
	clear() {
		this.head = null;
	}
	/**
	 *
	 * @returns The last node in the list
	 */
	getLast() {
		let lastNode = this.head;
		if (lastNode) {
			while (lastNode.next) {
				lastNode = lastNode.next;
			}
		}

		return lastNode;
	}
	/**
	 *
	 * @returns The first node in the list.
	 */
	getFirst() {
		return this.head;
	}
	/**
	 *
	 * @param {*} value Value for list item
	 * @returns Adds a node to end of list
	 */

	append(value) {
		let newNode = new ListNode(value);
		let node = this.head;
		while (node.next !== null) {
			node = node.next;
		}
		node.next = newNode;

		return this;
	}

	/**
	 *
	 * @returns Adds a neew node to the start of the list
	 */

	prepend(value) {
		const newNode = new ListNode(value);
		newNode.next = this.head;
		this.head = newNode;

		return this;
	}

	/**
	 * @returns An array represntation of the list
	 */

	printList() {
		const arr = [];
		let node = this.head;

		while (node) {
			arr.push(node.val);
			node = node.next;
		}

		return arr;
	}
	/**
	 *
	 * @param {int} index
	 * @returns The node at a given index
	 */

	traverseToIndex(index) {
		const listSize = this.size();

		if (index > listSize - 1 || index < 0) return null;

		let count = 0;
		let node = this.head;

		while (count < index) {
			node = node.next;
			count++;
		}

		return node;
	}
	/**
	 *
	 * @param {*} index The index to insert the node
	 * @param {*} value  The value to insert
	 * @returns Adds a new node to the list at a given index
	 */

	insert(index, value) {
		const listSize = this.size();

		if (index >= listSize) {
			return this.append(value);
		}
		if (index === 0) {
			return this.prepend(value);
		}

		const newNode = new ListNode(value);

		const prev = this.traverseToIndex(index - 1);
		const next = prev.next;
		prev.next = newNode;
		newNode.next = next;

		return this;
	}

	/**
	 *
	 * @param {*} index The index of the node to delete
	 * @returns Deletes a node at a given index
	 */

	remove(index) {
		const listSize = this.size();

		if (index >= listSize || index < 0) return this;

		if (index === 0) {
			this.head = this.next;
		}

		const prev = this.traverseToIndex(index - 1);
		const nodeToDelete = prev.next;
		prev.next = nodeToDelete.next;

		return this;
	}
}

const list = new LinkedList(1);
