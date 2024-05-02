//               Conversion                 

// let score = 20

// let checkingScore = Number(score)

// console.log(checkingScore)

// console.log(typeof checkingScore)

/* Note: Conversion to any dataType is done by declaring the desired dateType in capitalize format such as Number , String , Boolean  */

// ************************** Operators  ********************************

// let value = 5
// let negValue = -value 
// console.log(negValue) // we can convert any value or variable or constant in negative form or in positive form

// const harry = 10
// let harryNeg = -harry
// console.log(harryNeg)

// let mg = "33"
// let mgNeg = -mg
// console.log(mgNeg) // Output : -33

// let mg = "harry"
// let mgNeg = -mg
// console.log(mgNeg) // Output : NaN because harrry is string and compiler is failed while converting it into a number 
//NOTE : String can not be converted as negative 



// We can perform basic arithmetic operations in console itself 
// console.log( 2+2 )
// console.log( 2-2 )
// console.log( 2*2 )
// console.log( 2/2 )
// console.log( 2%2 ) // This is used to get remainder value 
// console.log( 2**2 ) // This is used to get 2 raise to the power 2 or exponential value 

//  * Special console behaviour with String and Number 

// console.log(2+2) // This will print 4 in console

//  console.log("2"+2) // This will print 22 in console , as when there's a String in first place , everything that is after will be treated as string 

// console.log("2"+2+2) // This will print 222 in console 

/* IMPORTANT  */
/ Very Special Case , When trying to subtracts with string  / 
// console.log("22" + 2 - 5) 
// The above sourceCode will print "217" in console, Why ?
/* Breakdown

If you print console.log("22" + 2 - 5) in the console, it will output "222-5".

Here's the breakdown:

"22" + 2 will concatenate the string "22" with the number 2, resulting in the string "222".
Then, when you try to subtract 5 from the string "222", JavaScript will try to convert "222" to a number to perform the subtraction. However, since there are no arithmetic operators for strings, JavaScript will attempt to convert the string to a number. Since the string starts with digits, JavaScript will interpret it as a number until it encounters a non-digit character.
Therefore, "222" will be converted to the number 222.
Finally, 222 - 5 will result in 217.
So, the actual output will be 217.


*/

/*  let x = 5 // Now x holds a value i.e. 5
let y = x++ // this implies that firstly assign value of x (which is 5 at the moment ) to y and then after changes the value of x 

console.log(x,y) // at this moment , the value of x changed to 6 ( as after the increament ) and the value of y is 5 , so console will print x:6 , y:5

*/


/* 


let a = 1 // Now a holds the value of 1 
const b = ++a // This implies that firstly changes the value of a then assign the value to b , so b will finaly hold 2 as value 

console.log(a,b) // a:2 , b:2 ( at this moment after the compiler read through code and made the necessary changes , a will hold final value of 2 as developer changes in a , and b will hold final value of 2 as well )


*/