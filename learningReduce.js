// sums the contents in an array
// const array = [1, 2, 3];
// const reducedArray = (accumlator, currentvalue) => accumlator + currentvalue;

// console.log(array.reduce(reducedArray, 10));

// // sums the contents in an object
// const arrOfObj = [{ a: 1 }, { a: 2 }, { a: 3 }];
// //reducer requires an initial value to be used
// const intialVal = 10;

// console.log(
//   arrOfObj.reduce(
//     (accumlator, currentValue) => accumlator + currentValue.a,
//     intialVal
//   )
// );

//flattening arrays with reduce and trying recursion.  Recursion can't be used as below to solve with reduce
const arrayToBeFlattend = [
  [1, 2],
  [3, 4],
  [5, 6],
  [[7, 8]]
];

const flatten = arr => {
 let newArr = arr.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  );
  for (let element of newArr) {
      if (Array.isArray(element)){
          return flatten(element)
      } else return newArr
  }
};
console.log(flatten(arrayToBeFlattend));
// expected is [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]