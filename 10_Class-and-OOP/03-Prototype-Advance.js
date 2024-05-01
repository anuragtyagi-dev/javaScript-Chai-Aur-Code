
// Kuch advance prototype ka behaviour

// agar hume kisi (function , string , array, object ) me apni taraf se koi bhi property ya koi function add karna hai to hum kasie kare 

//Example: with function

    function users(name, password){
        this.name = name 
        this.password = password
    }

    users.prototype.printMe = function(){
        console.log(`Your Name : ${this.name}`)
    }

    const userOne = new users("Anurag Tyagi", "MiniNinja101")
    // console.log(userOne)

    // userOne.printMe() // so we can add and use anything (any method matlab koi bhi function jo hum bana sakte hai )

 // _______________________________________________________________________________

 // we can also add function in prototype but inside that function 
//  Example:
            function randomOne(){
                this.greeting = function(){
                    console.log(`Function is running`)
                }
            }

            const randomONE = new randomOne()
            // randomONE.greeting() 

// _________________________________________________________________________________

// similarly we can add method ( function ) and properties to array , string and even the supreme Object itselt also 

// Example with Array

                const myArr = ["SpiderMan", "HULK"]

                Array.prototype.printMe = function(){
                    console.log(`Function is running inside Array ${this[0]} `)
                }
                   
                // myArr.printMe()

                 // NOTE: now this function printMe will works on every array

                const arrTwo = ["IronMan", "HarryPotter"]

                // arrTwo.printMe() 

                // NOTE: function can also accept parameters if provided 
                // Example: 
                /* 
                    const arr = ["harryPotter", "Goblin", 11, "SevrousSnape"]
                    Array.prototype.mineFunction = function(name){
                        if(!name){
                            cosole.log(`${this[0]}`)
                        } else{
                            console.log(`${name[0]}`)
                        }
                    }

                    // To call or use the function that has been added in array prototype but without any parameter
                    arr.mineFunction() // OUTPUT : harryPotter

                    // To call or use the function with particular argument
                    arr.mineFunction("mangoShake") // OUTPUT: mangoShake
                    arr.mineFunction(1) // OUTPUT: 1

                    arr.mineFunction(["harryPotter", "MangoShake"]) // OUTPUT: harryPotter

                    arr.mineFunction("harryPotter") // OUTPUT: h (kyuki name[0] argument hai )

                */
 // ________________________________________________________________________________

    // EXAMPLE : with String
    
                 let myname = "Anurag Tyagi                                   "
                //  console.log(myname.length)
            
                 String.prototype.trimName = function(){
                               return (this.trim().length)
                             }

    // console.log(myname.trimName())


    // also with given parameters

    const myName = "Anurag Tyagi"

        String.prototype.longest = function(name){
            if(!name){
                console.log(`True Length of your name ${this.trim().length}`)
            }else{
                console.log(`True length of give parameter ${name.trim().length}`)
            }
        }

        // myName.longest("HARRY")

// _________________________________________________________________________________

// EXAMPLE with Object

// 1st : linking two or more objects together

const myObj1 = {
    username: "chai",
    userAddress: "ChaiAurCode",
    printMe : function(){
        console.log(`Welcome Again ${this.username}`)
    },
}

const myObj2 = {
    username: "Anurag Tyagi",
    userAddress: false,
}

const myObj3 = {
    username: "Mini Ninja",
    greetings: function(){
        console.log(` HEllo World `)
    },
    __proto__: myObj1,
    
}

// Now myObj3 linked with properties of myObj1 ( meaning , all the keys of myObj1 are now accessable also to myObj3)

    // myObj3.printMe() // OUTPUT : Mini Ninja

    // console.log(myObj3.userAddress) // OUTPUT: ChaiAurCode

 // ******************************** MOST IMPORTANT NOTE : THIS CANNOT BE DONE 

//       ------>  myObj1.greetings() // This will give error in output as we cannot linked myObj1 to myObj3 as myObj3 is declared after myObj1 so we cannot link something that is declared or created after in future.


// 2nd Example , creating prototype methods (functions) directly in Object so that everything in javaScript can have access to it , because Object have supreme powers , everything returns to Object and Object returns to null , if javaScript not found the property or method that has been called

Object.prototype.UltimateFunction = function(){
        console.log(`Welcome Back Again Master`)
}

const wiit = "Anurag Tyagi" // with String

// wiit.UltimateFunction()

const jit = 1 // with Number
// jit.UltimateFunction()

const duper = ["Iron Man"] // with Array
// duper.UltimateFunction() 

const mst = {  
    username:"Mini Ninja"    // with Object 
}

// mst.UltimateFunction()

const mine = function(){                        
    console.log(`Hello @anuragtyagi_dev`)           // with Function
}

// mine.UltimateFunction() 


