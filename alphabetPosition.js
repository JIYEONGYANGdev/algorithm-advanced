/*
Write a function: you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc.

The string should not exceed 1000 characters including spaces.
*/

function alphabetPosition(str) {
  const alphabets = [false, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // 완전탐색으로 인덱스로 전환 
  // 알파벳이 아닌 경우 continue(무시)

  const letters = str.toLowerCase().split('');

  let result = '';

  for (let letter of letters) {
    if (typeof letter !== 'string') continue;
    else if (alphabets.indexOf(letter) !== -1) {
      result = result + ' ' + alphabets.indexOf(letter);
      console.log(alphabets.indexOf(letter));
    }
  }

  return result;
  
  // let result = str.forEach((el) => {
  //   alphabets.indexOf(el)
  // });
}

// Examples:
console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

console.log(alphabetPosition("2gZUxrFps")); // "7 26 21 24 18 6 16 19"