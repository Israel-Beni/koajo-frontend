"use client";

import Image from "next/image";
import { useState } from "react";
import cn from "clsx";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        `
        w-full
        shadow-[0px_18px_84px_-20px_rgba(0,0,0,0.04)]
        bg-white
      `,
        className
      )}
    >
      <div className="header_container py-7 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/media/icons/logo-gradient.svg"
            alt="Koajo Logo"
            width={100}
            height={28}
            className="h-7 w-auto"
          />
        </Link>

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
      </div>
    </header>
  );
}
