// map within a function
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tryMap = arr => {
  return arr.map(element => element * 3);
};

console.log(tryMap(array));

// map outside of a function
const mappedArr = array.map(element => element * 3);

// console.log(mappedArr);
