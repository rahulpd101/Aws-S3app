import readline from "readline";
import { getFiles } from "./helpers/read-file";
import { createBucket } from "./helpers/s3client";
import { putObject } from "./helpers/upload";
import dotenv from "dotenv";

async function doStuff(region?: string) {
	console.log("Using region:", region ? region : "us-east");
	let bucketList: string[] = [];
	try {
		for (let i = 1; i < 4; i++) {
			bucketList.push(`rahulprasad-${Math.floor(1000 + Math.random() * 9000)}`);
		}
		await Promise.all(bucketList.map((bucketName) => createBucket(bucketName, region)));
		const files = await getFiles();
		await Promise.all(files.map((file, index) => putObject(file, bucketList[index])));
		console.log("Done");
		process.exit(0);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

async function main() {
	dotenv.config();
	readline
		.createInterface({ input: process.stdin, output: process.stdout })
		.question("Region? (Defaut: us-east) ", doStuff);
}

main();
