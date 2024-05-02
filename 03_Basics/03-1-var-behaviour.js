
// var behaviour in javaScript 

// jab bhi hum var ko declare karte hai to var jis line pe declare hua hai usko compiler kuch aise dekhta hai , ki var ko compiler to of the nearest scope me bhej deta hai aur uss line jaha var declare kia hai humne vaha tak ka sara line ka code agar uss var ke element ko call karta hai to vo undefined dega , kyuki compiler ne uske read yese kiya hai ki var top of the scope hai and vaha keval var declare hua hai naa ki uske element ki values defined , aur jis line pe humne actually define kia tha var ko vaha compiler dekhta hai ki var ki value actually define yaha hui hai.
//Example : 

function user(){
    console.log(one)
    var one = 100
}
user()

// Abh compiler isko yese dekh raha hai

function user(){
    var one;
    console.log(one) // yaha var one jab humne call kia ,to keval declared hai naa ki uske element ki value defined 
    one = 10 ; // abh jaha hume actually me apne code me var ko declared kia tha jis code line ke badd ( console.log(one) ) uske baad compiler dekhta hai ki yaha var ki value declared hui hai to isske baad jab bhi yeh var one call hoga to iski value jo declared ya assigned hai vahi show hogi jaise normally let aur const me hoti hai 
}

// NOTE : iss behaviour ko kahate hai hoisting 

// NOTE : let , const bhi hoisting karte hai par kyuki vo initialized nahi hote before declaration to var ki tarah behave nahi kar pate , jis vajah se error aata hai

