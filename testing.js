function user(username){
    this.username = username
  }
  
  function creatingUser(username, userEmail, userPassword){
    this.userEmail = userEmail
    this.userPassword = userPassword;
    user.call(this, username)
  }
  
  console.log(new creatingUser("ANURAG", "GOOGLE.COM", "MINI NINJA"))
  