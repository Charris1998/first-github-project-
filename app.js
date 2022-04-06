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
    return arr[arr.length -1]
    }
    console.log(arrLast([1, 2, 3, 4, 32, 28, 38]))
    