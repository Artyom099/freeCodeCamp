function checkScope() {  // use only 'let'
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}



function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);      // ф-я не дает в дальнейшем изменять объект
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();



const magic = () => new Date(); // пример стрелочной ф-ии



const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));


// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line



const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);



const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
// Only change code below this line
const {today, tomorrow} = HIGH_TEMPERATURES;
// Only change code above this line



const HIGH_TEMPERATURES1 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
// Only change code below this line
const { today: highToday1, tomorrow: highTomorrow } = HIGH_TEMPERATURES1;
// Only change code above this line



const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
// Only change code below this line
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
// Only change code above this line



let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];



function removeFirstTwo(list) {
    // Only change code below this line
    const [,, ...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);



// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line




const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}
const failuresList = makeList(result.failure);



const createPerson = (name, age, gender) => ({ name, age, gender });



// Use class Syntax to Define a Constructor Function
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'



// как экспортировать ф-ю
export { uppercaseString, lowercaseString };
