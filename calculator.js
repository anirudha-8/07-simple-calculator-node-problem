// process.argv --> Takes all command-line arguments as array
// for ex - node script.js 8 4 ...
// [
//    'node.exe',
//    'script.js path',
//    '8',
//    '4',
//    ...
// ]
// we want arguments after script.js i.e. at 3rd position
// hence, we slice the array.
// And get all the arguments after 2nd position
const args1 = process.argv.slice(2); // ['8', '4']

const number1 = Number(args1[0]); // 8
const number2 = Number(args1[1]); // 4

console.log(`Addition: ${number1 + number2}`);
console.log(`Subtraction: ${number1 - number2}`);
console.log(`Multiplication: ${number1 * number2}`);
console.log(`Division: ${number1 / number2}`);
console.log(`Modulus: ${number1 % number2}`);

/**

// FOR 3 ARGUMENTS
const args2 = process.argv.slice(2); // ['8', '4']
const num1 = Number(args2[0]); // 8
const num2 = Number(args2[2]); // 4
// =========================================================//
// ================ ADDITIONAL BUT NOT WORK ================//
// =========================================================//
let result;

switch (operator) {
	case "+":
		result = num1 + num2;
		break;
	case "-":
		result = num1 - num2;
		break;

	// =========================================================//
	// ========================== NOTE =========================//
	// =========================================================//
	// When you pass * or / as arguments,
	// depending on the shell you're using (e.g., Bash, Zsh, or Command Prompt),
	// they may be interpreted by the shell before reaching your Node.js script. For instance:
	// The * symbol can be glob expanded by the shell to match filenames in the current directory.
	// Similarly, / might be treated as part of a file path or even a directory separator.
	case "*":
		result = num1 * num2;
		break;
	case "/":
		result = num1 / num2;
		break;
	case "%":
		result = num1 % num2;
		break;
	default:
		console.log("Invalid Operator");
		break;
}

console.log(`Result: ${result}`);


**/
