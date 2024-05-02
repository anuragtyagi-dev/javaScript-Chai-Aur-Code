let myObj = {
    name:"anuarg",
    email:"anurag@google.com",
    userID: 11,
    userLoggendIn: true,

}

// console.log( Object.entries(myObj)[0] )
// Object.entries(myObj)[0]

for ( const value of Object.entries(myObj) ){
    console.log(`${value}`)
}

