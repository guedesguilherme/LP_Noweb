import type { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  width: number;
  height: number;
  className?: string;
}

export const RoundedImage = ({ width, height, className = '', ...rest }: ImageProps) => {
  return (
    <img
      width={width}
      height={height}
      className={`rounded-[20px] object-cover ${className}`}
      {...rest}
    />
  );
};
