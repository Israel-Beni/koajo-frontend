'use client';

import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`
        flex w-[375px] px-6 py-7 justify-between items-center
        shadow-[0px_18px_84px_-20px_rgba(0,0,0,0.04)]
        bg-white
        ${className}
      `}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/media/icons/logo.svg"
          alt="Koajo"
          width={100}
          height={28} 
          className="h-7 w-auto"
        />
      </div>

      {/* Hamburger Menu Icon */}
      <button
        onClick={toggleMenu}
        className="lg:hidden"
        aria-label="Toggle menu"
      >
        <Image
          src="/media/icons/menu.svg"
          alt="Menu"
          width={24}
          height={24}
          className="h-6 w-auto"
        />
      </button>
    </header>
  );
}
