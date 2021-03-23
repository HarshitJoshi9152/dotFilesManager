import { SSL_OP_NO_SSLv2 } from "constants";

console.log("Hello wolrd");

function say(name: string) {
	console.log(name);
	for (const i in name as any) {
		console.log(i);
	}
}

function add({ n1, n2 }: { n1: number; n2: number }) {
	return n1 + n2;
}

add({ n1: 22, n2: 22 });
say("Anmol!");
