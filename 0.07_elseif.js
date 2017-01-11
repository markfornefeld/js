var age = 21;

if (age >= 21) {
	console.log("you can drink");
} else if (age >= 18) {
	console.log("you can vote");
} else if (age >= 25) {

} else {
	console.log("you can not drink");
}

console.log("------------------------");
var isLoggedIn = true;
var firstName = "Doug";
var isAdmin = false;
var isManager = true;
var isEmployee = false;

if (isLoggedIn) {
	console.log("Welcome " + firstName);
	if (isAdmin) {
		console.log("Admin Panel");
	} else if (isManager) {
		console.log("Manager Panel");
	} else if (isEmployee) {
		console.log("Employee Panel")
	}
} else {
	console.log("Bad account info");
}
