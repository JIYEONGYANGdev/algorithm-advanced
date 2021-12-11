/* 
Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm.
This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence.

Examples:
1. "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
2. "EDNSOEQTWVOQQVDVRC" would return 1E1D1N1S1O1E1Q1T1W1V1O2Q1V1D1V1R1C.

Write an efficient algorithm for the following assumptions:

- str.length is an integer within the range [1.. 100,000](https://urclass.codestates.com/codeproblem/3e4a38cf-d1e5-4e86-9ac7-7258fd21b72f)
*/

function runLength(str) {
  // 완전탐색
  // 객체 key-value 세트로?

  // ! 연속적인 경우만 누적 카운팅
  // 아래 풀이의 경우 떨어져있는 동일한 알파벳도 연속적으로 카운팅됨

  // let alphabetCounts = {}
  // for (let i = 0; i < str.length; i++) {
  //   if (alphabetCounts[str[i]]) alphabetCounts[str[i]]++;
  //   else alphabetCounts[str[i]] = 1;
  //   }
  
  // return Object.keys(alphabetCounts).reduce((acc, currKey) => acc + String(alphabetCounts[currKey]) + currKey, '')

  let arr = str.split('');
  
  let alphabets = [];
  let counts = [];

  let exist = 0; // 카운팅되는 알파벳만 인덱스가 존재 (즉 알파벳 종류 개수만큼 === 길이(인덱스+1))
  for (let i = 0; i < arr.length; i++) {
    if (alphabets[alphabets.length - 1] !== arr[i]) {
      alphabets[exist] = arr[i];
      counts[exist] = 1;
      exist++;
    } else {
      counts[exist - 1]++;
    }
  }

  let result = '';
  for (let i = 0; i < alphabets.length; i++) {
    result += String(counts[i]) + alphabets[i]
  }
  return result;
  
}

console.log(runLength('wwwggopp')); // 3w2g1o2p
console.log(runLength('EDNSOEQTWVOQQVDVRC')); // 1E1D1N1S1O1E1Q1T1W1V1O2Q1V1D1V1R1C