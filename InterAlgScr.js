// 1 - summ of all elements in array
function sumAll(arr) {
    let x = 0;
    let y = 0;
    if (arr[0] < arr[1]) {
        x = arr[0];
        y = arr[1];
    } else {
        x = arr[1];
        y = arr[0];
    }

    let summ = 0;
    for (let i = x; i <= y; i++) {
        summ += i;
    }
    return summ;
}
sumAll([1, 4]);


// 2 -


// 3 - some dificults with input data
function destroyer(arr) {
    // for (let i = 1; i < arr.length; i++) {
    //     for (let j = 0; j < arr[0].length; j++) {
    //         if (arr[0][j] == arr[i]) {
    //             arr[0].slice(i, 1);
    //         }
    //     }
    // }
    return arr[0];
}
//console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


// 4
function whatIsInAName(collection, source) {
    let ans = [];
    for (let i = 0; i < collection.length; i++) {                       // перебераем массив collection
        let found = true;
        for (const sourceProp in source) {                              // перебераем массив source
            if (collection[i][sourceProp] !== source[sourceProp]) {
                found = false;
                break;
            }
        }
    if (found) ans.push(collection[i]);             // если found == true, добавляем collection[i] в ans
    }
    return ans;
}
// console.log(whatIsInAName([ { first: "Romeo", last: "Montague" },
//                             { first: "Mercutio", last: null },
//                             { first: "Tybalt", last: "Capulet" }],
// { last: "Capulet" }));






//, "Invalid"


// const videoResolutions = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160']
// const availableResolutions = ['P144', 'P480']

// function checkArrayValues(existArray, receivedArray) {
//     for( let i of receivedArray) {
//         if (!Object.values(existArray).includes(i)) {
//             return false
//         }
//     }
//     return true

    // receivedArray.forEach(el => {
    //     if(!Object.values(existArray).includes(el)) {
    //         console.log('valid');
    //         return false
    //        }
    //        return true
    // })
//}

console.log(checkArrayValues(videoResolutions, availableResolutions))



// function checkArrayValues(existArray, receivedArray) {
//     let exist
//     for (let i in existArray) {
//         exist = false
//         for (let j in receivedArray) {
//             if (i === j) {
//                 exist = true
//                 break
//             }
//         }
//     }
//     return exist
// }

// for (let i in availableResolutions) {
//     if (videoResolutions.includes(i)) {
//         resolutionOK = true
//     } else {
//         resolutionOK = false
//     }
// }


// function checkArrayValues(existArray, receivedArray) {
//     for (let i = 0; i < receivedArray.length; i++) {
//         if (existArray.indexOf(receivedArray[i] == -1)) return false
//     }
//     return true
// }

// function checkArrayValues(existArray, receivedArray) {
//     for (let i = 0; i < existArray.length; i ++) {
//         if (!receivedArray.includes(existArray[i])) {
//             return false;
//         }
//     }
//     return true;
// }
