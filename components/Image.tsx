import { placeHolder } from "@/public";
import { default as NextImage } from "next/image";
import React from "react";

interface Props {
  alt: string;
  src: string | undefined | null;
  size?: number;
  className?: string;
  blurredPlaceholder?: boolean;
}

const Image = ({
  alt,
  src,
  size,
  className,
  blurredPlaceholder = true,
}: Props) => {
  return (
    <NextImage
      placeholder={blurredPlaceholder ? "blur" : "empty"}
      blurDataURL={src || placeHolder}
      alt={alt}
      src={src || placeHolder}
      width={size || 625}
      height={size || 625}
      className={`object-cover ${className}`}
    />
  );
};

export default Image;
