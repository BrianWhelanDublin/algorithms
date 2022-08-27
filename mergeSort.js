/**
 * 
 *Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

 */

/**
 * Merge
 *
 * @param {Array} left
 * @param {Array} right
 *
 * Merge the arrays by asscending order
 */
const merge = (left, right) => {
	const result = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	return result.concat(left, right);
};

/**
 * MergeSort
 *
 * @param {Array} nums
 * @returns
 *
 * Sort the array
 */

const mergeSort = (nums) => {
	//
	if (nums.length < 2) {
		return nums;
	}

	const length = nums.length;
	const middle = Math.floor(length / 2);
	const left = nums.slice(0, middle);
	const right = nums.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
};
