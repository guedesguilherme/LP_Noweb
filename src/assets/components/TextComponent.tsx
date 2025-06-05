import type { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  children2?: ReactNode;
  className?: string;
}

export const Header1 = ({ children, className = '' }: TextProps) => (
  <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-primaryBlack font-medium leading-tight ${className}`}>
    {children}
  </h1>
);

export const Header2 = ({ children, className = '' }: TextProps) => (
  <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-primaryBlack font-medium leading-tight ${className}`}>
    {children}
  </h2>
);

export const Paragraph = ({ children, className = '' }: TextProps) => (
  <p className={`text-sm sm:text-base md:text-[16px] text-primaryGray font-normal leading-relaxed ${className}`}>
    {children}
  </p>
);

export const SemiBoldParagraph = ({ children, className = '' }: TextProps) => (
  <p className={`text-sm sm:text-base md:text-[16px] text-primaryBlack font-semibold leading-relaxed ${className}`}>
    {children}
  </p>
);

export const InfosComponent = ({ children, children2, className = '' }: TextProps) => (
  <div className={`flex flex-col gap-1 sm:gap-2 pb-2 sm:pb-3 w-full sm:w-40 ${className}`}>
    <Header1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px]">{children}</Header1>
    <Paragraph className="text-xs sm:text-sm md:text-[16px]">{children2}</Paragraph>
  </div>
);

export const InfosComponentWhyCUS = ({ children, children2, className = '' }: TextProps) => (
  <div className={`flex flex-col gap-1 sm:gap-2 pb-2 sm:pb-3 w-full ${className}`}>
    <Header1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px]">{children}</Header1>
    <Paragraph className="text-xs sm:text-sm md:text-[16px]">{children2}</Paragraph>
  </div>
);