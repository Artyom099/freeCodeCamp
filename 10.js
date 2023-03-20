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
