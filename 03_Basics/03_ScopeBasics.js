//Scope
// ek hota hai block scope ya functional scope aur ek hota hai global scope
// ******************************* MOST IMPORTANT FOR INTERVIEWS 
//Global scope ka matlab hai yese variables ya constants jo ki humne kisi bhi function ( if, function , for ,etc...) ke andar naa declare kare ho
// functional scope ka matlab hai yese variables ya constants jo humne kisi bhi function ( if, function , for ,etc...) ke andar declare kare ho 

let a = 1 //     These both are global scope
const b = a++ //

var c = 100   // var doesn't follow global scope rule 

if (true) {
    let a = 100
    const b = 500
    var c = 101
    console.table([`inner a: ${a}, inner b: ${b}, inner c: ${c}`])
}

console.table([`outer a: ${a}, outer b: ${b}, outer c: ${c}`])

// yaha hum dekh sakte hai ki let aur const , dono ki value alag alag hai if ke andar yani functional or block scope me aur global scope me JABKI dono ki declaration key same name se hai a and b, but var kyuki isko follow nahi karta , to var jab global scope me declare hua tab uski value 100 thi and then jab var if ke functional scope me declare hua tab usene previously declared value ko overwrite kardia to var c , ki final value 101 ho gai , function scope meaning inner me check karoge tabhi aur global scope meaning outer me check karoge tab bhi ,                 final value of c = 101

// NOTE : any thing declared in global scope , is also availabe in functional scope but not the other way around

// Example:
let ava = 100
if (true){
    let ava1=200
    const b = ++ava1
    console.table([` value of let ava in global scope : ${ava}`, ` value of let ava in functional scope : ${b}`])
}

// ************************* MOST IMPORTANT for INTERVIWES

// Global Scope alag hota hai code environment me aur core scope environment me 

// core scope : matlab , browser pe jaake inspect karo , vaha ka console jo hai vo core environment hota hai , browser ke console ko core environment kahete hai aur vaha ke global scope ko core scope

// code scope or code environment scope : jaise hum abhi apne vsCode ke teminal pe code debugging kar rahe hai , sourceCode ko run karke dekh rahe hai to isko bolte hai code environment , yaha ke global scope ko bolte hai code scope 


// ************* NOTE : CORE SCOPE is different from CODE SCOPE 