
/* As we know , dataType or any kind of data can be cateogries on mainly two basis 
First : How data stored in memory 
Second : How that data can be access from memory

*/

/* In javaScript data can be stored and access from two kind of memory 
first: Stack
Second : Heap
 */

//NOTE: IMPORTANT FOR INTERVIEWS 
/* Primitive dataType uses Stack memory and nonPrimitive uses heap

In Stack Memory , if we declare some varialbe and another varialbe and gives both same value by declaring second variable same as first one , then the second variable given a copy value of first variable (Not the Reference ) meaning , if we change second variable value later then it has no effect on first variable 
*/
// Example of STACK:
let dataOne = 20 
let dataTwo = dataOne

console.table([dataOne, dataTwo])

//NOTE: this declares the dataOne and dataTwo variables in stack and also given there values in stack

//Example of HEAP:
let userOne = {
    bank:"BOB",
    email: "anuarg@google.com",
}
//IMPORTANT NOTE: in this example userOne variable is declared in STACK but there values are due of OBJECT dataType , declared in HEAP memory as as a reference 

let userTwo = userOne

console.table([userOne, userTwo])

// Now if we made changes in userTwo , the data that is declared in HEAP is as due to REFERENCE TYPE made availabe to both , so it will be change to BOTH of them

userTwo.email = "anurag@microsoft.com"

console.table([userOne, userTwo])


