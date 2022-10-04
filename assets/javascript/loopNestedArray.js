// THE THIRD ONE LOOP THROUGH NESTED ARRAYS

let myArry = [
  "Chevrolet",
  "Mercedez",
  "RangeRover",
  ["Camaro", "GLK", ["Black", "White"]],
];
const flattenedArray = myArry.flat();
for (const arr of flattenedArray) {
  let gottenArry = [];
  gottenArry += arr;
  // console.log(gottenArry);
}
