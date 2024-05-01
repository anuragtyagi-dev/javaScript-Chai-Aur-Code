
// function getter and setter 
function user(username, email) {
    this._username = username
    this.email = email
    Object.defineProperty(this, 'username', {
        get: function () {
            return this._username.toUpperCase()
        },
        set: function (value) {
            this._username = value
        }
    })
}

const One = new user("Anurag Tyagi", "anurag@google.com")
console.log(One.username)
// _______________________________________________________________________________

//  class getter and setter 

class user {
    constructor(username) {
        this.username = username
    }

    get username() {
        return ` ${this._username} ANDWHATYOUTHINKING`
    }

    set username(value) {
        this._username = value
    }
}

const ONE = new user("Anurag Tyagi")
console.log(ONE.username)

// _________________________________________________________________________________

// Object getter and setter , but generally not use in Production level CODE

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

