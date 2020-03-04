// map within a function
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tryMap = arr => {
  return arr.map(element => element * 3);
};

// console.log(tryMap(array));

// map outside of a function
const mappedArr = array.map(element => element * 3);

// console.log(mappedArr);

// map to reformat objects in an array

let objArr = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
  { key: 4, value: 40 }
];

let reformattedArr = objArr.map(obj => { let reformattedObj = {}
    reformattedObj[obj.key] = obj.value
    return reformattedObj
})

console.log("reformated array of objects ", reformattedArr)
console.log("original array of objects ", objArr)