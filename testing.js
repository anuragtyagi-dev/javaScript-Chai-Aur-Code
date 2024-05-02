let userOne = {
    bank:"BOB",
    email: "anuarg@google.com",
}
//IMPORTANT NOTE: in this example userOne variable is declared in STACK but there values are due of OBJECT dataType , declared in HEAP memory as as a reference 

let userTwo = userOne

console.table([userOne, userTwo])

// Now if we made changes in userTwo , the data that is declared in HEAP is as due to REFERENCE TYPE made availabe to both , so it will be change to BOTH of them

userTwo.email = "anurag@microsoft.com"

console.table([userOne, userTwo])