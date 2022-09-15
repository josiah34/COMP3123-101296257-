console.log("Week 02 Callback and Arrow examples");

function  greet(){
    return "Hello World"
}


function  sayHello(name){
    return `Hello, ${name}`
}

function sum(a, b ){
    let c = a + b
    return c
}

  greet = () => {
    return "Hello World"
}
// sayHello = name => {
//     return `Hello, ${name}`
// }

 sum = (a, b ) =>{
    let c = a + b
    return c
 }

 let r = sum(2,4)
 console.log(r)

 //callback 

 
 display = (result) =>  console.log("Salary: " + result)
 function calculate_salary( a, b, callback, print){
    let r = callback(a,b)
    print(r)
 }

 let s = calculate_salary(100, 50, sum , display)
 
calculate_salary(10,5,function(a,b){
    return a + b
}, (value) => {
    console.log(`Sum : ${value}`)
})