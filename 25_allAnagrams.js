/*
Given a single input string, write a function that produces all possible anagrams
of a string and outputs them as an array. At first, don't worry about
repeated strings. What time complexity is your solution?

Extra credit: Deduplicate your return array without using uniq().
*/

function allAnagrams(string) {
  // 순열=> dfs
  let array = string.split('');

  let result = [];

  const makeAnagram = (restArr, acc) => {
    // 이 경우 모든 요소를 사용해 순열을 만드는 것이므로 바로 For loop가도 될 듯 
    // 다만 완성되면(요소 다 사용) 문자열로 최종 리턴 배열에 추가해야하니 탈출조건
    if (acc.length === string.length) {
      let oneAnagram = acc.join('')
      if(!result.includes(oneAnagram)) result.push(oneAnagram); // test case - uniq 미통과
      return;
    }

    for (let i = 0; i < restArr.length; i++) {
      let picked = restArr[i];
      // 순열이므로 한 번 뽑힌 요소는 제외하고 가야함
      let temp = [...restArr.slice(0, i), ...restArr.slice(i + 1)];
      makeAnagram(temp, acc.concat(picked))
    }
  }
  makeAnagram(array, [])
  return result;
}

// example usage:
console.log(allAnagrams('abc')); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(allAnagrams('apps')); // 24개가 나옴. 2개의 p가 다른 p로 구분됨. 12개가 나와야 함