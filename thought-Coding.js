// Anything currently trying or thinking 

// let harry = 1+1+2+"1"
// example 1
// console.log(harry) // This will print 41 ( number 1 , 1, 2 will be treated as numbers so they wiil be arithmetically calulated and then "1" will be treted as string so 4 + "string" gives string value i.e. 41)

// console.log(typeof harry) // in this you can see that the type of harry is string

// example 2
// console.log(1+1+2-"1") //This will print 3 ( 1+1+2 as they are written first inside console so they will be treated as number and then 4-"1" , now in this , "1" will be converted by compiler till number as if during conversion there's any string part such as in example 3 , then NaN will be printed untill then conversion to number happens and then that number will be subtracted so , final output will be 4-1 = 3 )

// example 3
// console.log(1+1+2-"1a") //This will print NaN (not a number)

// ______________________________________________________________________

// let a = 10
// let b = new Number()
// console.table([a, typeof a, b, typeof b, null, typeof null])
// // console.log(d)
// // console.log(typeof d)

// ______________________________________________________________________

// ********************  02_Basics/02_Array.js

// let one = 100
// let two = 200
// let three = 300
// let four = 400

// let merg1 = new Array(one, two, three, four)
// console.log(`merg1 :`,merg1)
// console.log(`typeof merg1 :`,typeof merg1)

// let merg2 = Array.of(one, two, three, four)
// console.log(`merg2 :`,merg2)
// console.log(`typeof merg1 :`,typeof merg2)


//_______________________________________________________________________

// ********************* 02_Basics/03_Objects

// let mySym = Symbol(`1Crore`)

// console.log(`value of mySym: `,mySym)
// console.log(`typeof mySym: `,typeof mySym)

// let car1={
//     name:"harry",
//     bar:`potter`,
//     email:""
// }

// console.table(car1)

// let car = {
//     name: `Fortuner`,
//     brand: `Toyota`,
//     email: 10
    
// }
// console.log(car)

// ______________________________________________________________________

// const one = () => {
//     console.log(this)
// }

// one()

// ______________________________________________________________________
// let mySym = Symbol("patronusCharm")
// let myObj1 = {
//     fullName: "anuragtyagi-dev",
//     userName: "MiniNinja",
//     [mySym]: "harryPotterKey",
//     "HiddenPower": "bhakti-hi-shakti-hai",
// }

// function onGoing(anyObject){
//     return console.log(`Your object is : ${anyObject}`)
// }

// onGoing(myObj1)
// ______________________________________________________________________

// let user = {
//     username: "anuragTyagi",
//     userID : 11,
//     userWelcomeMessage: function(name = this.username){
    
//         return console.log(`Welcome to the oasis ${name}, your id is :`, this.userID)

//     },
//     userLogo: "MiniNinja",

// }

// console.log(user.userWelcomeMessage("Tony Stark"))

// ______________________________________________________________________

// let myArr1 = [1, 2, 3]

// let myArr2 = [ 4, 5, 6]

// let total = [myArr1, myArr2] 
// // let total = myArr1.concat(myArr2)

// let myArr3 = total.flat(Infinity)
// console.log(myArr3)

// ______________________________________________________________________


// const greetingWord = "Hello World Anurag Tyagi is a DEVELOPER"

// for ( const greet of greetingWord){
//     // if( greet == " "){
//     //     continue    
//     // }
//     console.log(greet)
// }

// ______________________________________________________________________

// const arr = [2, 5, 6]

// for (const val of arr) {

//     let i=1
//     while ( i<=10 ) {
//         console.log(`${val} * ${i} = ${val*i}`)
//         i = i+1
//     }

    
// }

// ______________________________________________________________________

const obj = {
    userName: "Anurag Tyagi",
    userLogo: "MiniNinja",
    userLoggedIn: 0,
    welcomeMessage: function(){
        if(this.userLoggedIn == true){
            console.log(` Welcome back again ${this.userName} sir , your Id is ${this.userLogo}`)
        }
        else {
            console.log(`User Not LoggedIn`)
        }
        // console.log(`Execute`)
    }
}

 for ( const key in obj ){
    // console.log(key , obj[key])
 }

// console.log(obj["userName"])

// ______________________________________________________________________


const heros = ["flash", "ironMan", "doctorStrange", "spiderMan"]

for ( const name in heros ){
    // console.log(name, heros[name])
}

// ______________________________________________________________________

let myMap = new Map()

myMap.set("India","In")
myMap.set("USA","United States of America")
myMap.set("UAE","United Arab Emirates")

// console.log(myMap)

for (const name of myMap){
    // console.log(name)
}

// ______________________________________________________________________

let a = b = c =  10

if(a==b && b==c){
    // console.log("Good Morning")
}
else {
    // console.log("what's happening")
}

// ______________________________________________________________________

