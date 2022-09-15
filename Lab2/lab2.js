// Exercise 1
const greeting = "Hello "
myArray = ["John", "Stacey", "Michael"]
myArray.forEach(item => console.log(greeting+item))


// Exercise 2 
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

console.log(capitalize('fooBar')); 
console.log(capitalize('fooBar', true));
// Exercise 3
colors = ['red', 'green', 'blue']
const capitalizedColors = colors.map(x => capitalize(x))
console.log(capitalizedColors)
// Exercise 4
var values = [1, 60, 34, 30,20, 5]

let filtered = values.filter(value => value < 20  )
console.log(filtered)

// Exercise 5
var array = [1, 2, 3, 4,]
const calculateSum = (returnValue, currentValue) => returnValue + currentValue;
const calculateProduct = (returnValue, currentValue) => returnValue * currentValue;


console.log(array.reduce(calculateSum))
console.log(array.reduce(calculateProduct))

