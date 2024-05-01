// Learning About Date 

let myDate = new Date() // This syntax of Date will create date in date format with other values as well related to date 

console.log(myDate)

let myNewDate = Date.now() // This syntax of Date will create date in pure milliseconds format , milliseconds past from (1970 Jan 01)

console.log(myNewDate)


// formats for assigning date or declaring and storing date 

let todayDate = new Date(2023, 1 , 15 ) // In this way we are giving parameters as index , so YYYY, MM, DD .. in this MM index start from 0 which means at 0 index jan , at 1 index feb and so on 

console.log(todayDate) // This will give date and some more values to reduce the values with desired values we use methods which are some special functions available for objects 

console.log(todayDate.toLocaleString) // toLocalString is a method which is a fucntion so if we want print a function or to use a function we must use that function 

console.log(todayDate.toLocaleString()) // This will print date in usa standards format meaning MM DD YYYY but to need to print in Indian format we can use 'en-In' inside the toLocalString as the method is string we need to put en-In in ''

console.log(todayDate.toLocaleString('en-In')) // Now this will print in DD MM YYYY format



// IMPORTANT FOR INTERVIEWS 
// typeof new Date() is object and it also returns object 
// typeof Date() is String but returns String
// typeof Date().now is number but returns number