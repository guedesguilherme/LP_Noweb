import { RoundedImage } from "./ImageComponent";
import { Paragraph, SemiBoldParagraph, Header2 } from "./TextComponent";
import { SecondaryButton, PrimaryButton, BasicButton, PremiumButton } from "./ButtonComponents";
import type { ReactNode } from "react";

interface CardProps {
  onButtonClick?: () => void;
  className?: string;
}

interface GenericContainerProps {
  children: ReactNode;
  className?: string;
}


export const GenericContainer = ({ children, className = '' }: GenericContainerProps) => (
  <h1 className={`flex-1 ${className}`}>
    {children}
  </h1>
);

export const MiniCardComponent = ({
}: CardProps) => {
  return (
    <div className="w-48 flex-col ">
      <RoundedImage
        src="/images/SalesMeet.jpg"
        alt="Sales Pic"
        width={190}
        height={110}
      />
      <div className="flex flex-row gap-2 items-center justify-center">
        <div className="flex flex-col ">
          <SemiBoldParagraph>
            Conheça a Bruna
          </SemiBoldParagraph>
          <Paragraph>Ver o vídeo</Paragraph>
        </div>
        
        <SecondaryButton className="mt-4">
          <img src="/images/ArrowRight.png" alt="" />
        </SecondaryButton>
      </div>
    </div>
  );
};

interface BannerCardProps {
  imageUrl: string;
  buttonText: string;
  onButtonClick?: () => void;
  title: string;
  description: string;
  className?: string;
}

export const BannerCard = ({
  imageUrl,
  buttonText,
  onButtonClick,
  title,
  description,
  className = "",
}: BannerCardProps) => {
  return (
    <div className={`relative w-full max-w-[600px] rounded-[20px] overflow-hidden ${className}`}>
      <RoundedImage
        src={imageUrl}
        alt="Banner"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-[20px]" />

      <div className="absolute top-4 right-4 z-10">
        <PrimaryButton onClick={onButtonClick}>
          {buttonText}
        </PrimaryButton>
      </div>

      <div className="absolute bottom-4 left-4 z-10 text-white">
        <Header2 className="text-smoke">{title}</Header2>
        <Paragraph className="text-smoke">{description}</Paragraph>
      </div>
    </div>
  );
};

interface ServicePackageCardProps {
  imageUrl: string;
  title: string;
  atendimento: string;
  tempo: string;
  preco: string;
  onButtonClick: () => void;
}

export const ServicePackageCard = ({
  imageUrl,
  title,
  atendimento,
  tempo,
  preco,
  onButtonClick,
}: ServicePackageCardProps) => {
  return (
    <div className="p-4 border border-smoke rounded-2xl w-[392px]">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[300px] rounded-xl object-cover"
      />

      <div className="flex gap-2 mt-4">
        <BasicButton>Basic</BasicButton>
        <PremiumButton>Premium</PremiumButton>
      </div>

      <h1 className="text-2xl font-semibold mt-2">{title}</h1>

      <div className="flex justify-between text-sm mt-2">
        <div>
          <p className="text-primaryBlack font-medium">Atendimento</p>
          <Paragraph>{atendimento}</Paragraph>
        </div>
        <div>
          <p className="text-primaryBlack font-medium">Tempo</p>
          <Paragraph>{tempo}</Paragraph>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between items-center">
        <div>
          <Paragraph className="text-sm text-gray-500">A partir de</Paragraph>
          <h1 className="text-3xl font-semibold">R$ {preco}</h1>
        </div>
        <SecondaryButton onClick={onButtonClick}>Contratar</SecondaryButton>
      </div>
    </div>
  );
};
