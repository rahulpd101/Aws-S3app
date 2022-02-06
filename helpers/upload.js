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
exports.putObject = void 0;
const aws_sdk_1 = require("aws-sdk");
const putObject = (file, bucketName) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield new aws_sdk_1.S3()
        .putObject({
        Bucket: bucketName,
        Key: "rand.png",
        Body: file,
        ContentType: "image/png",
    })
        .promise();
    console.log(response);
    return;
});
exports.putObject = putObject;
