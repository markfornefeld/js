//switch statements
var marginOfWins = 1;
var result

switch(marginOfWins) {
	case 1:
	case 3:
	case 4:
	case 5:
		result = "Cool, that will be fun";
		break;

	case 7:
		result = "Awesome game";
		break;

	case 9:
		result = "Probably a close game"
		break;

	case 14:
		result = "Beat Down!";
		break;

	case 17:
		result = "At least the commercials were fun"
		break;

	default:
		result = "Tom Brady super bowl blocks the colts all the time!"
}

console.log("Switch Result: " + result);