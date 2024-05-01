// Arrays
// how to declare an array

// const myArr = [0, 2, 7, 19, 30, 'shaktiman', 'harryPotter',[0,3,6,'mongoDb'] , function one(){}]

// console.table(myArr)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const myArr = new Array(0,2,4,5,67,7,'shaktiman')  // another way of declaring array as an object

// console.log(typeof myArr); // This will show that this array i.e. myArr is a dataType of object and returnValue is also object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Methods in Array

const myArr = [0,4,5,56,64,45]

myArr.push(7) // This will add anything or any value you provide at the end of an array assigned the index

myArr.pop() // This will remove the end value of an array, it does'nt requires any parameter or argument inside it 

//NOTE , SAME AS PUSH AND POP we have unshit and shit also but they are no longer recommende to use as they are use to puch values from start which causes an ISSUE : that is , every value inside an array shiftes from its previous index , which when array having large values cause hussle for dev and also reduces the efficiency of computer

// Example :
myArr.unshift(333) // Same as push but from starting index

myArr.shift() // Same as pop but from starting index

// ******************************** IMPORTANT FOR INTERVIEWS 
// MOST IMPORTANT METHODS of Array

// to know some Boolean value inside an array we use include method
// Example
console.log(myArr.includes(8)) // This way we can now print and know that if array has any thing that we want may it be value , number , string...etc

console.log(myArr.indexOf(64)) // This way we can know the index of the value or string or number inside the array , NOTE: if the value provided is not in array , then the compiler gives -1 as value which literaly says there nothing that you're looking for and if the value matches , then it gives index of that value
console.log(myArr.indexOf(8)) // Example for -1 output


//NOTE : we can also make a copy of array values and store it in any variable as a STRING dataType

// Example

const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr)


// MOST IMPORTANT METHOD in Array
// slice and splice , are the two main methods which are also asked in javaScript interviews 

console.log("Main Array", myArr)

const na1 = myArr.slice(1,4) // parameters provided inside slice and splice are the index from where to where the dev wants the values  

console.log("Slice array ",na1)
console.log("after slice main arrray ", myArr)

// slice is used to get the value from "inclusive" starting index to "exclusive" ending index , and "Also" does'nt change the original array

// but in splice , it is used to get the values from "inclusive" starting index to "INCLUSIVE" ending index , and "IT DOES" CHANGE the ORIGINAL ARRAY

// Example of splice

console.log("Splice array ",myArr.splice(1,4))
console.log("after splice main arrray" , myArr)
