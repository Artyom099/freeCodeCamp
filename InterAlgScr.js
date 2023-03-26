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
