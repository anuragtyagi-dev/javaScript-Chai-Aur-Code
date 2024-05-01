// In Number dataType we have also some useful methods that are especially used on daily basis

// Example :
const harry = 100;

let berry = new Number(500) // NOTE: this will return object , using new 

console.log(berry.toFixed(2)) // This will give values upto 2 decimal points 

berry = 125.572687
console.log(berry.toPrecision(5)) // This will give precise values upto the defined parameter by dev and after that all values will be rounded off , Output of this example : 125.57 (2687 is rounded off, as 2 was after 7 so it rounded off to 7000 hence the final output is : 125.57)

// ++++++++++++++++++++++++   MATH  +++++++++++++++++++++++++++++++

// we also have Math function with methods in number
console.log(Math.abs(-11)) // This will give positive or absolute value 

console.log(Math.max(5, 10 , 11 ,1 , 4)) // This will give value which is greatest among all

console.log(Math.min(10, 1, 4, 3, 9)) // This will give value which is smallest among all

console.log(Math.round(72)) // This is used to roundoff the value
console.log(Math.round(72.6))

console.log(Math.ceil(85.6))// This also roundoff the value but gives higher value , Output: 86, different example : if 85.2 then Output: 86 also,

console.log(Math.floor(85.6)) // This also roundoff the value but gives priority or output the lowest value, Output: 85

// IMPORTANT FOR INTERVIEWS

// Math function has special method as random , which is used to generate random number value between 0 to 1 , 

console.log(Math.random()) // This will give random number dataType values between 0 and 1 

// NOTE : as it gives values between 0 and 1 , the values are in decimal and 0 is inclusive but 1 is exclusive , so to solve this issue we multiply it by 10 so that the value shifts on one decimal place like : previous value 0.654 , after multiplying by 10 , the value becomes 6.54 , so to solve other issue that 0 is inclusive , we add 1 to the final result so that the values lies between " 1 to 9 " 
// Example

console.log( (Math.random()*10) +1 ) // This will give values between 1 to 9

// Now to get only real value and not decimal value , we add Math.floor method 

console.log(Math.floor( (Math.random()*10 )+1 ))

// IMP : Not suppose if there's a task to generate random values between desired range say 40 to 90 , or you're playing a dice game , then how to get random values within desired range

// So to solve this issue we use this logic

const max = 30
const min = 20 

console.log( Math.floor(Math.random()*(max - min + 1)) + min )



