"use strict";
// import prompt from "prompt";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ADD = __importStar(require("./commands/add"));
const INIT = __importStar(require("./commands/init"));
// 1st is node.exe and 2nd is filename
const argv = process.argv.slice(2);
/*
file structure

utility file for command functions.
diff files for diff commands
*/
const commandsList = {
    add: ADD.main,
    init: INIT.main
};
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
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
        if (command)
            yield commandsList[command](argv);
        // todo: ok it exists immediately afterwards
        else
            console.log("nani!"); // did you mean {}?
        // prompt.start();
        // const { name, school } = await prompt.get(["name", "school"]);
        // console.log({ name, school });
        process.exit();
    });
})();
// prompt too heavy lol
