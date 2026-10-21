import { createHash } from "node:crypto";

export async function POST(request: Request) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return Response.json({ message: "Cloudinary environment variables are not configured." }, { status: 503 });
  }

  let kind: unknown;
  try {
    ({ kind } = await request.json());
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (kind !== "profile" && kind !== "document") {
    return Response.json({ message: "Invalid upload type." }, { status: 400 });
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const folder = kind === "profile" ? "members/profile" : "members/documents";
  const type = kind === "document" ? "private" : undefined;
  const signedParams: Record<string, string | number> = { folder, timestamp };
  if (type) signedParams.type = type;

  const toSign = Object.entries(signedParams)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const signature = createHash("sha1").update(`${toSign}${apiSecret}`).digest("hex");

  return Response.json({ cloudName, apiKey, timestamp, folder, type, signature });
}
