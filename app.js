// Falsy or Truthy? - Given two values, 
// return the first one if it is falsy, 
// otherwise return the second one. 



function filterOutFalsy(elem1, elem2) {
    return !elem1 ? elem1 : elem2
}
console.log(filterOutFalsy(100, 0))


// Return the length of any given array 
// - Given an array, return its length

function arrLength(arr) {
    return arr.length
}
console.log(arrLength([1, 2, 3, 4]))


// Get the last element of an Array
// - Given an array, retrun the last element

function arrLast(arr) {
    return arr[arr.length - 1]
}
console.log(arrLast([1, 2, 3, 4, 32, 28, 38]))

// Find the sum of an array 
// Given an array, return the sum of every element

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i]
    }
    return sum
}
console.log(arrSum([1, 2, 3, 4, 5, 6]))

    // Add up the numbers from a single number - Given a number, 
    // add up all the numbers from one to the number that is given.
    // E.g.an input of 4 will give you 1 + 2 + 3 + 4, which equals 10.

function progressiveSum(num) {
    let sum = 0
    for (let i = 1; i <= num; ++i) {
        sum = sum + i
    }
    return sum
}

console.log(progressiveSum(3))

// Calculate the time - Given a number in seconds, 
// return this number in mm:ss format

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds/60)
    let timerSeconds = seconds % 60

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }
    return timerMinutes + ':' + timerSeconds
}
console.log(calcTime(80))