const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

// just like constructor , we have instanceof also
// example :

function car(model, year, name){
    this.name = name
    this.model = model
    this.year = year
    return this
}

const auto = new car('Toyota', 2024, 'Fortuner')
console.log(auto instanceof car)// console pe true print hoga , meaning yeh yeh bata raha hai ki auto variable car function ka hi ek naya instance ( instance yaani ek naya object with reference function , example yaha reference function car ka hai aur auto ke naya instance object hai jo uska reference key-value variables le raha hai apne data store ke liye ya apne data ke reference ke liye ) )