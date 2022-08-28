/**
 * Stack with linked lists
 */

class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedListStack {
	constructor() {
		this.top = null;
		this.bottom = null;
	}

	/**
	 *
	 * @returns The length of the stack
	 */

	size() {
		let node = this.top;
		let count = 0;
		while (node) {
			count++;
			node = node.next;
		}

		return count;
	}

	/**
	 *
	 * @returns The last element of the stack
	 */

	peek() {
		return this.top;
	}

	/**
	 *
	 * @param {*} value Value to add to node
	 * @returns Adds an item to the stack
	 */
	push(value) {
		const newNode = new ListNode(value);
		if (this.size() === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const node = this.top;
			this.top = newNode;
			this.top.next = node;
		}

		return this;
	}

	/**
	 *
	 * @returns Removes an item from the  stack
	 */
	pop() {
		if (!this.top) return null;

		if (this.top === this.bottom) this.bottom = null;

		const node = this.top;
		this.top = this.top.next;

		return node.val;
	}

	/**
	 *
	 * @returns The stack as an array.
	 */

	printStack() {
		const arr = [];
		let node = this.top;
		while (node) {
			arr.push(node.val);
			node = node.next;
		}
		return arr;
	}
}

const stackLL = new LinkedListStack();

/**
 * Linked list with an Array
 */

class ArrayStack {
	constructor() {
		this.array = [];
	}

	/**
	 *
	 * @returns The last item of the stack
	 */

	peek() {
		return this.array[this.array.length - 1];
	}

	/**
	 * Pushes item to end of array
	 */

	push() {
		this.array.push(value);
		return this;
	}

	/**
	 * Pops last item from array
	 */

	pop() {
		this.array.pop();
		return this;
	}
}

const stackArr = new ArrayStack();
