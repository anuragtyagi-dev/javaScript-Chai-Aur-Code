

        // function user(username){
        //     this.username = username
        // }

        // user.call(this, username)

        function creatingUser(username, userEmail, userPassword){
            this.userEmail = userEmail
            this.userPassword = userPassword;

            (function mango(username){
                this.username = username
            }) .call(this, username)
        }

        console.log(new creatingUser("ANURAG", "GOOGLE.COM", "MINI NINJA"))