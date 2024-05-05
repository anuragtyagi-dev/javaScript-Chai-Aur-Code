

     class user {
        constructor(username){
            this.username = username
        }

        get username(){
            return this.username = `NOT ALLOWED`
        }
        set username(value){
            this.username = value
        }
     }

     const one = new user("ANURAG@GOOGLE")

     console.log(one)