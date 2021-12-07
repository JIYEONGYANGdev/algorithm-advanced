/*
- A reversed Array should be returned.
- `[arr[n-1], arr[n-2], ... , arr[0]]`
- `arr.length` is n.

# Constraints
- The function `reverseArr` should be written in the form of a recursive function.
- The use of repeat statements (`for`, `while`) is prohibited.
- The input array must retain its initial state after the function call (immutability).
- An empty array must return as it is.
*/

function reverseArr(arr) {
  if (!arr.length) return []; 

  let tempArr = arr.slice();
  let tail = tempArr.pop();

  // return [tail].concat(reverseArr(tempArr));
  return [tail, ...reverseArr(tempArr)];
}

// # I/O Example
console.log(reverseArr([1, 2, 3])); // [3,2,1]
console.log(reverseArr([-1, -2, 1, 2, 3, 4])); // [4,3,2,1,-2,-1]

// [3, reverseArr([1,2])] 
// [3, ...[2, ...reverseArr([1])]] // [3, 2, reverseArr([1])] 

// [3, ...[2, ...[1, ...reverseArr([])]] // [3, 2, 1, reverseArr([])] 

