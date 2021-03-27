// import { readFile, writeFile } from "fs/promises";
const { readFile, writeFile } = require("fs").promises;
import path, { join, normalize, resolve } from "path";
import { stderr } from "process";
// import * as config from "./../../config.json";
// const storageFilePath = config.storagePath;
const storageFilePath = getStoragePath();

console.log(`\x1b[93m${storageFilePath}\x1b[0m]`);

const red = (str: string) => `\x1b[91m${str}\x1b[0m`;

const addFile = async function (filePath: string) {
	console.log(red("called"));
	// todo: instead use streams
	let p = resolve(filePath);
	// ok so when i use npm run dev the process.cwd() will point to the base dir path ?
	console.log(red(p));
	let data = await readFile(p, "utf-8");
	let name = path.basename(p);

	try {
		console.log(`WRITTING TO: ${path.join(storageFilePath, name)}`);
		await writeFile(path.join(storageFilePath, name), data, "utf-8");
		console.log("\x1b[91msuccess!\x1b[0m");
	} catch (e) {
		console.log("copying file failed");
		stderr.write((e as Error).name);
		stderr.write((e as Error).message);
		return 1;
	}
	return 0;
};

const main = async function (argv: Array<any>) {
	// behaviour choice
	// dont add coz already exists
	// check if date modified is of a later date
	console.log(`${__filename} [main] called\nargv: ${argv}\n`);

	// @ts-ignore
	await addFile(argv[0]);
};

// default export
// export default { addFile, main };
// import ADD from "command/add"

// not a named export hmmm isnt
export { addFile, main };
//CANT USE: import ADD from "command/add"
//USE: import * as ADD from "./commands/add";

function getStoragePath() {
	return "C:\\backup\\Documents\\html\\javaScript\\projects\\dotFilesManager\\data\\files";
	// return normalize(__dirname + "./../data/files/");
}
