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



// 3 -
function destroyer(arr, a, b) {
    // for (let i = 1; i < arr.length; i++) {
    //     for (let j = 0; j < arr[0].length; j++) {
    //         if (arr[0][j] == arr[i]) {
    //             arr[0].slice(i, 1);
    //         }
    //     }
    // }
    return arr, a, b;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
