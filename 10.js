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
