const user = {
    _mango: "google.com",
    password: "mini Ninja",

    get email(){
        return this._mango.toUpperCase();
    },

    set email(value){
        this._mango = value;
    }
}

const one = Object.create(user);
console.log(one.email);  // Outputs: GOOGLE.COM
