/*
# Question
Use the recursive function to create a function that returns a decimal number to binary number

# Input
Parameter 1 : n
- `number` type

# Output
- Returns the value of the string type converted from decimal number N to binary number

# Constraints
- The function `convertToBinary` should be written in the form of a recursive function.
- The use of repeat statements (`for`, `while`) is prohibited.
- Do not use 'toString' method.
- `String` type must be returned.
*/

// 10진수를 2진수로,

// 2로 나누어 몫을 2로 계속 나눔
// 나머지 거꾸로 더함(문자열) => 2진수

//base case ? 
// 몫이 0인 경우 (재귀로 돌릴 거니까 n이 === 0일 때 )

function convertToBinary(n) {
  let binaryResult = '';
  const dfs = (n) => {
    if (n === 0) return;
    else {
      dfs(Number.parseInt(n / 2));
      binaryResult += (n % 2);
    }
  }
  dfs(n);
  return binaryResult;
};

// # I/O Example
let output = convertToBinary(31);
console.log(output); // --> "11111"

output = convertToBinary(19);
console.log(output); // --> "10011"

output = convertToBinary(84);
console.log(output); // --> "1010100"

/*
  5780 (10진수)
     10^0 === 1의 자리
    10^1 === 10의 자리
   10^2 === 100의 자리
  10^3 === 1000의 자리

  10(10진수) => 2진수로 
   / 2^0 === 1
  / 2^1
 / 2^2
/2^3

10/2 === 2 * 5 + 0
5/2 === 2 * 2 + 1
2/2 === 2 * 1 + 0
1/2 === 2 * 0 + 1

*/
