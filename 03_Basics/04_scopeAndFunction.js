// Trick to learn scope inside any function (if, function, loop)

// maan lo ek chota bacha hai aur aap ho, to jaise chota bacha to aapse ice-cream le skta hai aapki but aap to chote bache se ice-cream nahi le skte naa. acha thodi lagega, hehehehe......

// vaise hi kisi bhi function ke scope me inside function to apne parent function ke variable ko access kar sakta hai but parent function apne child function ke variable nahi access kar sakta

// Example:

function parent(){
    const num1 = 10

    function child(){
        const num2 = 100
        console.log(` parent function num1 : ${num1} , child function value num2: ${num2} `)
    }
    child()
}

parent()


// ******************************** IMPORTANT CONCEPT OF FUNCTION

// As we know functions can be declared with 3 styles , function statement , function with expresion , and anonymous function

// Example1: function statement
function one(num){
    return console.log(++num)
}

one(5)

// now in this example , as function is of statement type i.e. function is not stored in any variable , we can also write this as follows:

oneChange(10) // we can call or give reference (oneChange) , of a function before even creating that function as it is not stored in any variable i.e. not a function with expresion
function oneChange(num){
    return console.log(++num)
}


// Example 2 : function with expresion

// two(10) // now , abh hum isko phele access nahi kar sakte , kyu ki yeh ek variable ya constant hai , aur javaScript me variable before declaration use nahi kar sakte.

const two = function(num){
    return console.log(++num)
}


// we can only write this in way as follows:

const twoChange = function(num){
    return console.log(++num)
}
twoChange(25) // hum iss function jo ki ek variable ya constant me stored hai usko tabhi call ya refer kar sakte hai jab usko create kardia ho aur uske baad call kia hoo 

