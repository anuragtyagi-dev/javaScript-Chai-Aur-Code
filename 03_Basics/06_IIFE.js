// IIFE : Imediately Invoked Function Expression

// IIFE: is mainly used for two main reasons ,
// First: IIFE ka matalb hai ki yesa function jo ekdum execute ho jaye , kaai baar hum chahte hai ki jaise hi humari website load ho to kuch functions ke dum chal jaye aur apna kaam karke website ke load hone tak complete karde, isliye IIFE ki use karne se vo function immediately run ho jaega

// Second and MOST IMPORTANT Reason : kaafi baar yesa hota hai ki hum kuch variables global scope me declare karte hai and humare kuch functoins me hum kaai baar same name ke variables declare kardete hai , to hum nahi chate ki global scope me declared variables humare functional scope ko pollute kare , isiliye hum IIFE use kardete hai 

(function chai(){
    return console.log(`Hello World, What a beautiful day to CODE`)
}) () ;

// NOTE : IIFE function ko banane ke liye , normal function ko parenthesis ke andar daalo and function execute karne ke liye useke aage jaise hum ( function call karte the chai() ) keval () ek parenthesis laga do , and parameters pass karne keliye , just jaise normally karte hai vaise kardo , Example:

(function aurCode(username = "AnuragTyagi_MiniNinja"){
    return console.log(`Your username is ${username}`)
}) ("MisterDoctor01") ;

// *************************** IMPORTANT FOR INTERVIEWS

// after declaring function as IIFE , semi-colon to end the execution is necessary even in javaScript , other wise it will give error , yesa isliye hota hai kyuki IIFE run to hojaye ga but uss particular IIFE function ke baad kuch run nahi hoga kyuki complier ko abh yeh nahi pata ki IIFE ka execution khatam kab karna hai 




