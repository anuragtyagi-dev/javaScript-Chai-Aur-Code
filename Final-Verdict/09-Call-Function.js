

  // so to call a function2 inside function1 that is doing something outside function1 and function1 is behaving as constructor for instances of Objects , then to provide this context of function1 as function1 is behaving as constructor function which instances of object are being constructed , we use .call while calling function2 , in .call method which is use to call function , it can provide current this context with argument so that our argument is travel as parameter for function2 and after doing something that we want with that argument from function2 we return the value as set the value in our function1 this context , 
  
  // EXAMPLE: 


  function setUsername( username){
    // our complex calculation 
    this.username = username
  }
  function creatingUser( username, userEmail, userPassword){
    setUsername.call( this, username)
    this.userEmail = userEmail
    this.userPassword = userPassword
  }

  const userOne = new creatingUser("ANURAG", "GOOGLE.COM", "MiniNinja")

  console.log(userOne)