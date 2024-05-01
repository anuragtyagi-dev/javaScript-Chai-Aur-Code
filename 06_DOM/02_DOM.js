// Video 31 and 32:

// html kaha hota hai , kyuki hume pata hai , saara code phele global execution me jata hai , to sabse phele HTML ( jo ki browser pe hota hai ) vo browser ke global execution me jaega and global excution me usko this variable assign hoga and this variable ki value in CORE Environment ( ya browser me ) / ( browser ke global scope me ) window object hoti hai jisme kaafi saare methods ( features to use ) available hote hai.

// abh window ke andar ek document method bhi hota hai jisme porra HTML element saved hota hai website ka , ( HTML ke andar 2 child hai Head , and Body)

// Summary: Window -----> Document -------> HTML
// HTML ------> HEAD 
// HTML ------> BODY

// NOTE : yese hi fir head ke andar jitne elements honge vo sabhi hote hai aur similarly body me bhi , yaa to text node ya aur elements (jaise h1 tag ke andar likha hai HELLO aur usi ke andar span tag bana dia aur fir span ke andar likha world , to h1 ke andar hua ek text node HELLO aur ek element span  , aur span tag ke andar hua ek text node WORLD , ( text node ka simply yeh matlab ki kya likha hua hai uss tag me )

// ************************************** IMPORTANT 
// DOM Manipulation

// HOW TO SELECT ELEMENTS of HTML

// getElementById('id ka naam')

// getElementsByClassName('class ka naam')
// NOTE: humne yaha directly class nahi likha balki classname likha hai taaki jab hum HTML likhe javaScript me in React ( jisse JSX bolte hai ) tab jab hum class select kare to conflict naa hoo

// NOTE : getElement by id ya class dono hi hume HTML collection return karte hai , hum chahe to issko kisi bhi variable me save kar sakte hai , const mySaving = document.getElementById('heading')                   par main baat yeh hai ki , jab hum isse use karenge to yeh unn sabhi elements ya tags ko return ya select kardega jinki Id ya class ( jo humne dala hai , matlab getElementById ya getElementsByClassName ) ko select kardega , iska matlab jin jin tags me humne same ID ya class ka attribute likha hai vo sab select hojaengi and kyuki sab select hui hai to humne ek array jaisa structure retrun hoga |NOTE: array jaisa , naa ki array , vo pure array nahi hai, matlab hum usme array jaise forEach , ya map loop nahi laga sakte | yeh ek HTML collection milega , agar humko iske elements ko change karna hai to humne isko phele array me convert karna hoga ( by using Array.from() method se ), usske baad vo ek pure array ban jaega and now we can use forof forin forEach map loops 

            //              SECOND SELECTION WAY

                // document.querySelector('tag')
                // document.querySelector('#id')
                // document.querySelector('.class')
                // document.querySelectorAll('tag')

                // NOTE: document.querySelector hume ek node list return karta hai , node list bhi array like hai naa ki pure array , bas difference yeh hai ki node list hume forEach loop lagane deta hai to apna kaam chal jaega

//  ********************************************************************

                // now for changing HTML 

                // kisi bhi element ko select karne ke baad hum useme kuch changes kar sakte hai jaise 
                
                // First: innerHTML
                // selectedElement.innerHTML = "kuch bhi likh sakte ho"
                // innerHTML se hum jo bhi kuch uss selected element ya selected tag me daalenge vo change ho jaega , iska ek feature ye hai ki agar hum chahe to uss selected tag ke andar apni marzi ka koi bhi HTML tag bhi add kar skte hai
                // Example: selectedElement.innerHTML = "<i>Hello</i>" NOTE: abh yeh Hello text ke saath saath i tag bhi add hojaega , abh innerHTML i tag ko tag hi lega naa ki text or string
                
                // SECOND: innerText
                // selectedElement.innerText = "kuch bhi likh sakte ho"

                // THIRD: textContent
                // selectedElement.textContent = "kuch bhi likh sakte ho"


                // |IMPORTANT NOTE:| : Difference between innerText and textContent
                // jaies maan lo ek h1 tag hai jisme span tag bhi hai aur span tag ko style diya hua hai display : none , abh vo directly h1 tag me nahi show hoga website pe , to innerText usi tarah keval vahi show karta hai jo show hona hota hai , aur text content poora show kardeta hai

                // innerHTML bhi poora show kardeta hai aur saath hi saath saare html tag aur inline style bhi show kardeta hai // example : <h1> hello <span style="display:none"> world </span> </h1>
