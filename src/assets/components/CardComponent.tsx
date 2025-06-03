import { RoundedImage } from "./ImageComponent";
import { SemiBoldParagraph } from "./TextComponent";
import { SecondaryButton } from "./ButtonComponents";

interface CardProps {
  imageSrc: string;
  imageAlt?: string;
  text: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

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
      <div className="flex flex-col gap-2">
        <SemiBoldParagraph>
          Conheça a Bruna
        </SemiBoldParagraph>
        
        <SecondaryButton>
          <img src="/images/ArrowRight.png" alt="" />
        </SecondaryButton>
      </div>
    </div>
  );
};
