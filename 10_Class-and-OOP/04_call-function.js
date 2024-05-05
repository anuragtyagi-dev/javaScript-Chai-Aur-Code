
function user(username){
    this.username = username
    return this
  }

function createUser(username, userEmail, userPassword){
    this.username = user(username)
    this.userEmail = userEmail
    this.userPassword = userPassword
}

const userOne = new createUser( `Anurag Tyagi`,`anuragtyagi@google.com`,`MiniNinja@GOOGLE`)

console.log(userOne)

// ______________________________________________________________________________


function user(username){
    this.username = username
    return this.username
  }

function createUser(username, userEmail, userPassword){
    this.username = user(username)
    this.userEmail = userEmail
    this.userPassword = userPassword
}

const userOne = new createUser( `Anurag Tyagi`,`anuragtyagi@google.com`,`MiniNinja@GOOGLE`)

console.log(userOne)

// _________________________________________________________________________________


function user(username){
    this.username = username
   }

function createUser(username, userEmail, userPassword){
    this.username = new user(username)
    this.userEmail = userEmail
    this.userPassword = userPassword
}

const userOne = new createUser( `Anurag Tyagi`,`anuragtyagi@google.com`,`MiniNinja@GOOGLE`)

console.log(userOne)

// _________________________________________________________________________________


function user(username){
    this.username = username
    
  }

function createUser(username, userEmail, userPassword){
    user.call(this, username)
    this.userEmail = userEmail
    this.userPassword = userPassword
}

const userOne = new createUser( `Anurag Tyagi`,`anuragtyagi@google.com`,`MiniNinja@GOOGLE`)

console.log(userOne)