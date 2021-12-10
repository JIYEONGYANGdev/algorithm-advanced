/*
Implement a function that given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it. You should return `null` on invalid input.

**Constraints**: When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
1 <= romanNumeral <= 10,000

*/

function test1(romanNumeral) {
  // your code here
  const romanNums = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000
  }

  // 작은 단위의 로마숫자가 앞에 올 경우 - (minus)
  // 작은 단위의 로마숫자가 뒤에 올 경우 + (plus)

  // 한 자리 인 경우 ?
  if (romanNumeral.length === 1) return romanNums[romanNumeral];

  // IV, VI < X
  // XVI로 조합 < L
  // 문제에선 최대 2자리만 나온다는 뜻 같음이 아니라
  // 큰 단위 숫자 앞에 작은 단위는 한 번만 나옴

  // 완전 탐색 (두 자리 이상)
  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    if (romanNums[romanNumeral[i]] < romanNums[romanNumeral[i+1]]) {
      result += romanNums[romanNumeral[i+1]] - romanNums[romanNumeral[i]]
    }
    else if (romanNums[romanNumeral[i]] > romanNums[romanNumeral[i + 1]]) {
      result += romanNums[romanNumeral[i+1]] + romanNums[romanNumeral[i]]
    }
  }
  return result;

}

// **Examples**:
console.log(test1("IV")) // 4 ; Because I(1) is smaller than V(5), it is 5 - 1, not 5 + 1.
console.log(test1("LX")) // 60 ;

console.log(test1('XIV')) //.to.equal(14);
console.log(test1('MCM')) //.to.equal(1900);

console.log(test1('MCMLIV')) //.to.equal(1954);
console.log(test1('MCMXC')) //.to.equal(1990);
console.log(test1('MMVIII')) //.to.equal(2008);
console.log(test1('MDCCCCX')) //.to.equal(1910);
console.log(test1('MCMX')) //.to.equal(1910);
