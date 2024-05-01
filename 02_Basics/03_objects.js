// Object can be declared mainly in two ways 

// First: object literalls 
// let myObj = {}

// Second: constructor way (known a singleton) Singleton is defined as when the object is declared in a form that it is of a unque type , matalb uss particular type ka object unique hai poore code me , vaise object again declare nahi kar sakte. generally , when declaring object as constructor , it is of singleton type 
// let singletonObject = Object.create()

// ______________________________________________________________________

// object literalls

// let user = {
//     key: "valueifString",
//     key: valueifNumber,
// }
// IMPORTANT FOR INTERVIEWS
// NOTE: in object , we have powers to define keys which holds value of anykind (Number, String, Boolean, undefined, Symbol, Null, BigInt) not like ARRAY that can only be access through index , meaning in Hindi: objects me humare pass yeh skati hoti hai ki hum value ko hold karne vale index ko bhi kuch naam de skte hai taaki jab un object ke andar ki value ki kabhi jarurat pade to hum directly unko apne dwara dia gay assigned naaam se access kar sake , array ki tarah nahi ki keval index ke through hi access mil skta hai.

/* 

NOTE: yeh key jo hai object ki , vo actualy me String hai , meaning for example : let user = { name: `Anurag` } , imagine agar name koi keyword  hai javaScript me to compilier agar usko code execution me find karega to error aayega. , isliye , javaScript me object hume yeh skati bhi dete hai ki hum yaa to keys ko yese likhe "name" ya yese bhi likh sakte hai name

*/

// ______________________________________________________________________

const mySym = Symbol("Key1")
const mySym2 = Symbol(11)

let car = {
    name: `Fortuner`,
    "harry": "potter", // Now agar hum khudse key ko string me likhenge to usko . se access nai kar sakte, access karne ke liye hume ["iske andar vo string ka naam likhna padega"]                        example: console.log(car["harry"])

    [mySym]: "myKey", // kuch yese key bhi hume kaibar use karni padti hai jinki value ka hume reference chaiye , to kyu ki by default object ki key ek string hai to hume yaha batana padta hai ki iss particular key ko reference value ki tarah treak karo jiski value hum pheli hi kahi define or declare kar chuke hai. NOTE: park iski value vahi rahegi jo humne declare kari hai only key ki value jo phele hi declared hai vo ho jayegi                                example: [mySym] ki jagah aayega 'Symbol("Key1")' aur value vahi rahegi "myKey"

    brand: `Toyota`,
    Manumonth: "April",

}
// console.log(car["harry"])
console.log(car)
console.log(car[mySym])


// console.log(car.name)

// _____________________________________________________________________

let userHarry = {
    name: "Harry",
    fullName: {
        userName: {
            fullUserName:"Harry Potter"
        }
    },
    doesKnowMagic: true,

}

console.table(`All values of userHarry : ${userHarry}`)