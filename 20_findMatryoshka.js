/*
## **Input**
### **Parameter 1: matryoshka**
- Recursively defined objects that have properties `'matryoshka'`, `'size'` (input-output See an example).
- `matryoshka.matryoshka` is `null` or a `matryoshka` object
- `matryoshka.size` becomes smaller as it overlaps.

### **Parameter 2: size**
- `number` type

## **Output**
- You must return the `boolean` type.

## **Constraints**
- The function `findMatryoshka` is created in the form of a recursive function.
- The use of repeat statements (`for`, `while`) is prohibited.
- The object received must remain in the initial state after the function's call.
- If you receive an empty object, you must return false
*/

function findMatryoshka(matryoshka, size) {
  //base case
  if (!matryoshka) return false; // null
  if (!Object.keys(matryoshka).length) return false;
  if (matryoshka.size === size) return true;
  //recursive
  //객체를 계속 까면서 주어진 size를 찾기
  return findMatryoshka(matryoshka.matryoshka, size);

};

// #I/O Example
const matryoshka = {
  size: 10,
  matryoshka: {
    size: 9,
    matryoshka: null,
  },
};

const matryoshka2 = {};

let output = findMatryoshka(matryoshka, 10);
console.log(output); // --> true

output = findMatryoshka(matryoshka, 8);
console.log(output); // --> false

output = findMatryoshka(matryoshka2, 6);
console.log(output); //