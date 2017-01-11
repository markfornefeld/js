var firstName = "James";
var message = firstName + ": " + 55;
var num = 55;
console.log("-------------------");
//typeof will return what type (number, string)
console.log(typeof message);
console.log(typeof num);

console.log("-------------------");
var lastName = 'Handshoe';
console.log(typeof lastName);
var greetings = "How's Your Day?";
console.log(typeof greetings);

// the \ character allows nested '' or ""?
var kennGreet = 'Kenn says, "How\'s your day?"'
console.log(kennGreet);

console.log("-------------------");

/***************String Methods********************/
console.log("The number of characters in greetings are: " + greetings.length);
console.log(greetings.toUpperCase());
console.log(greetings.toLowerCase());
console.log(greetings.split(" "));
var jamesEmail = "jhandshoe@elevenfifty.com";
console.log(jamesEmail.split("@"));
console.log("----------------------");
var school = "Prairie Heights";
var gradYear = 1999;
var space = " ";
console.log("I went to" + space + school + space + "and graduated in" + space + gradYear);






