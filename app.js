function removeApples(arr) {
    return arr.filter(elem => elem !== 'apple')
}   
console.log(removeApples(['banana', 'orange', 'apple']));