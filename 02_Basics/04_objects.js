// How to add object 
// just like arrays we can add mulitple objects in different ways but remember only 2 ways

// First : SIMPLE WAY (USING SPREAD)

let obj1 = {1:"a", 2:"b", 3:"c"}
let obj2 = {4:"mc", 5:"you", 6:"hellio"}

let obj3 = {...obj1, ...obj2}
console.log(obj3)
// NOTE: different objects when adding together in one object must not contain same key name 

// Second: Object.assign 
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)

// if an array has object inside to how to call that object

let mir = [{name:"anurag",email:"anurag@gmail.com"}, {name:"harkirat", email:"harkirat@gmail.com"}]

console.log(mir[0].name)

//*********************************** IMPORTANT FOR INTERVIEWS 

let myObj = {
    name:"anuarg",
    email:"anurag@google.com",
    userID: 11,
    userLoggendIn: true,

}

// now to get keys and values either seperately or together , we uses Object.keys method and Object.values or Object.entries

console.table([ `Values of keys : ${Object.keys(myObj)}` , `Values of values : ${ Object.values(myObj)}` , `values together with keys and values : ${Object.entries(myObj)}`])

// ********************* IMPORTANT NOTE :   NOTE: This will give an array 

console.log(typeof Object.keys(myObj))

//  ***************************************** IMPORTANT
// destructing object

const key = Symbol(101)
let game = {
    name:"anuragTyagi",
    userName:"MiniNinja",
    Plan:"Valid",
    Password: true,
    passwordId: 11,
    [key]:"required"
}

//  Now if we need to print username or anything from this object then we have to do like this again and again : console.log( game.userName )

// if we need to print userName from game object 100 times then the real hussle starts so to avoid this we can assign userName from game object a constant or variable with reference to game object 
// Example:
/* THIS IS MOST IMPORTANT FOR INTERVIEWS */
const {userName} = game
console.log(userName)

// now we can also do userName to any kind of const name 
// LIKE THIS

const {userName: harry} = game
console.log(harry) 
