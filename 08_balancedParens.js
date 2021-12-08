/*
write a function that takes a string of text and returns true if the parentheses are balanced and false otherwise.

Example:
balancedParens('('); // false
balancedParens('()'); // true
balancedParens(')('); // false
balancedParens('(())'); // true

Step 2:
make your solution work for all types of brackets

Example:
balancedParens('{}'); // true
balancedParens('[({})](https://urclass.codestates.com/codeproblem/9eeb96e1-6c57-4347-a06f-78c295af595f)'); // true

balancedParens('[(](https://urclass.codestates.com/codeproblem/9eeb96e1-6c57-4347-a06f-78c295af595f){)}'); // false
Step 3:
ignore non-bracket characters
balancedParens(' var wow = { yo: thisIsAwesome() }'); // true
balancedParens(' var hubble = function() { telescopes.awesome();'); // false
*/

function balancedParens(str) {
  const bracketSet = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  let arr = str.split('');

  let bracketsArr = Object.keys(bracketSet);

  let tempArr = [];
  // 완전탐색
  for (let i = 0; i < arr.length; i++) {
    if (bracketsArr.includes(arr[i])) {
      tempArr.push(arr[i])
    }
    if (arr[i] === bracketSet[tempArr[tempArr.length - 1]]) {
      tempArr.pop();
    }
  }
  return Boolean(tempArr.length === 0)
}

console.log(balancedParens(' var wow = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

console.log(balancedParens('(')); // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')(')); // false
console.log(balancedParens('(())')); // true

/*
function balancedParens(str) {
  const bracketSet = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  // 반으로 쪼개어 데칼코마니 형태로 비교? index: 길이/2 - 1 기준 +1과 같아야, 길이/2 -2 는 + 2와 같아야, 길이/2 -3 은 +3과 같아야

  // 1. 배열로 만듦
  let arr = str.split('');

  // 2. 절반 지점까지 완전탐색?
  let mid = arr.length / 2

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== '(' && '{' && '[' && ')' && '}' && ']') {
      continue;
    }
    else {
    
      if (arr[i] === '(') {
        if (arr[mid - i] === ')') {
          continue;
        }
        else return false;
      }

      if (arr[i] === '{') {
        if (arr[mid - i] === '}') {
          continue;
        }
        else return false;
      }
    }

    if (arr[i] === '[') {
      if (arr[mid - i] === ']') {
        continue;
      }
      else return false;
    }

  }

  return true;

};
*/