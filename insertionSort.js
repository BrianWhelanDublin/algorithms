/**
 * Insertion Sort function.
 *
 * @param {Array} nums Array of items to sort
 *
 * @return {Array} The sorted array
 */

const insertionSort = (nums) => {
	for (let i = 1; i < nums.length; i++) {
		let numberToInsert = nums[i]; // the numberToInsert number we're looking to insert
		let j; // the inner counter

		// loop from the right to the left
		for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
			// move numbers to the right until we find where to insert
			nums[j + 1] = nums[j];
		}

		// do the insertion
		nums[j + 1] = numberToInsert;

		console.log(nums);
	}
	return nums;
};

console.log(insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
