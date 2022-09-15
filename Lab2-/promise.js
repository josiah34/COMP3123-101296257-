let x = 0 
let p1 = new Promise((resolve, reject) => {
    if (x > 10){
        resolve()
    } else {
        reject()
    }
})

p1.then(() => {
    console.log("Success")
}).catch(() => {
    console.log("Error")
}
).finally(() => {
    console.log("Finally ")
})