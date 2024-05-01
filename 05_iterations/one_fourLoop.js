// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and outer loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}

// NOTE : break is use to break the control flow , meaning agar hum kisi bhi loop me , ya if me , ya switch case me break laga de to uske baad vala code execute nahi hota , control uss particular (loop, switch case , if ) se bahar aajata hai

// NOTE: continue , continue use karne se , jis condition pe continue lagaya hota hai vo bas condition ke andar execute hoti hai and condition ke bahar aane ke baad vo skip ho jati hai and baaki poora loop vaise hi run karta hai jaise karna hota hai
//Example (above code): jaise humne continue lagaya hai ek condition (if index == 5) pe , to kya hoga jaise hi loop me index ki value 5 hogi , then vo condition se match hogi and condition ke andar ka code execute hoga and fir control continue ko read karega and then continue bolega ki abhi iss index ki value se jo loop me hona tha usko skip kardo ( yaani , if ke bahar aane ke baad loop me jo bhi code ho ga vo nahi chalega index ki value 5 ke liye ,) then directly control index ki value updation me jaega ( yaani , index++) , and fir loop ki condition se match karega ( yaani, index <= 20 ) and fir loop ke andar jaega. ( yaani fir loop vaise hi normal tareeke se kaam karega jaise karna tha )