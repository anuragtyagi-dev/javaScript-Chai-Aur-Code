

    // Object.prototype.toString() 

    // This Method is use to show string values of anything , but if the element is of object dataType it returns " Object Type " , and here " Type " is object type , in case of standard object , type is object so while using toString() method on Object , the OUTPUT : [ Object Object ] 
    //EXAMPLE:

      const user = {
         username: "ANURAG TYAGI",
         userEmail: "GOOGLE"
      }
      console.log(user.toString()) // OUTPUT: Object Object 

      /* 
      NOTE: It will return [ Object Object ] only when toString() method is used on Object , otherwise it will give values as string , if use in function 
      */
      //EXAMPLE:

      const userOne = {
         username: "ANURAG",
         greetings: function(){
            console.log(`HELLO`)
         }
      }

      console.log(userOne.greetings.toString()) // NOW it will show whole function what written inside in a function , its usefull when we need to see what a particular function is doing , what does written in that function

      // ************************* IMPORTANT *********************************

      // SPECIAL EXAMPLE ::

      const userTWO = {
         username: "ANURAG",
         greetings : function(){
               console.log(`${this}`) // when using template literals ${} , if it has object inside its value then it will use toString() method , template literal use karte huye agar hum kuch bhi uske andar daalte hai to vo toString() method ko use karta hai , aur agar abh hum iske andar object daalenge to toString() method object ko Object Type me return kardega jiska ouptup [ Object Object ] hoga , to jaise humne isske andar abhi this dala hai , to yaha this object userTWO ko refer kar raha hai , to isska output [ Object Object ] hoga  
         }
      }

      userTWO.greetings() // OUTPUT: [ Object Object ]

      // ******** LEKIN 

      console.log(userTWO.greetings.toString()) // Lekin yaha toString() method use karne se poora function ( aur method , function inside an Object ) show ho jayega ki iska andar kya kya likkha ( code ) hai. kyuki yaha toString() method directly hum function greetings pe laga rahe hai to toString() method function greetings ko refer kar raha hai 


      // ___________________________________________________________________________

      // JSON.stringify()

      // yeh use hota hai jab hume object ke andar ka sara data dekhna ho , JSON.stringify() method ke andar keval data hold hota hai naa ki koi bhi function/method , matlab , JSON.stringify() method usekroge to vo kisi bhi Object ke andar kya enumerable data hai vo show kara dega, ( enumerable matalb ,jisko count kar sake ) and javaScript me function/method ko enumberable nahi mana jata to JSON.stringify() method me functoin/method show nahi honge

      //EXAMPLE:

      const userThree = {
         username:"ANURAG",
         greetings: function(){
            console.log(` ${JSON.stringify(this)}`)
         }
      }

      userThree.greetings() // OUTPUT : username:"ANURAG" , kyuki abhi userThree Object me keval ek hi property/key hai username to vahi show ho rahi hai ,and ek function hai greetings but kyuki function is not enumerable in javaScript and JSON.stringify() can only hold data and not function/method because function and method are not enumberable


      