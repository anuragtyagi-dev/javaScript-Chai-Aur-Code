
let data = [
    {
        username:"Anurag Tyagi",
        userId: "1",
        userAccount: "google.mail",
        userLoggedIn:"gmail"
    },
    {
        username:"Sanjay Tyagi",
        userId: "2",
        userAccount: "google.mail",
        userLoggedIn:"gmail"
    },
    {
        username:"Keshav Tyagi",
        userId: "3",
        userAccount: "google.mail",
        userLoggedIn:"gmail"
    },
]

    // console.log(data)

    function gettingData(){
        let num=1
        let allUsers =[]
        let allUsersId =[]
        let allUsersAccount =[]
        for(const allData of data){
            allUsersId.push("Tag "+num+":" ,allData.userId)
            allUsers.push("Tag "+num+":" ,allData.username)
            allUsersAccount.push(allData.userAccount)
            num++
        }

        let allDataUsers = { note:"Tag is for reference" , UsersName: allUsers, UsersId: allUsersId,UsersAccountType: allUsersAccount }
        return allDataUsers
    }

    const now = gettingData()
    console.log(now)

    // _______________________________________________________________

    const one = ["Shaktiman", "Hero-BhaktiHeeShaktiHai", "Iron Man"]

// console.log(one)

for (const keys in one){
    console.log(keys, one[keys])
    console.log(one)
}
