
      //  function setUserName(username){
      //    this.username = username
      //  }

      function createUser(username, userEmail, userPassword){
        const mango = (username)=>{
         this.username = username
         // return 
        }
        username = mango(username)
        console.log("HELLO ",username)
        this.userEmail = userEmail
        this.userPassword = userPassword
      }

      const one = new createUser("Anurag", "GOOGLE.COM", "MiniNINJA")

      console.log(one)

      createUser()

      // EXPLANATION : 

      /* 
       I apologize for my previous message, there was some confusion in my explanation. Let me clarify:

For the second block of code, the username inside the mango function will indeed be 'Anurag'. However, because the mango function doesn't return anything (since there's no return statement), the line username = mango(username) will assign undefined to username (since mango(username) doesn't have a return value). 

So, even though the mango function correctly assigns 'Anurag' to this.username, the username parameter itself becomes undefined due to the assignment username = mango(username). 

Therefore, in your createUser function, this.username, this.userEmail, and this.userPassword will be assigned to 'Anurag', 'GOOGLE.COM', and 'MiniNINJA' respectively, because this.username refers to the username of the new object being created, not the local username inside the createUser function.

So, when you console.log(one), it will output:
createUser {
 username: 'Anurag',
 userEmail: 'GOOGLE.COM',
 userPassword: 'MiniNINJA'
}


Again, apologies for any previous confusion.
      */