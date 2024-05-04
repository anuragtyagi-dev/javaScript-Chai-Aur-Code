
function mango(username){
  this.username = username
  return this.username
}

function createUser(username, userEmail, userPassword){
 
  this.username = mango(username)
  this.userEmail = userEmail
  this.userPassword = userPassword
}

const one = new createUser("Anurag", "GOOGLE.COM", "MiniNINJA")

console.log(one)