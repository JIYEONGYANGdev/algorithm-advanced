/*
  Using the JavaScript language, have the function `ABCheck(str)` take the str parameter being passed and return the true if the characters a and b are separated by exactly 3 places anywhere in the string at least once Otherwise return the false.
For example, `lane Borrowed` would result in true because there is exactly three characters between `a` and `B`
You should consider about space and capital character.

Please Note: you have to take care of `undefined` input case

- It is not case sensitive.
- 'a' and 'b' may appear repeatedly.
*/

/* 참고; 사용X
  find, findIndex, indexOf로 인덱스 차이 계산?
  Array.prototype.lastIndexOf() // 마지막 인덱스 찾기
*/

// 완전탐색을 할 수 밖에 없음, for loop
function ABCheck(str) {
  // 1. 'a'가 나오면 인덱스를 저장해두고, 
  // 2-1. 'b'가 나오면 인덱스 차이(거리) 계산
  // 2-2. 'a'가 나온다, 그럼 a 인덱스를 갈아치워

  let arr = str.toLowerCase().split('');

  let indexOfA;
  let indexOfB;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') {
      indexOfA = i;
      console.log(indexOfA);
    }
    if (arr[i] === 'b') {
      indexOfB = i;
      console.log(indexOfB);
      if (indexOfA) {
        let distance = Math.abs(indexOfB - indexOfA);
        if (distance -1 === 3) return true;
        continue;
      }
    }
    continue;
  }
  return false;

};

// # I/O example
const input1 = 'aMAJ7sBrO4CyysuomxHHFrgGTXXP 5DT8Jr';
console.log(ABCheck(input1)); // true

const input2 = 'lane borrowed';
console.log(ABCheck(input2)); // true

const input3 = 'c';
console.log(ABCheck(input3)); // false
