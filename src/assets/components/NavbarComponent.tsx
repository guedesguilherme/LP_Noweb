import { useState } from 'react';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`flex items-center justify-between py-4 md:py-8 px-4 md:px-16 ${className}`}>
      {/* Logo - Ajustada para alinhar com o texto */}
      <div className="flex items-center h-12"> {/* Container para alinhamento */}
        <img 
          src="/images/Logo.png" 
          alt="Logo da empresa" 
          className="h-8 md:h-10 object-contain" 
        />
      </div>

      {/* Menu Hamburguer (mobile) */}
      <button
        className="md:hidden focus:outline-none h-12 flex items-center"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isMenuOpen}
      >
        <div className="space-y-2">
          <span className={`block h-0.5 w-6 bg-primaryBlack transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-primaryBlack ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-primaryBlack transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>

      {/* Menu de Navegação - Ajustado o alinhamento vertical */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent z-50 shadow-md md:shadow-none`}>
        <ul className="flex flex-col md:flex-row items-center gap-6 text-base font-medium p-4 md:p-0">
          <li className='text-[16px] text-primaryBlack font-medium hover:text-navyBlue transition-colors py-2 md:py-0'>
            <a href="#" className="flex items-center h-12">Home</a>
          </li>
          <li className='text-[16px] text-primaryBlack font-normal hover:text-navyBlue transition-colors py-2 md:py-0'>
            <a href="#" className="flex items-center h-12">Quem Somos</a>
          </li>
          <li className='text-[16px] text-primaryBlack font-normal hover:text-navyBlue transition-colors py-2 md:py-0'>
            <a href="#" className="flex items-center h-12">Serviços</a>
          </li>
          <li className='text-[16px] text-primaryBlack font-normal hover:text-navyBlue transition-colors py-2 md:py-0'>
            <a href="#" className="flex items-center h-12">Contatos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
