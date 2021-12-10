/*
Implement a function that, given a string, Finds the longest run of identical characters and returns an array containing the start and end indices of that run.
If there are two runs of equal length, return the first one.

**Constraints**: Try your function with long, random strings to make sure it handles large inputs well.
1 <= string <= 10,000
*/

// test case all PASSED
function test2(str) {
  // matrix?
  const matrix = Array(str.length).fill(0).map(() => Array(str.length).fill(0));

  // 빈 문자열
  if (str.length === 0) return [0, 0];

  // 자기 제자리는 길이 1
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i === j) {
        matrix[i][j] = 1;
      }
    }
  }

  // 문자열의 인덱스 i 자리부터 j 까지의 길이를 매트릭스 값으로?
  for (let i = 0; i < str.length; i++) {
    let longest = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        // longest = 2;
        // matrix[i][j] = longest;
        if (matrix[i][j - 1] === longest) {
          longest++;
          matrix[i][j] = longest;
        }
        console.log(matrix);
        
      }
    }
  }
  let maxlong = Number.MIN_SAFE_INTEGER;
  let lengthArr = matrix.map((row, index) => {
    if (Math.max(...row) > maxlong) {
      maxlong = Math.max(...row)
      // console.log(Math.max(...row))
      return [index, index + maxlong - 1]
    }
    return [index, index]
  });

  // console.log(lengthArr)
  
  let max = Number.MIN_SAFE_INTEGER;
  let resultIndex;
  for (let i = 0; i < lengthArr.length; i++) {
    let distance = lengthArr[i][1] - lengthArr[i][0];
    if (distance > max) {
      max = distance;
      resultIndex = lengthArr[i]
    }
  }
    return resultIndex;
}

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
function randomString(len) {
  let text = '';
  let possible = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

// **Examples**:

console.log(test2(""))       // [0, 0]
console.log(test2("abcd"))   // [0, 0]
console.log(test2("aabbc"))  // [0, 1]
console.log(test2("abbbcc")) // [1, 3]
