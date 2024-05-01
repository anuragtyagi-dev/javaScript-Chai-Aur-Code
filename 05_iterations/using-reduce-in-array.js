// reduce is verymuch usefull when we need to calculate the values or sum the values inside an array

// reduce tab use hota hai jab hume kisi bhi array ke andar ki values ka sum karna hota hai, example ; ek data base se array aaya jisme shopping list hai jisme products hai aur unn products ke prices hai , hume prices ka total karna hai, so forof , forin , forEach loop se efficient reduce method use karna hai

// Example:

const myObj =[
    {
        username:"Anurag Tyagi",
        shoppingProduct: "Mango",
        account:"gmail",
        userId:1,
        productPrice: 999    
    },
    {
        username:"Keshav Tyagi",
        shoppingProduct: "Strawberry",
        account:"gmail",
        userId:2,
        productPrice: 5000    
    },
    {
        username:"Sanjay Tyagi",
        shoppingProduct: "Banana",
        account:"gmail",
        userId:3,
        productPrice: 3000
    },
]

        const totalPrice = myObj.reduce( (acc ,item)=> acc + item.productPrice  , 0 )

        console.log(totalPrice)

        // NOTE: IMPORTANT FOR INTERVIEWS
        // acc = accumulator 
        // acc ko start karne ke liye function ke bahar starting value deni hoti hai , 0 , jaruri nahi value 0 hi ho , hum apne marzi ki value ko bhi de sakte hai.

        