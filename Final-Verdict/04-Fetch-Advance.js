fetch('url', {}) // { any object }
// Hum fetch ke saath kuch aur bhi bhej sakte hai , kai barr hume kisi url ( API in technical terms ) ko fetch karte huye kuch authenticaitons se related keys bhejni padti hai taaki hum jo chahte hai uss api se data receive karna vo aa sake , jaise maan log uss api me authenticaion laga ho to hum password bhi bhej sakte hai 

fetch('https://api.github.com/users/anuragtyagi-dev', {
    header: {
        Authentication: {
            Token
        }
    }
})
.then( function( data){
    console.log(data)
    return data.json()
})
.then( function( data){
    console.log(data)  // as variable data is in functional scope , it can be use here as well 
})
.catch( function( error){
    console.log( error)
})