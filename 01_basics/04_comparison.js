
console.log(typeof null)

console.log(null)

console.log(null > 0) // > operator  will convert null into number and 0 is already a number then > operator treat both number into Boolean and then it will print true or false . as null in a number in 0 , then 0 > 0 is false

/* VERY IMPORTANT  */
console.log(null == 0) // in this , == operator behaves differently than > , < , >= , <= , as it will NOT CONVERT null and 0 into number but treates them on the basis of their dataTypes. i.e. null in dataType is object and 0 in dataType is number so , it will print false 

/* VERY IMPORTANT  */
console.log(null >= 0) // in this , null will be converted to number due to the use of > operator and 0 will also be converted to number , then null in number is 0 so , 0 >=  0 is true. so it will print true 


/* VERY IMPORTATN */

// strict comparison using ===

console.log("2"=== 2) // in this , console will print false , as in strict comparison (using ===) the compiler or interpreter will not convert "2" or 2 and treat them as itis as dev declared them.

