/*
Write a function that, given two objects, returns whether or not the two are deeply equivalent--meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

don't worry about handling cyclical object structures.

*/
function deepEquals(a, b) {
  // // dfs?
  // 해당 함수 자체 재귀로 해결 가능

  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object') {
    // 둘 중에 하나가 객체가 아니라면 같을 일이 없음,
    return false;
  }

  let sthKeys = Object.keys(a);
    
  for (let key of sthKeys) {
    if (!deepEquals(a[key], b[key])) {
      return false
    }
  }

  return true;

};

console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false