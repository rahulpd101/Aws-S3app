import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
import AWS from "aws-sdk";

const setupAndGetS3Client = (): S3Client => {
	AWS.config.update({
		credentials: {
			accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
		},
	});
	return new S3Client({});
};

export const createBucket = async (bucketName: string, region?: string) => {
	try {
		const s3client = setupAndGetS3Client();
		const data = await s3client.send(
			new CreateBucketCommand({
				Bucket: bucketName,
				CreateBucketConfiguration: {
					LocationConstraint: region,
				},
			})
		);
		console.log("Success", data.Location);
		return data;
	} catch (err) {
		console.log("Error", err);
	}
};
