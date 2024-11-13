"use server";

import sharp from "sharp";

const getBlurDataURL = async (url: string) => {
  const buffer = await fetch(url).then((res) => res.arrayBuffer());
  const imageBuffer = await sharp(buffer).resize(22, 22).webp().toBuffer();
  const blurDataURL = `data:image/webp;base64,${imageBuffer.toString(
    "base64"
  )}`;

  return blurDataURL;
};

export default getBlurDataURL;
