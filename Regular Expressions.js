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
let result7 = unRegex.test(exampleStr);


// 8 - Надо найти все гласные с помощью [..] и gi и метода .match
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result8 = quoteSample.match(vowelRegex); // Change this line


// 9 - Match all the letters in the string quoteSample9 | с помощью [a-z]
let quoteSample9 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample9.match(alphabetRegex); // Change this line
