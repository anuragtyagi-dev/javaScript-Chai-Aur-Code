// function are used when we have to write a particular code again and again, so we assign that code to function so that whenever user calls for that particular code , the code executes 

// Example: suppose we have to print anurag tyagi 10 times , so instead of doing console.log 10 times we can wrap this in a single function and whenever we need to execute this code , we can call the assigned funtion

function nameWriter(){
    for(i=0; i<10; i++) console.log("AnuragTyagi")
}

// NOTE : If a function is not returning anything , it will by default return undefined 

// now whenever we need that code which we wrapped inside a function and assigned a particular name , we just call that function

// nameWriter // this means we are referencing that function

// console.log(nameWriter) // this will show the referencing function in console

// to call the function , 
// nameWriter() // whatever your code was inside that function now it will executes same line by line

// we can store the function in const or variable

// const fnc1 = nameWriter()
// console.log(fnc1)


// funtion to add two numbers

// either we can run some code that we want and end that function after execution or we can run some code and return something so that after code execution when the function scraps out of existence we can use whatever that function performs and gave output , so this way we can save that function's output and use lateron as well

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }


// function addTwoNumbers(number1, number2){
//     return (number1+number2)
// }

// const addedNumbers = addTwoNumbers(1,1)
// console.log(addedNumbers)

// NOTE: function jo variables me values accept karta hai ya jo input leta hai unhe parameters khate hai , aur vo variable or input values hum function ke liye passkarte hai unhe arguments khate hai


// ************************************* IMPORTANT FOR INTERVIEWS
// Example : we can give parameter a 'by default' value , matlb , agar argument kuch bhi nahi aaya to bhi by default function ke parameter ke pass kuch value hogi


// function userInfo(username){
//     let harry = `${username} just logged in , welcome again in oasis`
//     return harry
// }

// const userloggingInfo = userInfo(`AnuragTyagi`)
// console.log(userloggingInfo)

// Example Two

// Note: the parameter username has given a by default value "anurag"
// CASE 1 : if argument is not given anything , Then it will take by default provided value from the parameter

function userCard(username="anurag"){
    return console.log(`Hello ${username} and welcome again in Oasis`)
}
userCard('jerry')


// ***************************** SUPER IMPORTANT 

// CASE 2 : if argument is given blank STRING , "" , Then it will print blank (NOT By defalut value) yesa isliye kyuki blank string undefined category me nahi aata balki string ki category me ata hai , function ke parameter ke andar phele se dii gai by default values tabhi chalengi jab argument undefined hoga
userCard("")


// CASE 3 : if argument is given nothing (nothing ka meaning hai undefined , ki user ne kuch value dia hi nahi ) to undefined case me by default value parameter ki use hogi aur agar defalut parameter kuch bhi nahi set hai to undefined print hoga
userCard()

// CASE 4: if argument is null 
userCard(null) // or userCard("null") , In both cases null will be printed , kyuki abhi bhi argument kuch value hold kia hua hai bhalehi null , par kyuki yeh undefined nahi hai to null print hoga.            jabtak undefined naa ho argument tabtak function ke parameters ki by default value use nahi hogi