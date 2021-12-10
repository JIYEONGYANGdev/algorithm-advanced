/*
write a function to find the missing number: Given a randomly constructed array with one of the integers 1 through N+1 missing.

**Examples**: given array such that: [6, 5, 4, 3, 2] the function should return 1, as it is the missing element.

**Constraints**:
N is an integer, ranges from 1..100000.
There are no duplicate elements within the array.
If no digit is missing, return the `last digit + 1`.
Returns 1 if it is an empty array.

*/

function test4(arr) {
  if (!arr.length) return 1;
  // 완전 탐색
  // let max = Math.max(...arr)
  // let min = Math.min(...arr)

  arr.sort();

  if (arr[0] === 1 && arr[arr.length - 1] === arr.length) return arr.length + 1;

  // let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      // result.push(i+1)
      return i + 1;
    }
  }
  // return result;
}

console.log(test4([]));
console.log(test4([6, 4, 3, 2, 1])); // 5
console.log(test4([6, 5, 4, 3, 2])); // 1
console.log(test4([5, 4, 3, 2, 1])); // 6