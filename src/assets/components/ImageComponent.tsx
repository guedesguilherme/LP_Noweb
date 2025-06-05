import type { ImgHTMLAttributes } from 'react';
import { GlassButton } from './ButtonComponents';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  width?: number | string; // Tornar opcional e aceitar string
  height?: number | string; // Tornar opcional e aceitar string
  className?: string;
}

export const RoundedImage = ({ className = '', ...rest }: ImageProps) => {
  return (
    <img
      className={`rounded-[20px] object-cover w-full h-auto ${className}`}
      {...rest}
    />
  );
};


interface RoundedImageCardWithButtonProps {
  imageUrl: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
  buttonClassName?: string;
}

export const RoundedImageCardWithButton = ({
  imageUrl,
  buttonText,
  onButtonClick,
  className = "",
  buttonClassName = "",
}: RoundedImageCardWithButtonProps) => {
  return (
    <div className={`relative w-60 h-48 rounded-[20px] overflow-hidden ${className}`}>
      <RoundedImage
        src={imageUrl}
        alt="Imagem de fundo"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 w-full px-2">
        <GlassButton
          onClick={onButtonClick}
          className={`w-full max-w-[calc(100%-16px)] text-center ${buttonClassName}`}
        >
          {buttonText}
        </GlassButton>
      </div>
    </div>
  );
};
