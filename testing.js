

 fetch('https://api.github.com/users/hiteshchoudhaty')
 .then( function(data){
        return data.json()
 })
 .then( function(data){
    console.log(data)
 })