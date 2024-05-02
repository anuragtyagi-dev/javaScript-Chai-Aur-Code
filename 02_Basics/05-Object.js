

var one = 1
var object = (function(){
    delete one;
    return one ;
} ) ();
console.log(object) // NOTE : delete keyword doesn't affect or delete var , const and let

//  delete keyword can only be use to delete key or property from an object 

// EXAMPLE : 

var myObj = {
    username : "Anurag",
    LOGO : "LOGO"
}
delete (myObj.username)
console.log(myObj)