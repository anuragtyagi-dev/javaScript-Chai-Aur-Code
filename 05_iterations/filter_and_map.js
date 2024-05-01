
// filter and Map

// filter are used in array , filter ko use kia jata hai array me jab array ke andar se kuch values ko return karna ho (with condition) , ya user ko vo values chaiye , it is an efficient way of getting values or data from array

// example get all data from an array whose username is MiniNinja (yani , ek array hai , usme humare pass kuch objects hai users ke ( matalb users ki details hai ) usme se keval MiniNinja vale username ki saari details nikalni hai ) to filter use karke hum data ko filter out kar sakte hai.

const myArr = [
    {
        username:"MiniNinja",
        userAccount:"Harry Potter",
        userLoggedIn: true,
        userPassword: "let@google.com",
        userEmail:"working@google.com"
    },
    {
        username:"Bean Human ",
        userAccount:"Nevil LongBottom",
        userLoggedIn: true,
        userPassword: "let@google.com",
        userEmail:"working@google.com"
    },
    {
        username:"Mister Doctor",
        userAccount:"Hermioni Granger",
        userLoggedIn: true,
        userPassword: "let@google.com",
        userEmail:"working@google.com"
    }
]

    // doing this with loop
                // const dataFnc = () =>{
                //     let UserData = []
                //     for ( const data of myArr){
                //         UserData.push(data.username)
                //     }
                //     return UserData;
                // }

                    // console.log(dataFnc())

    // doing with filter

            // const allUserData = myArr.filter( (data)=> (  data.username == "MiniNinja" ) )

            // console.log(allUserData)


// Example of map , map use hota hai jab hume kisi bhi array me se koi particular data ki values return ( yaani kahi variable me save karna ho ) , (NOTE: yeh filter se different isliye hai kyuki filter tab use hoga jab koi condition lagaoge and map to keval data return karne ke liye hai ) 
// jaise main agar chahta hu ki data me se saare username nikal lu to map use hoga , aur agar chahta hu ki data me se vo poora data bahar aa jaye jisme username minininja hai to filter use hoga
// map use karna vaise hi hai jaise main forof and forin se data return kar raha tha , bas map se yeh single line me hi hogya


const allUserData = myArr.map( (data)=> (  data.username ) )

            console.log(allUserData)
