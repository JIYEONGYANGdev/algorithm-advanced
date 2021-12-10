/*
Take a two-dimensional array(i.e., an array containing many arrays of equal length) and return all the values in the array.

Constraints:
The spiral turns clockwise (start left -> right).
All elements of an array contain only numbers.
Empty arrays are not entered.
Based on the entire two-dimensional array, there are no identical elements(the same number).
*/

function test3(matrix) {
  // 완전 탐색
  let result = [];
  // 나선형으로 돌아야 함 -> 규칙
  let rowLen = matrix.length;
  let colLen = matrix[0].length;

  // if (row < rowLen) col++
  // if (row < rowLen && col === colLen - 1) row++
  // if (row === rowLen - 1) col--
  // if (row === rowLen - 1 && col === 0) row--
  
  // 포인터를 잡고 순회
  let top = 0,
      bottom = rowLen - 1,
      left = 0,
      right = colLen - 1;
    
  // 순회
  let DIR = 0; // direction, sprial ==> 4가지 방향 있음

  while (top <= bottom && left <= right) {
    if (DIR === 0) { // left-> right (row 고정 = top)
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i])
      }
      top += 1; // 다 돌았으면 아래 열로 내려감
    }
    else if (DIR === 1) { // 열 움직임 top-> bottom
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right])
      }
      right -= 1;
    }
    else if (DIR === 2) { // 제일 아래 열(bottom) 까지 내려온 상태 right-> left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom -= 1;
    }
    else if (DIR === 3) { // left끝가지 왔음, bottom -> top
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left += 1; // 다시 left->right
    }
    DIR = (DIR + 1) % 4; // 한바퀴 돌면 방향 리셋, 4가지 방향이니까
    // 마지막에 DIR = 3 인 상태에서 +1 => 4 % 4 === 0 : 리셋

  }

  return result;

}

// example:
const spiralTraversal = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
console.log(test3(spiralTraversal)) // [1, 2, 3, 6, 9, 8, 7, 4, 5]

const squareMatrix = [
  [ 1, 2, 3, 4, 5],
  [ 6, 7, 8, 9, 10],
  [ 11, 12, 13, 14, 15],
  [ 16, 17, 18, 19, 20],
  [ 21, 22, 23, 24, 25]
];
console.log(test3(squareMatrix)) // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
