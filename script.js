// Add global variables
  
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

//  Prompt message for user

window.alert("Welcome! Please click 'Generate password' to start!");

// Set dynamic variables

var Totlength = prompt("How many characters would you like your password to be?");

if(Totlength <8 || Totlength > 128){
    alert("It is recommended to have a password between 8 and 128 characters long!\nPlease start over.");
}

