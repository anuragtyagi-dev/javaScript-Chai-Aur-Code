function creatingUser(username, userEmail, userPassword){
    this.userEmail = userEmail
    this.userPassword = userPassword;
    
    user = function(username){
        this.username = username
    
    }.bind(this)

    user(username)
}

console.log(new creatingUser("ANURAG", "GOOGLE.COM", "MINI NINJA"))
