/* IMPORTANT for Interviews */

/* In any progarmming language there's categorisation of dataType mainly on two basis , that is 

first: How a data is stored in memory 
second: How that data can be access from memory */

// ****************     Primitive dataType 
/* primitive dataType consists of 7 type
String , Number , Boolean , Null , Undefined , Symbol , BigInt 

Note: primitive dataType is a callbyValue dataType , means when dev changes the value of any of these declared primitive dataType then the memory allocates a copy (no a refrence) of that particular variable or constant so that the change can happen and stored in another declared or desired variable or constant and can never "alter" the previously declared variable or constant without dev or user consent or declaring otherwise

example: let harry = 10
         let berry = harry
         
         berry = berry - 5

         *Final output will be harry:10 , berry:5 
         Note : in this example we have taken harry and assigned a value 10 to it , and taken berry and assigned a same value of harry which made "COPY" of harry value without ever "changing the origninal value" and assigned it to berry.
         now if we made some changes to berry "which has same value as harry but a copy" then there's only change in berry value and not in harry value.
         This is called primitive dataType
*/

//IMPORTANT for Interview Note: javaScript is a dynamically typed (not static typed) language as it assign variable type during code execution or compiling 




// ****************     Reference dataType
// 3 types
/* Arrays, object , Function */

const hello = 100 // value of hello is 100 , typeof or dataType of hello is Number 

const userId = 100.5 // value of userId is 100.5 , typeof or dataType or return value of userId is Number

let userPass = "harrypotter134" // value of userPass is harrypotter134 , returnValue or dataType or typeof userPass is String

let userLoggedIn = true // value of userLoggedIn is true and returnValue or dataType or typeof userLoggedIn is Boolean

/* for checking in console
console.log(userLoggedIn)
console.log(typeof userLoggedIn)
*/

let userAddress = undefined // value : undefined , returnValue or dataType or typeof : undefined

// IMPORTANT for interview
let userAccount = null // value : null , returnValue or dataType or typeof : object , also if null is to be converted in number then it gives 0 as value

// IMPORTANT for Interviews 
// Symbol is used mainly in figma and react to make uniqueness between elements even if they hold same "declared" values example below:
let userBankAccount = Symbol('123')
let anotherUserBankAccount = Symbol('123')

/* for checking in console
console.log(userBankAccount === anotherUserBankAccount)
*/

let bigNumber = 5000595958431651151851615631n // any number which is too large and we have to deal with it is stored in BigInt dataType variable or const , this is generally not used in production world but mainly used in stock market or cryptography to hold and deal with such large numbers
// >Note: to declare BigInt n is used for example see above sourceCode

// ____________________________________________________________________

// Declaring nonPrimitive or Reference dataType 

// Arrays

let myArr = ["harryPotter", "herminieGinger", "ronWeasly", 25, function(){}, [], ]

let myObj = {
    name: "anuragTyagi",
    age: 24,
    userId: "52",
    MahaDevBhakt: true
}

function myFunc2(){

} // This is basic function also known function with statement


let myFunc = funciton(){

} // This is function expression


function(){

} // This is anonymous function

// IMPORTANT for Interviews 
/*
in primitive dataType 
Number returns Number
String returns String 
Boolean returns Boolean 
Symbol returns Symbol
BigInt returns BigInt
undefined returns undefined
null returns object // ***** MOST IMPORTANT TO NOTE *****

*/

/*

in nonPrimitive or Reference dataType  every thing returns forms of object

Array returns object 
object returns object 
function returns objectFunction

*/