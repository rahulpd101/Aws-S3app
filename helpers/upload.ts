import { S3 } from "aws-sdk";
import fs from "fs";

export const putObject = async (file: Buffer, bucketName: string) => {
  const response = await new S3()
    .putObject({
      Bucket: bucketName,
      Key: "rand.png",
      Body: file,
      ContentType: "image/png",
    })
    .promise();
  console.log(response);
  return;
};
