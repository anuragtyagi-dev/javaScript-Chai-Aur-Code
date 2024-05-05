// for of loop is not iterable for Object 
// but ...................... can be made iterable 😋\

let myObj = {
    username: "mini ninja",
    userid: 1,
    mango: function(){
        console.log(`MAIN kaha hu yaha , hehehe 😋`)
    }
 }

 for( let [key,value] of Object.entries(myObj)){
    // if(typeof value !== 'function' ){
        console.log(key ,":", `${value}`)
    // }
 }
 // ${value} converts toString() OUTPUT: sabh kuch joo is function mango me adar likha hua hai , matlab jab loop ki baari aaegi mango function ko print karne ki tab kyuki template literal use kia hai aur vo function mango ko refer kar raha hai to toString() method function mango ke adar ka sara string me print kara dega console pe 


 let myObj = {
    username: "mini ninja",
    userid: 1,
    mango: function(){
        console.log(`MAIN kaha hu yaha , hehehe 😋`)
    }
 }

 for( let [key,value] of Object.entries(myObj)){
    // if(typeof value !== 'function' ){
        console.log(key ,":", value)
    // }
 }

 // value , only shows [Function] in console 
