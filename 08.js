function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



// Setup
const myArray = [];
let i = 10;
// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 10)



function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");


function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");
