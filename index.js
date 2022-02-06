"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const read_file_1 = require("./helpers/read-file");
const s3client_1 = require("./helpers/s3client");
const upload_1 = require("./helpers/upload");
const dotenv_1 = __importDefault(require("dotenv"));
function doStuff(region) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Using region:", region ? region : "us-east");
        let bucketList = [];
        try {
            for (let i = 1; i < 4; i++) {
                bucketList.push(`rahulprasad-${Math.floor(1000 + Math.random() * 9000)}`);
            }
            yield Promise.all(bucketList.map((bucketName) => (0, s3client_1.createBucket)(bucketName, region)));
            const files = yield (0, read_file_1.getFiles)();
            yield Promise.all(files.map((file, index) => (0, upload_1.putObject)(file, bucketList[index])));
            console.log("Done");
            process.exit(0);
        }
        catch (error) {
            console.error(error);
            process.exit(1);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        readline_1.default
            .createInterface({ input: process.stdin, output: process.stdout })
            .question("Region? (Defaut: us-east) ", doStuff);
    });
}
main();
