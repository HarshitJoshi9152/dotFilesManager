import { readFile, writeFile } from "fs/promises";
import path, { normalize } from "path";
import { stderr } from "process";

const storageFilePath = normalize(__dirname + "./../data/files/");

export class add {
	addFile = async function (filePath: string) {
		// todo: instead use streams
		let p = normalize(process.cwd() + filePath);
		let data = await readFile(p, "utf-8");
		let name = path.basename(p);

		try {
			await writeFile(path.join(storageFilePath, name), data, "utf-8");
		} catch (e) {
			console.log("copying file failed");
			stderr.write((e as Error).name);
			stderr.write((e as Error).message);
			return 1;
		}
		return 0;
	};

	main = async function (argv: Array<any>) {
		// behaviour choice
		// dont add coz already exists
		// check if date modified is of a later date
		// @ts-ignore
		this.addFile(argv[0]);
	};
}
