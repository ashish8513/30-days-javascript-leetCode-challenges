// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (size <= 0 || arr.length === 0) {
      return [];
    }
  
    var chunkedArr = [];
    var i = 0;
  
    while (i < arr.length) {
      chunkedArr.push(arr.slice(i, i + size));
      i += size;
    }
  
    return chunkedArr;
  };
  