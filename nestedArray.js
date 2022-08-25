/**
 * 
  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 * 
 * @param {Array<Number>} array 
 * @returns {Number} sum of the numbers in the arrays
 * 
 */

const nestedAdd = (array) => {
	let sum = 0;

	for (let i = 0; i < array.length; i++) {
		const current = array[i];
		if (Array.isArray(current)) {
			sum += nestedAdd(current);
		} else {
			sum += current;
		}
	}

	return sum;
};
