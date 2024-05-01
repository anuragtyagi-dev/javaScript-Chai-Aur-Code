// refer VIDEO 25

// javaScript run jab karti hai to vo 2 thareeke se karti hai 
// javaScript code ko kaise run karegi useko bolte hai javaScript Execution Context 
// NOTE: javaScript code ko 2 way me run karti hai 
// First: GLOBAL Execution or GLOBAL Enviroment
// Second: Functional Execution or Functional Environment
// third but global me hi aata hai : eval execution

// to jab bhi hum javaScript ke andar code likte hai , to useko khate ke hai javaScript Execution context
// Firstly
// to sabse phele poora code save hota hai global execution me , aur usko ek variable de dia jata hai this , and this ki value in browser global scope or CORE scope or CORE environment me window ho ti hai 

// Secondly 
// useke baad , vo poora code jata hai functional execution me , functional execution me 2 phase hote hai                           First: Memory Phase                                                 Second: Execution Phase 

//                          NOW understanding Phases 

// jab koi code run kia , and uske jitne bhi variables or constants hai vo saare memory phase me jaate hai and unn sabko phele undefined value assigned kardi jaati hai .
// agar code me function ( if , loop, functions, ) hai to unsabko unka reference ( jise definition bhi bolte hai ) assign hota hai ( instead of undefined like variables and constants )

// fir baat aati hai execution phase ki , to jitne bhi variables the un sabko unki value ( jo user ne assigne ya declare ki thi ) assigne kardi jaati hai 
// lekin jab function ko call kare hai aur useme arguments pass karte hai tab uss particular function ke liye ek alag execution context create hota hai ( jisme new variable environment aur ek thread hota hai )
// yeh alag execution context same humare main execution context jaisa hi hota hai jisme 2 phase chalenge ( Memory phase , and Execution phase )

// TO javaScript me code yese run hota hai 

// _________________________________________________________________

// NEXT TOPIC : call stack

// javaScript me saare code call stack pe run karta hai aur stack hamesha line by line hi execute hota hai
