// 1 - Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
    const teaCups = [];
    for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};
// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line



// - 2
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';
// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
// Only change code below this line
const tea4GreenTeamFCC = getTea2(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 13);
// Only change code above this line
console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);



// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter().
// You should not use the built-in filter method.
// The Array instance can be accessed in the myFilter method using this.

// [23, 65, 98, 5, 13].myFilter(item => item % 2) should equal [23, 65, 5, 13].
// Waiting:["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi") should return ["naomi"].
// Waiting:[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index) should return [1, 2, 5].

Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        if (Boolean(callback(this[i], i, this)) === true) {
            newArray.push(this[i]);
        }
    }
    // Only change code above this line
    return newArray;
};