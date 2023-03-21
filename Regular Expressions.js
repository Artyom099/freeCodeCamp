// 1
let myString1 = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString);; //    Change this line


// 2
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);


//3
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);


// 4
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // i - позволяет игнорировать высоту шрифта
let result4 = fccRegex.test(myString);


// 5
