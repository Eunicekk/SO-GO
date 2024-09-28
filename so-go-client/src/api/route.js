import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const Bucket = process.env.AMPLIFY_BUCKET;
const s3 = new S3Client({
	region: process.env.AWS_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	},
});

// 이미지 저장
export async function POST(req, res) {
	try {
		const formData = await req.formData();
		const files = formData.getAll("img");
		const Body = await files[0].arrayBuffer();

		s3.send(
			new PutObjectCommand({
				Bucket,
				Key: files[0].name,
				Body,
				ContentType: "image/jpg",
			}),
		);

		return Response.json({ message: "OK" });
	} catch (error) {
		return Response.error();
	}
}
