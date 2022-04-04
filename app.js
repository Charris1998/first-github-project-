function hoursIntoSeconds(hours) {
    return hours * 60 * 60
}
console.log(hoursIntoSeconds(2))

function calcPerimeter(length, width) {
    return 2 * length + 2 * width
}
console.log(calcPerimeter(6, 7))



function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height
}
console.log(calcAreaOfTriangle(3, 2))

function appendFrontend(string) {
    return string + 'Frontend'
}
console.log(appendFrontend('apple'))

function greaterThan100(num1, num2) {
    return num1 + num2 > 100
}
console.log(greaterThan100(49, 233))


function lessThanOrEqualToZero(num) {
    return num <= 0
}
console.log(lessThanOrEqualToZero(100))

function oppositeBoolean(bool) {
    return !bool 
}
console.log(oppositeBoolean(true))

function isNotZero(elem) {
    return elem !== 0
}
console.log(isNotZero(200))

