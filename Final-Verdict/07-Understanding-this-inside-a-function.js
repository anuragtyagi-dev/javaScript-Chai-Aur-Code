// this behaviour inside a function 

// standalone function

// Example 1 :

// this , inside a function which is not a constructor function for any instance of object or even not a method of any object ( method means , function inside an Object ) will always refers to global scope , which is window in browser and global in node 

// this , inside a function which is a constructor function ( which means , an object instance is being made or constructed  with  the reference to that function ) will always refer to that object and behave like its keys/properties 

// this , inside a function which is a method of an object will also act as the context of that object 

// ********************************** IMPORTANT ************************************

// this, inside an arrow function will get that context from its parent scope 


// _________________________________________________________________________________

// So what to do if we want to call a function2 inside a function1 with this context of function1 as we are only using function1 for making instances of an Object hence only function1 here is acting as constructor function 

/*

In summary, this in JS can refer to different things based on the context: 
1. When inside an object method, refers to the object it belongs.
2. When inside regular functions, refers to the global object (or undefined in strict mode).
3. In constructor functions or classes, refers to the instance of the class.

Remember that arrow functions do not have their own this. They capture the this value of the enclosing context. 

*/


