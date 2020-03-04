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

//flattening arrays with reduce
const arrayToBeFlatted = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8]
];

console.log(
  arrayToBeFlatted.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  )
);
