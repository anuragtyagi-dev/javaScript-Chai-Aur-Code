

function user(id){
    this.id = id
 }

const one = user(1)
// console.log(one)

//  yeh uper vala code ka output undefined hoga , kyuki jab hum this keyword use karte hai , tab uss function ke prototype ke andar values ya variables add karte hai , initially kisi bhi function ke prototype me empty object hota hai , par jaise hi hum this keyword use karte hai , uske empty object yani prototype me this ( jo ki ek variable hai ) usse saath defined variable name ( this.variableName example this.username , this.userId etc ) store hoti hai with variable value ( example this.username = username ) 
// *********** NOTE : abh kyuki vo uske prototype me hai and prototype object ko access krne hi milta hai , to phele humne iss function ko object ki saari powers deni hogi , vaise humne pata hai ki javaScript me saari cheze ek object hi hoti matalb string bhi object pe hi end hota hai , vaise hi function bhi ek object hi hai ( object end me null pe end hota hai ) jise object function bhi khate hai, par jab tak hum function ko yeh naa yaad dila de ki vo ek pure object hi powers bhi use kar sakta hai tab tak function object ki prototype ( inheritance or prototype inheritance or prototypal ) behaviour nahi use karta

// **************** : to function ko object ki powers yaad dilane ke liye hume function ko call karte hue usse new ( new keyword naya object baana deta hai ) keyword ke saath call karna hota hai ( new functionReference example new users("username", "userId" ) ) taaki function ko yaad jaye uski object prototypal powers , abh hum isse ek variable me store / save bhi kar sakte hai 

// **************** : abh kyuki function ko yaad aagya ki uski powers object ki tarah hai , to abh function ke empty prototype me humne jo this variable store / save kia tha hum abh usse access kar sakte hai

// by default hume this variable ko return nahi karne ki jarurat , javaScript yeh humare liye kardeta hai 
// ************************************** EXAMPLE : 

function ONE (userName, userId){
    // this.userName = userName
    // this.userId = userId
    let name = userName
    let id = userId
    return (name + id)
}
// const harry = new ONE("Anurag Tyagi", 11)
// const berry = new ONE ("Berry", 10)

// console.log(ONE.prototype)
ONE.prototype.myFunction = function(){
    console.log(`This function only prints on console , Happy Printing`)
}

const harry = new ONE ("HARRY POTTER",11)
harry.myFunction()
// console.log(harry)