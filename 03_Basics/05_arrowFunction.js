// before starting arrow function , we need to clear the concept of this keyword

// this keyword , ka use tab hota hai jab hum kisi object ko refer karke uske context me uski values ki baat kar rahe ho
// example;

// let obj1 = {
//     username: "anuragTyagi",
//     userId: 11,
//     welcomeMessage: function(){
//         return console.log(`welcome back ${this.username} sir, good to see you`)
//     }
// }
// obj1.welcomeMessage()

// obj1.username = "Stark"
// obj1.welcomeMessage()

// Another Example:
/* 
let user = {
    username: "anuragTyagi",
    userID : 11,
    userWelcomeMessage: function(){
        return console.log(`Welcome to the oasis ${this.username}, your id is :`, this.userID)
    }

}

console.log(user.userWelcomeMessage())

*/

//_______________________________________________________________________


// So this keyword ko use tab karte hai jab hum kisi object ke andar ki values ko refer karna chahte hai 

// ******************** IMPORTANT FOR INTERVIEWS

// this ki value browser me aur node enviroment me kya hai ?

// what is node envrionment and why are we able to use it for coding in javaScript
// ANS: phele javaScript ko chalana keval browser me padta tha , kyu ki javaScript ko chalane ke liye jo engine hai (complier aur interpreter) vo keval browser ke pass hi tha, phir javaScript ko chalane ke liye jo engine chaiye vo browser se nikal lia gya aur vaisi hi ek copy banai taaki javaScript pe programming keval browser pe hi naa kar sake , bakli code editors ke through terminal pe kar sake ya kahi aur jaha chahe. to nodejs ek engine hi hai jo javaScript ke code ko chala skta hai.

// abh main baat yeh hai ki , kyuki initially javaScript browser pe chalti thi aur fir jaise jaise development hui , browser ache hogaye and kuch yese features hai jo browsers allow karte hai javaScript ko use karne ke liye , un features ko browser me ek container de diya gaya jise window kahate hai , window ek object type hai

// kyuki yeh container sirf browser ke liye hai to uska node se koi lena dena nahi hai , isliye hum window object (jo ki ek container hai jisme kuch special features hai jo javaScript use karskti hai) node environment me work nahi karega.

// so , this ki value (kyuki abh hume pata hai ki ek particular object ki internal values ke context be refere karne ke liye use hoti hai) in node ek empty object degi

// and , this ki value in console of browser window object degi jisme kaafi saare methods hai jo hum use kar skte hai in javaScript 

//_______________________________________________________________________


// Arrow function 

// () => {} // This is a basic arrow function, we can save this in a variable or constant
// const one = () => {}

// agar arrow function me keval kuch return hoo raha hai to hum usko single line me bhi likh sakte hai , this is know as implicit return arrow function

// (num1, num2) => num1+num2
//Abh yeh to ek number tha , agar hume ek object return karana hai to hum kaise likhenge

// () => ( {username:"anuragTyagi",} ) 
// iss case me hume parenthesis () ka use karna pada , and it is recommended that if your'e using implicit return arrow function , then use parenthesis instead of just writing it 

// ******************************* IMPORTANT FOR INTERVIEWS

// this ki value of global scope , in node environment (code scope) is empty object
// Example:
console.log(this)

// this ki value of global scope , in browser console environment (core scope) is window object

// this ki value in function ( which is a dataType of object ) gives methods (useful objects to use) 

// this ki value in arrowFunction ()=>{} is empty object

const one = ()=>{
console.log(this)
}
one()

// NOTE: par hum funtion ke andar banai apni values ko this se access nahi kar sakte , keval object ke andar hi kar sakte hai , kyuki function (es5) ka return type object ( object function ) hai but jab tak hum function ko object me convert na kardee tab tak function ka behaviour function hi rahega.


