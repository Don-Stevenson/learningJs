// map within a function
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const map = arr => {
  arr.map(element => element * 3);
};

console.log(map(array));

// map outside of a function
const mappedArr = array.map(element => element * 3);

console.log(mappedArr);
