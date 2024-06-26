// Some useful array methods

// How to add another array in some other array ...
// Example case1 using push method

let one = [2, 3, 4, 5]

let two = [5, 6, 7]

one.push(two)
console.log(one)    
// But this create an issue i.e. , it pushes the whole array inside an array , meaning final ouptup will be [ 2, 3, 4, 5, [5,6,7] ]

// ************************** IMPORTANT ********************************************

// push method gives the lenght of an array if saved and not an array itself
// Example

let w1 = [1,2]
let w2 = [4,5]

let nw = w1.push(w2) // yaha jaise humne w1 me w2 push kardia to w1 me abh total 3 elements hai , [0] index pe 1, [1] index pe 2 and [3] index pe [4,5] and abh humne isse save kia hai nw me to nw actully uss w1 ki lenght store kar raha hai yaani push method use karke hum kisi bhi array ki lenght store kar sakte hai 

console.log(nw) // OUTPUT: 3 // showing the stored lenght of w1 array due to the use of push method 

                            // Example 2 , using concat method
                            // concat , push ki tarah nahi hai , yeh new array hi banadeta hai aur store kardeta hai 

let three = [1,2]
let four = [4,5]

// three.concat(four) // this returns an array which needed to be save 
let five = three.concat(four)

console.log(five) // OUTPUT : [1,2,4,5] // yaani this will return an array which need to be saved in variable 



                // Use spread method instead of concat

let six = [1,2]
let sev = [7,8]

let eig = [...six, ...sev] // spread method is used like this , with the help of three dots ...

console.log(eig)
//  This is prefered as per production level standards

// Example 4 , what if there's an array which has value or elements in number , string , or an another array , just like in concat method which also returns another array that has array inside array, so to solve this problem , we can use flat method

let harry = [`harryPotter` ,25 ,`severousSnape` ,70 ,[`hello`, `what you doing `, 88] ]

console.table(harry)

let berry = harry.flat(Infinity) // flat method assumes a parameter which is for knowing how much deeply it needs to go inside that array or in layman terms , how many arrays are inside which needed to be flat , we can use infinity as we don't know how many arrays are inside that particular array.

console.table(berry)




// Example 5 :

// we can create and check if array
console.log(`READ FROM HERE `)

let arr1 = Array.isArray("anurag")

console.log(arr1) // This Array.isArray method will ask ( BOOLEAN ) that provided parameter is or not an array and also convert this array into boolean because it return value is boolean (true or false)

console.log(typeof arr1)


// Now to convert anurag or anything written or given inside the parameter into array , we can use Array.from method 

let arr2 = Array.from("Anurag")

console.log(arr2)

console.log(typeof arr2)
//NOTE: this example will create an array with parameter Anurg , and give or returnValue an array
// Another from example

let yrr = Array.from({name:`Anurag`, age:24}) // we can make array with provided object values but it always returns empty array if we does not specify any object values
console.log(`yrr : `,yrr) 




// This example is for making string or return string dataType or returnValue String from an array

let arr3 = arr2.join()
console.table([`arr3 : ${arr3}`, `typeof arr3 : ${typeof arr3}`])


// ************************ IMPORTANT FOR INTERVIEWS 

// Array can give empty array , when and how ?

console.log(Array.from({name:"Anurag" ,car:true})) // jab tak hum yeh na bataye ki array ke andar ka object ka usme konse konse key ko hume array banana hai with the help of from method tab tak vo ek empty object hi bana dega aur return kardega console pe check kar sakte ho .





