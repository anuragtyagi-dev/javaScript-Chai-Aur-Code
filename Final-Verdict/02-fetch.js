
// NOW fetch 

// *********************** IMPORTANT 

/* 
A Promise in JavaScript is an object that holds the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is always in one of these states:

1. Pending: The Promise's outcome hasn't yet been determined, because the asynchronous operation that will produce its result hasn't completed yet.
2. Fulfilled: The asynchronous operation has completed and the Promise has a resulting value.
3. Rejected: The asynchronous operation failed, and the Promise will never be fulfilled. In the rejected state, a Promise has a reason that indicates why the operation failed.

When we make a fetch request, it returns a Promise that resolves to the Response to that request, whether it is successful or not. This is specific to the fetch API and it's not how all Promises work. 

In many situations, if an error occurs (like network error), the Promise will be rejected. But the fetch API only rejects a Promise when a “network error is encountered, although this usually means permissions issues or similar.” Basically fetch Promise doesn't reject on HTTP error status even if the response is HTTP 404 or 500. On the other hand, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.

That's why checking the ok property of the Response object is very crucial when working with fetch API, to correctly handle unsuccessful requests. If the fetch request isn't successful, the ok property of the response object will be set to false.
*/

fetch('https://api.github.com/users/hiteshchoudhary')
.then( function(data){
    return JSON.parse(data)
}).then( function (data){
    console.log(data)
})

