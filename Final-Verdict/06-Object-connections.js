

 // To connect mulitple objects together , prototype inheritance 

 // OLD WAY 

 const one = {
    username: "ANURAG TYAGI",
    userEmail: "GOOGLE.COM",
    
  }
 
  const two = {
    salary: 8000000,
    __proto__: one // this means , ki hum two Object ko one Object ki properties/keys ka access de rahe hai , NOTE: this will not work the other way around because we cannot access two before initialization
  }
 
       
       console.log(two.username)
 
 
       // __________________________________________________________________________
 
       // MODERN WAY
 
          console.log(two.username) // OUTPUT : undefined
 
          Object.setPrototypeOf(two , one) // two ko dedo one ka access 
          console.log(two.username) // now this will work after setting above setprototypeOf and not on above on above console , it will peint undefined because we have set setPrototypeOf after that console
 