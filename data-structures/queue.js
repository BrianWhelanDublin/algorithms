/**
 * Queue with linked lists
 */

class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedListQueue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	peek() {
		return this.first;
	}

	enqueue(value) {
		const newNode = new ListNode(value);

		if (this.size() === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		return this;
	}

	dequeue() {
		if (!this.first) return null;
		if (this.first === this.last) this.last = null;

		const node = this.first;
		this.first = this.first.next;

		return node.val;
	}

	/**
	 *
	 * @returns The length of the queue
	 */

	size() {
		let node = this.first;
		let count = 0;
		while (node) {
			count++;
			node = node.next;
		}

		return count;
	}

	/**
	 *
	 * @returns The queue as an array.
	 */

	printQueue() {
		const arr = [];
		let node = this.first;
		while (node) {
			arr.push(node.val);
			node = node.next;
		}
		return arr;
	}
}

const queueLL = new LinkedListQueue();
