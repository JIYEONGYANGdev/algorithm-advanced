/*
# Constraints
- The function `ascendingArray` is written in the form of a recursive function.
- The use of repeat statements (`for`, `while`) is prohibited.
- The start parameter must always be less than or equal to the end parameter.
*/

//재귀로 오름차순 정렬 구현
function ascendingArray(num1, num2) {
  // base case
  if (num1 === num2) {
    return [num1];
  }
  // recursive
  return [num1, ...ascendingArray(num1 + 1, num2)]
};

// # **I/O Example**
let output = ascendingArray(1,7);
console.log(output); // --> [1, 2, 3, 4, 5, 6, 7]

output = ascendingArray(6,12);
console.log(output); // --> [6, 7, 8, 9, 10, 11, 12]

output = ascendingArray(24,31);
console.log(output); // --> [24, 25, 26, 27, 28, 29, 30, 31]

output = ascendingArray(106,114);
console.log(output); // --> [106, 107, 108, 109, 110, 111, 112, 113, 114]