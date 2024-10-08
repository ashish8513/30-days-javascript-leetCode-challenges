 //!!!!!!!!! Write a function argumentsLength that returns the count of arguments passed to it.
// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */


// program
var argumentsLength = function(...args) {
    return args.length
};
