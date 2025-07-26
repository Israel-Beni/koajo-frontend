import Image from "next/image";
import cn from "clsx";
import Link from "next/link";
import MenuMobile from "./menu-mobile";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {

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
            src="/media/icons/logo-dark-gradient.svg"
            alt="Koajo Logo"
            width={100}
            height={28}
            className="h-7 w-auto"
          />
        </Link>

        <MenuMobile />
      </div>
    </header>
  );
}
