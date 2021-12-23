/*
Write a function that, given two objects, returns whether or not the two are deeply equivalent--meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

don't worry about handling cyclical object structures.

*/
function deepEquals(a, b) {
  // dfs? 재귀?
  // 참조형 타입은 주소가 다르므로 같지 않음,
  // 숫자/ 문자열 등 원시형 타입 경우에만 비교 가능
  // object일 경우 깊이 탐색

  const dfs = (sth1, sth2) => {
    // 종결하고 복귀하는 조건부터? : if
    // object아닌 경우 
    if (sth1 === sth2) return true;
    else if (typeof sth1 !== 'object' || typeof sth2 !== 'object') {
      // 둘 중에 하나가 객체가 아니라면 같을 일이 없음,
      return false;
    } else {
      // let sthKeys = Object.keys(sth1);
      for (let key in sth1) {
        dfs(sth1[key], sth2[key]); // 하나를 대조군으로 잡아서 같은 key에 대한 value 비교
      }
    }
  }

  dfs(a, b);
};

console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false