// behaviour of parameter of function

// if arguments are more than the parameter , example in amazon or any e-commerce website , developer doesn't know how much items does user will add in their cart but only know that we need to add all the prices of items in the cart 

function addItems(prices){
    console.log(`Thankyou for shopping, your items total price is ${prices} `)
}

// addItems(200)

// abh agar user aur items add karega cart me to function ke argumenst me aur values add hongi , to hume to pata nahi ki kitni value aur hai to hum kitne hi function me parameter likhenge.
// iss issue ko solve karne ke liye kaam aata hai rest operator (similar to spread operator but depend karta hai use kaha kia hai)

// function newAddItems(...prices){
//     let value = (` Thankyou for your shopping with us , your total price is : ${prices}`)
//     return value
// }

// const value = newAddItems(200, 500, 700, 4000)

// // console.log(value)
// console.log(typeof value)


function newAddItems(...prices){
    let value = prices
    return value
}

const value = newAddItems(200, 500, 700, 4000)
console.log(value)

// Note this will store all values in array

// CASE 2: ****************** MOST IMPORTANT

function checking(val1, val2, ...val){
    return console.log(`val1: ${val1} val2: ${val2} val: ${val}  `)
}
checking(2 ,3, 5, 70, 10, 11)

// In this example , val1 is on first parameter ,so it will store first argument, similarly val2 is on second parameter it will store second argument , now val is written using rest operator , ...val , so it will store mulitple ya fir saare arguments value jitne bhi diye jayenge , aaru iska dataType array hoga aur typeof object 

//_______________________________________________________________________

// we can pass array as an arrgument in function 

let myArr = [21, 22, 5, 12]

function cartList(anyarray){
    return console.log(`Your array is : ${anyarray}`)
}

cartList(myArr) // Directly print kar sakte hai poora array
cartList(myArr[1]) // ya fir particular index bhi defined kar skte hai

cartList([2, 4, "kuchBhi"]) // ya apna koi bhi array bhi daal skte hai

// ______________________________________________________________________

// we can pass object as an argument in function
let mySym = Symbol("patronusCharm")
let myObj1 = {
    fullName: "anuragtyagi-dev",
    userName: "MiniNinja",
    [mySym]: "harryPotterKey",
    "HiddenPower": "bhakti-hi-shakti-hai",
}

function onGoing(anyObject){
    return console.log(`Your object is : ${anyObject}`)
}

onGoing(myObj1) // IMPORTANT FOR INTERVIEWS , This will not work as you have expected , because , Object is not like array (that has only index , and that index has values) instead objects has key ( which we can defined or give any name ) and object has values (keyValues, which we can defined or give any value or name ) , so to access these values , we need to particularly give that particular key 

onGoing(myObj1.userName) // now this will work and print username inside myObj1


// Example 2 ; if we provide our object

function apna(anyObject){
    return console.log(`Now This is apna object, username: ${anyObject.username} userId: ${anyObject.userId} `)
}

apna({
    username:"AnuragTyagi",
    userId:11,
})
//_______________________________________________________________________
