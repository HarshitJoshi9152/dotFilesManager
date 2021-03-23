import prompt from "prompt";

import { add } from "./add";
console.log(add);
const argv = process.argv.slice(2);

/*
file structure

utility file for command functions.
diff files for diff commands
*/

const commandsList = {
	add: (argv: Array<any>) => {
		// add.main(argv);
		console.log("lol");
	}
};

(async function main() {
	const command = argv.shift();
	// @ts-ignore
	if (command) commandsList[command](argv);
	else console.log("nani!"); // did you mean {}?

	// prompt.start();
	// const { name, school } = await prompt.get(["name", "school"]);
	// console.log({ name, school });
	process.exit();
})();

// prompt too heavy lol
