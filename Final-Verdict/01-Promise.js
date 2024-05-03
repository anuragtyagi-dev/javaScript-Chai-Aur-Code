
// Understanding promise like supersaiyan hehe 😋

// Creating a promise , promise are object type and are use when we have to do something in asyn task

            //  EXAMPLE 1 :
let mango;

const promiseOne = new Promise( function(resolve, reject ){
    // Now we can do our async task here
  mango =   setInterval( function(username){
        console.log(username)
        resolve() // NOTE : it is interesting to see that resolve and reject are not only parameteres of function inside promise , but as we use promise , resolve and reject are both methods which are used to connect then and catch for resolvation or rejection of our asyn task inside promise , Matalab , resolve() karne se isska seedha connection establish ho jata hai promise ko call karte huye .then() method se  and we can even return something in resolve(`promise is resolved`) and reject(`promise is reject` ) and get that as parameters in .then( function (data){}) or .catch ( function (error) {})
    } , 1000, "Anurag Tyagi")

} )

promiseOne.then( function(){
    clearInterval(mango)
    console.log(`Your Asyn Task is done , thats why your Promise is Resolved `)
} )

// __________________________________________________________________________________

// EXAMPLE : 2

// creating promise having error 

const promiseTwo = new Promise( function( resolve, reject ){
  
    let error = true;
   
    if (error) {
        setTimeout( function(){
            console.log(`Anurag Tyagi in a setTimeout Method in Promise TWO but in error `)
            reject()
       }, 1000)
    } else {
         
    setTimeout( function(){
        console.log(`Anurag Tyagi in a setTimeout Method in Promise TWO`)
        resolve()
    } , 1000)

    }

    
}).then( function(){
    console.log(`Promise Resolved`)
}).catch( function(error){
    console.log(`Promise Rejected`)
})

// __________________________________________________________________________________

//      EXAMPLE : using async and await 

//  we can use either .then() and .catch() and .finally() method to handle promise or we can use async await also 


const promiseThree = new Promise( function( resolve, reject ){
    // our async task 
    setTimeout( function(){
        console.log(`Mini Ninja`)
        resolve()
    } , 1000)
})

  async function consumingPromiseThree (){
            // await promiseThree // we can await the promise and need to store it in variable 

            const response = await promiseThree // NOTE : as promise is not a function but an Object , so we cannot write this as : promiseThree() 

            console.log(response)
  }


  // NOW if promise has error

  const promiseFour = new Promise( function( resolve, reject ){
   
    let error = false 
    if(error == false) {
        console.log(error)   
        setTimeout( function(){
            console.log(` Dealing with Promise Four using async and await `)
            resolve(`abhi resolve ke andar ek argument hai`)
        } , 2000)
    
    } else{     
        console.log(error)   
        setTimeout( function(){
            console.log( ` Dealing with Promise Four using async and await ( IN ERROR )`)
            reject()
        } , 2000)
    }

    })

   async function consmuingPromiseFour () {
      
    
    try{
            const respone = await promiseFour
            console.log("RESOLVE  ", respone)
        }
        catch (error) {
            console.log("ERROR  ", error)
            
        }
   }
consmuingPromiseFour()


// **************************************** IMPORTANT 

/*

A Promise in JavaScript is an object that holds the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is always in one of these states:

1. Pending: The Promise's outcome hasn't yet been determined, because the asynchronous operation that will produce its result hasn't completed yet.
2. Fulfilled: The asynchronous operation has completed and the Promise has a resulting value.
3. Rejected: The asynchronous operation failed, and the Promise will never be fulfilled. In the rejected state, a Promise has a reason that indicates why the operation failed.

*/