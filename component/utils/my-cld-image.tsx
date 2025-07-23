"use client";

import { CldImage, CldImageProps } from "next-cloudinary";

export default function MyCldImage(props: CldImageProps) {
  return <CldImage {...props} />;
}
