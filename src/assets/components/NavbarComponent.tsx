import type { ReactNode } from 'react';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => (
  <nav className={`flex items-center justify-between py-8 px-16 ${className}`}>
    <img src="/images/Logo.png" alt="Logo da empresa" className="h-10" />
    <ul className="flex gap-8 text-base font-medium">
      <li className='text-[16px] text-primaryBlack font-' >Home</li>
      <li className='text-[16px] text-primaryBlack font-normal'>Quem Somos</li>
      <li className='text-[16px] text-primaryBlack font-normal'>Serviços</li>
      <li className='text-[16px] text-primaryBlack font-normal'>Contatos</li>
    </ul>
  </nav>
);
