const account_ID = 144553;
let account_Email = "sahilpatil9763@gmail.com";
var account_Password = "12345";
account_City = "Navi Mumbai";
let account_State;


// account_ID = 2; // not allowed

account_Email = "sa@123.com";
account_Password = "1563";
account_City = "Karad";

console.log(account_ID);

/*
    Prefer not to use var because of issue in block scope and functinal scope
*/

console.table([account_ID, account_Email, account_Password, account_City, account_State]);