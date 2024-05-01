
const accountId = 77
let accountEmail = "anurag@tyagi@gmail.com"
var accountCity = "Mumbai"
accountBranch = "BOB" // This practice is not recommended for declaring variables BUT! this can happen , meaning that variable can also be declared without prefix let or var

let accountPassword;

console.table([accountId, accountEmail, accountCity, accountBranch,accountPassword])

/* Note: The values saved in const cannot be changed 
we can write them as if we are / can changing them but 
compiler i.e. node after compiling the sourceCode reads and 
shows error */

/* var is no longer recommended for saving or assigning variables as due to issues with block scope and functional scope which means variables assigned using var cannot behave within the defined function scope that cause issue with the code as same named variable which is used in a particular function can be reassigned outside that function */


/* console.table([variableName, variableName2, "String"]) this syntax of console can be use for printing data in console in tabular form instead of console.log if we have multiple variables or data to print */

