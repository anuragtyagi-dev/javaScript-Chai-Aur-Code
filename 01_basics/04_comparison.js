
console.log(typeof null)

console.log(null)

// NOTE: 
/* 
        //: loose equality check operator == ( this check the value and then perform type conversion )
        
        //: strick equality check operator === ( this check the value and dataType without performing type conversion )
        
        //: comparison operators > < >= <= ( these compare either sides with conversion to number )
*/

console.log(null > 0) // > ( conversion operator ) operator  will convert null into number and 0 is already a number then > operator treat both number into Boolean and then it will print true or false . as null in a number in 0 , then 0 > 0 is false

/* VERY IMPORTANT  */
console.log(null == 0) // in this , == operator ( loose equality check operator ) behaves differently than > , < , >= , <= , as it checks value and then perform a type conversion and then checks , so in this case it check whether null as a value is equal to zero and perform type converion , so null is object and 0 is number so the OUTPUT : false 

// MORE EXAMPLE of loose equality check ==
console.log( "harry" == 1) // here harry represent the string , so loose equality operator performs type conversion and as string is not equal to number so the OUTPUT : false 

console.log( "1" == 1 ) // here it performs type conversion until it breaks , so 1 is a number and 1 is also a number OUTPUT : true

console.log ( "1abc" == 1 ) // loose equality operator after performing type conversion of string 1abc until it breaks that means until it struck with string ex: abc , tried to convert into number , but as abc is present in 1abc so 1abc will not be converted into number and the OUPUT : false 

/* VERY IMPORTANT  */
console.log(null === 0) // in this , === operator ( it is a strict checking operator ) behaves differently than > , < , >= , <= , as it will NOT CONVERT null and 0 into number but treates them on the basis of their dataTypes. i.e. null in dataType is object and 0 in dataType is number so , it will print false 

/* VERY IMPORTANT  */
console.log(null >= 0) // in this , null will be converted to number due to the use of > operator and 0 will also be converted to number , then null in number is 0 so , 0 >=  0 is true. so it will print true 

console.log( null >= "0") // true
console.log( null >= 0 ) // true
console.log( null >= 0 ) // true
console.log( null == undefined ) // true ( Special CASE )
console.log( null === undefined ) // false 
console.log( null >= undefined ) // false
console.log( null >= "undefined") // false


/* VERY IMPORTATN */

// strict comparison using ===

console.log("2"=== 2) // in this , console will print false , as in strict comparison (using ===) the compiler or interpreter will not convert "2" or 2 and treat them as itis as dev declared them.

