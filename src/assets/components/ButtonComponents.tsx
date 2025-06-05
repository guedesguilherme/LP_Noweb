import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

// Botão primário com leve escurecimento no hover
export const PrimaryButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      className={`bg-primaryYellow text-primaryBlack py-2.5 px-5 text-[16px] font-medium rounded-full transition duration-200 hover:brightness-95 hover:shadow-md ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

// Botão de vidro com leve opacidade ao passar o mouse
export const GlassButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      className={`backdrop-blur-md bg-white/30 text-primaryBlack py-2.5 px-5 text-[16px] font-medium rounded-full transition duration-200 hover:bg-white/40 hover:shadow-md ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

// Botão secundário escurece levemente no hover
export const SecondaryButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-3 bg-navyBlue text-white py-2.5 px-5 text-[16px] font-semibold rounded-full transition duration-200 hover:bg-navyBlue/90 hover:shadow-md ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

// Ícone secundário com mesmo efeito do secundário
export const SecondaryIconButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-3 bg-navyBlue text-white py-2.5 px-5 text-[16px] font-semibold rounded-full self-start transition duration-200 hover:bg-navyBlue/90 hover:shadow-md ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

// Botão básico com fundo suave no hover
export const BasicButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      className={`inline-flex text-primaryBlack border-2 border-primaryBlack py-2.5 px-5 text-[16px] font-semibold rounded-full self-start transition duration-200 hover:bg-primaryBlack hover:text-white hover:shadow-md ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

// Botão premium com efeito parecido ao BasicButton
export const PremiumButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      className={`text-primaryGray border-2 border-primaryGray py-2.5 px-5 text-[16px] font-semibold rounded-full transition duration-200 hover:bg-primaryGray hover:text-white hover:shadow-md ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
