/*
Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one.
Return null if there are no even-occurrence items.
*/

function evenOccurrence(arr) {
  let count;
  for (let i = 0; i < arr.length - 1; i++) {
    count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    // console.log(i, ':', count);
    if (count % 2 === 0) return arr[i];
    else { i+= (Math.floor(count/2)) }
    // if (count === arr.length - 1) break;
  }
  return null;
}

//example usage:
const onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4

console.log(evenOccurrence([1,4,4])) // 4
console.log(evenOccurrence([1,4,4,4])) // null
console.log(evenOccurrence([1,4,4,4,6,6]))// 6

console.log(evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5])) // 2
console.log(evenOccurrence(['cat', 'dog', 'dig', 'cat'])) // 'cat'
console.log(evenOccurrence(['meow', 2, 1, 'meow'])) // 'meow'
console.log(evenOccurrence(['doublerainbow', 'grumpycat', 'grumpycat', 'doublerainbow']))// 'doublerainbow'