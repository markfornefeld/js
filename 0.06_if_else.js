var elevatorUp = true;
var elevatorDown = true;
var elevatorOpen = true;
var elevatorBroken = false;
var elevatorStuckAndWeAreFreaking = true;
var elevatorNum = 13;

if (elevatorUp === true) {
	console.log("going up");
} else {
	console.log("going down");
}

if (elevatorBroken) {
	console.log("Use the stairs ya bum");
} else {
	console.log("Enjoy our sophisticated elevator");
}

if (elevatorStuckAndWeAreFreaking) {
	console.log("Is this a Night Shyamalan movie?");
} else {
	console.log("It was dream");
}

if (elevatorBroken && elevatorStuckAndWeAreFreaking) {
	console.log("Oh noes");
}