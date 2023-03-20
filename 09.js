// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line

    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName == name) {
        if (prop in contacts[i]) {
          return contacts[i][prop];
        }
        else {
          return 'No such property';
        }
      }
    }
    return 'No such contact';
    // Only change code above this line
}

//lookUpProfile("Akira", "likes");




function randomWholeNum() {

    // Only change code below this line
    return Math.floor(Math.random() * 10);
}



function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}



function checkEqual(a, b) {
    return a == b ? 'Equal' : 'Not Equal';
}




function checkSign(num) {
    return (num > 0) ? 'positive'
    : (num == 0) ? 'zero'
    : 'negative';
}




function countdown(n) {    // recursion
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
}



function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return [];
    } else {
      const countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.push(endNum);
      return countArray;
    }
};

console.log(rangeOfNumbers(1, 5));
