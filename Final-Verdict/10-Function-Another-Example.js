
function user(username, userEmail){
    this.username = username
    this.greetings = function(){
      console.log(`HELLO ${this.username}`) // this.username inside greetings function still referes to the username from above this.username = username because , unlike regular function or arrow function which we directly declared , here , we declared greetings function using this.greetings , so it is technically now a part of Object instance constructed using constructor function user. so actually greetings function is a part of object ,or every object instances create using user constructor function.
    }
   }

   const one = new user("ANURAG")
   console.log(one.greetings()) 