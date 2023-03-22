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


// 5 - Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result5 = extractStr.match(/coding/);; // Change this line


// 6 -
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Чтобы искать или извлекать шаблон более одного раза, можно использовать глобальный флаг поиска - g
let result6 = twinkleStar.match(starRegex);; // Change this line


// 7 - '.' заменяет любой символ в искомом слове
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);


// 8 -
