"use strict";
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
exports.add = void 0;
const promises_1 = require("fs/promises");
const path_1 = __importStar(require("path"));
const process_1 = require("process");
const storageFilePath = path_1.normalize(__dirname + "./../data/files/");
class add {
    constructor() {
        this.addFile = function (filePath) {
            return __awaiter(this, void 0, void 0, function* () {
                // todo: instead use streams
                let p = path_1.normalize(process.cwd() + filePath);
                let data = yield promises_1.readFile(p, "utf-8");
                let name = path_1.default.basename(p);
                try {
                    yield promises_1.writeFile(path_1.default.join(storageFilePath, name), data, "utf-8");
                }
                catch (e) {
                    console.log("copying file failed");
                    process_1.stderr.write(e.name);
                    process_1.stderr.write(e.message);
                    return 1;
                }
                return 0;
            });
        };
        this.main = function (argv) {
            return __awaiter(this, void 0, void 0, function* () {
                // behaviour choice
                // dont add coz already exists
                // check if date modified is of a later date
                // @ts-ignore
                this.addFile(argv[0]);
            });
        };
    }
}
exports.add = add;
