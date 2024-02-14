/* Create a faulty calculator using Javascript

    This faulty calculator does following:
    1.  It takes two numbers as input from the user
    2. It performs wrong operations as follows:

    +  --->  -
    *  --->  +
    -  --->  /
    /  --->  **
    
    It performs wrong operation 10% of the times

*/

let random = Math.random()
console.log(random)
let a = prompt("Enter first number:")
let c = prompt("Enter Operation:")
let b = prompt("Enter Second number:")

let obj ={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random > 0.1){
    // Perform correct calculation

    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    // Perform wrong calculation
    
    c = obj[c]

    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}