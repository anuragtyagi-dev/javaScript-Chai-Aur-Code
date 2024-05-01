// we can add multiple map and filter together 
// example:

const myArr = [1, 2, 3, 4, 5]

    const ari = myArr.map( (num) => (num *10) ).map( (items)=>(items+1) ).filter( (itemss)=>(itemss>41) )

    console.log(ari)

    // yese hi hum multiple map aur filter laga sakte hai kisi bhi array pe , and yeh forof , forin , forEach loop se easyily access karne ka tareeka hai array ke andar values ko.
    // NOTE: jo parameters hum map aur filter ke andar le rahe hai vo same hona jaruri nahi hai , kyuki vo to sirf variables hai jo keval usi scope me declare huye hai.

    