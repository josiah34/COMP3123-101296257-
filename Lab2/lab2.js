// Exercise 1
const greeting = "Hello "
myArray = ["John", "Stacey", "Michael"]
myArray.forEach(item => console.log(greeting + item))


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
var values = [1, 60, 34, 30, 20, 5]

let filtered = values.filter(value => value < 20)
console.log(filtered)

// Exercise 5
var array = [1, 2, 3, 4,]
const calculateSum = (returnValue, currentValue) => returnValue + currentValue;
const calculateProduct = (returnValue, currentValue) => returnValue * currentValue;


console.log(array.reduce(calculateSum))
console.log(array.reduce(calculateProduct))

class Car {
  constructor(year, model) {
    this.year = year
    this.model = model

  }
  details() {
    return "Make: " + this.model + "\n" + "Year: " + this.year
  }

}

class Sedan extends Car{
  constructor(year, model, balance) {
    super(year, model)
    this.balance = balance}
  info(){
    return "Make: " + this.model + "\n" + "Year: " + this.year+"\n"+"Balance: "+this.balance
  }
}

let civic = new Car(1996, "Civic")
console.log(civic.details())
let m3 = new Sedan(1996, "M3", 3000)
console.log(m3.info())