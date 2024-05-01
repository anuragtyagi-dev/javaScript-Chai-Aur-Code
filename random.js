
let calling = function (param) {
    this.param = param
}

let one = new Promise(function (resolve, reject) {
    const dataFetch = fetch("https://api.github.com/users/hiteshchoudhary")
    resolve(dataFetch)

})

let followers = one.then(function (data) {
    return data.json()
})
    .then(function (data) {
       calling(data.followers)
       
    })

const now = calling.call(this)

console.log(now)