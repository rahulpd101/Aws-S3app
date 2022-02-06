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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFiles = void 0;
const promises_1 = require("fs/promises");
const getFiles = () => __awaiter(void 0, void 0, void 0, function* () {
    const paths = [];
    for (let i = 1; i < 4; i++) {
        paths.push(`./sample_data/${i}/rand.png`);
    }
    return yield Promise.all(paths.map((path) => (0, promises_1.readFile)(path)));
});
exports.getFiles = getFiles;
