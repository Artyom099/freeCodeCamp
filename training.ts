const videoResolutions = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160']
const availableResolutions = ["P144", "P240", "P720"]

//если существующий массив НЕ включается в себя элемент полученного массива ф-я выдает false
function checkArrayValues(existArray, receivedArray) {
    for( let i of receivedArray) {
        if (!existArray.includes(i)) return false
    }
    return true
}

console.log(checkArrayValues(videoResolutions, availableResolutions))
console.log(!1)
console.log(!-1)
