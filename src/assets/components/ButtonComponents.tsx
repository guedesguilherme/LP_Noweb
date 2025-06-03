import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const PrimaryButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      className={`bg-primaryYellow text-primaryBlack py-2.5 px-5 text-[16px] font-medium rounded-full ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-3 bg-navyBlue text-white py-2.5 px-5 text-[16px] font-semibold rounded-full ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const BasicButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      className={`text-primaryBlack border-2 border-primaryBlack py-2.5 px-5 text-[16px] font-semibold rounded-full ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const PremiumButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      className={`text-primaryGray border-2 border-primaryGray py-2.5 px-5 text-[16px] font-semibold rounded-full ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};