import type { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
}

export const Header1 = ({ children, className = '' }: TextProps) => (
  <h1 className={`text-[56px] text-primaryBlack font-medium ${className}`}>
    {children}
  </h1>
);

export const Header2 = ({ children, className = '' }: TextProps) => (
  <h2 className={`text-[44px] text-primaryBlack font-medium ${className}`}>
    {children}
  </h2>
);

export const Paragraph = ({ children, className = '' }: TextProps) => (
  <p className={`text-[16px] text-primaryGray font-normal ${className}`}>
    {children}
  </p>
);

export const SemiBoldParagraph = ({ children, className = '' }: TextProps) => (
  <p className={`text-[16px] text-primaryBlack font-semibold ${className}`}>
    {children}
  </p>
);
