'use server';

import aws from 'aws-sdk';

aws.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3({
  region: process.env.AWS_REGION,
  params: {
    Bucket: 'git-note',
  },
});

export const UploadFile = async (formData: FormData) => {
  const file = formData.get('file') as File;
  const { name } = file;
  const fileContent = Buffer.from(await file.arrayBuffer());
  const params = {
    Bucket: 'git-note',
    Key: name,
    Body: fileContent,
  };

  const data = await s3.upload(params).promise();
  return data.Location;
};
