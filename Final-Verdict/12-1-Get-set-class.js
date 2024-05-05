class user {
    constructor(username){
        this.username = username // this.username = username karna jaruri hai , kyuki class user ke prototype yaani jab new instance object banega class user ko refer karke tab iske this object me to kuch properties method pair ya keys value pair hona chaiye naa tabhi to uss new instance object se getter and setter kuch get aur set kar paenge 
    }

    get username(){
        return this._username = `NOT ALLOWED`
    }
    set username(value){
        this._username = value
    }
}

let one = new user("ANURAG")
console.log(one.username)