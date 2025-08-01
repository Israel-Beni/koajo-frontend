"use client";

import { useCheckDevice } from "@/lib/hooks/useCheckDevice";
import Image, { ImageProps } from "next/image";
import { CldImage, CldImageProps } from "next-cloudinary";

interface ResponsiveImageConfig {
  src?: string;
  width: ImageProps["width"];
  height: ImageProps["height"];
}

interface MyImageProps extends ImageProps {
  src: string;
  tablet?: ResponsiveImageConfig;
  desktop?: ResponsiveImageConfig;
  isCloudinary?: boolean;
}

/**
 * This component dynamically adjusts the size of an image based on the device type.
 * It supports different configurations for tablet and desktop devices.
 *
 * If no tablet or desktop configuration is provided, the image will be displayed at the size specified by width and height.
 *
 * @example
 * <MyImage
 *   src="/image.jpg"
 *   width={300}
 *   height={200}
 *   tablet={{ width: 600, height: 400 }}
 *   desktop={{ width: 900, height: 600 }}
 *   alt="Image"
 * />
 */
function MyImage({
  src,
  alt,
  width,
  height,
  tablet,
  desktop,
  className = "",
  isCloudinary = false,
  ...props
}: MyImageProps & CldImageProps) {
  const device = useCheckDevice();
  const isTablet = device === "tablet";
  const isDesktop = device === "desktop";
  const responsiveConfig = {
    src,
    alt,
    width,
    height,
    ...(isTablet ? tablet : {}),
    ...(isDesktop ? desktop : {}),
  };

  if (isCloudinary) {
    return (
      <CldImage
        src={responsiveConfig.src}
        alt={responsiveConfig.alt}
        width={responsiveConfig.width}
        height={responsiveConfig.height}
        className={className}
        crop="fill"
        {...props}
      />
    );
  }

  return (
    <Image
      src={responsiveConfig.src}
      alt={responsiveConfig.alt}
      width={responsiveConfig.width}
      height={responsiveConfig.height}
      className={className}
      {...props}
    />
  );
}

export default MyImage;
export type { MyImageProps, ResponsiveImageConfig };
