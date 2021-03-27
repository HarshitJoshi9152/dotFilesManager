import * as ADD from "./commands/add";
import * as INIT from "./commands/init";

// 1st is node.exe and 2nd is filename
const argv = process.argv.slice(2);

/*
file structure

utility file for command functions.
diff files for diff commands
*/

// move to another file
const commandsList = {
	add: ADD.main,
	init: INIT.main
};

(async function main() {
	// __dirname test
	// npm run dev : $PRJ_DIR/src
	/* coz the package.json is in $PRJ_DIR ??? for cwd ya maybe
  __dirname: 'C:\\backup\\Documents\\html\\javaScript\\projects\\dotFilesManager\\src',
  cwd: 'C:\\backup\\Documents\\html\\javaScript\\projects\\dotFilesManager'
  */

	// node ./../dist/index.js add dummydotFile ::: $PRJ_DIR/dist

	// watch not working
	console.log("\x1b[91m", { __dirname, cwd: process.cwd() }, "\x1b[0m\n\n");

	// command selection
	const command = argv.shift();
	// @ts-ignore
	if (command) await commandsList[command](argv);
	// todo: ok it exists immediately afterwards
	else console.log("nani!"); // did you mean {}?

	// prompt.start();
	// const { name, school } = await prompt.get(["name", "school"]);
	// console.log({ name, school });
	process.exit();
})();

// prompt too heavy lol
