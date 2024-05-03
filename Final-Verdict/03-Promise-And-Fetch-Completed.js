//  PROMISE AND FETCH UNDERSTOOD LIKE SUPERSAIYAN 🔥
// TO handle async operations we have mulitple ways 

// EXAMPLE 1 : Using Promise Object 
/* Comment Here

const promiseOne = new Promise( function( resolve, reject){
    // async task
    let error = true // just for understanding purpose  
    if(error){
        console.log(`Error Occured`)
        reject()
    } else {

    setTimeout( function(){
        let username = {
        username : "Anurag Tyagi"}
        resolve(username)
    }, 1000)
}

})

promiseOne.then( function(data){
    console.log(data)
}).catch( function(error){
    // console.warn(error)
})


Comment Here */ 
// _______________________________________________________________________________


// Example 2 : using promise with async await 
/* Comment Here
const promiseTwo = new Promise( function( resolve, reject ){
    // async task
    const mine = fetch('https://.github.com/users/hiteshchoudhary')
    resolve(mine)
})

    async function mango(){
        try {
            const response = await promiseTwo
            const data = await response.json()
            return data ; // to return data to .then() method
        }
        catch(error){
            console.log(error)
            // throw new Error(error) // to return error in .catch() method we use throw keyword , it can either be use throw error or throw new Error(error) 
        }
    
    }

    mango()
    .then( function(data){
        console.log(data.followers)
    })
    .catch( function(error){
        // console.log(error)
    })

    console.log(`THIS IS DONE`)

*/
const promiseOK = new Promise( function( resolve, reject){
    setTimeout( ()=> { 
    console.log(`Anurag Tyagi`); resolve() 
    }, 1000)
}) 
promiseOK.then( ()=>( console.log(`Hello`)))


fetch('https://api.github.com/users/hiteshchoudhary')
.then( function (data){
return data.json()
})
.then( data => console.log(data.twitter_username) ) 


// _________________________________________________________________________________

async function fetchingURL(){
try {
const response = await fetch('https://api.github.com/users/anuragtyagi-dev')
const data = await response.json()
return data;
}
catch(error){
throw error;
}
}
fetchingURL().then( function(data){
console.log(data.followers)
}).catch( function(error){
console.log(error)
})

