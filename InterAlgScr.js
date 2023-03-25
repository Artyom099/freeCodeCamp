function sumAll(arr) {
    (arr[0] < arr[1]) ?
    let x = arr[0], let y = arr[1] :
    let x = arr[1], let y = arr[0];

    let summ = 0;
    for (x; x < y; x++) {
        summ += x;
    }
    return summ;
}

console.log(sumAll([1, 4]));
