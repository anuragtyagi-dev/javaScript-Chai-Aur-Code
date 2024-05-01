

    class user{
        constructor(username, userEmail){
            this.username = username;
            this.userEmail = userEmail;
        }
        asiding(){
            setTimeout(this.printMe.bind(this),5000)
        }
        printMe(){
            console.log(`Printing ME : ${this.username}`)
        }

    }

    const one = new user("anurag", 1010)
    // one.asiding() 
    console.log(user)