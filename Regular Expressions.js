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
let result9 = quoteSample9.match(alphabetRegex); // Change this line


// 10 -
let quoteSample10 = "Blueberry 3.141592653s are delicious.";
let myRegex10 = /[h-s2-6]/gi; // Change this line
let result10 = quoteSample10.match(myRegex10); // Change this line


// 11 - ^ - создает отрицательный набор символов для поиска (пишем то, что не ищем)
let quoteSample11 = "3 blind mice.";
let myRegex11 = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample11.match(myRegex11); // Change this line


// 12 - '+' позволяет искать сдвоенные знаки и возвращать их 1 раз, а не 2 подряд
let difficultSpelling = "Mississippi";
let myRegex12 = /s+/g; // Change this line
let result12 = difficultSpelling.match(myRegex12);


// 13 -
