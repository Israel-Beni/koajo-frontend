"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon, PlusIcon } from "@radix-ui/react-icons";
import cn from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  showArrow?: boolean;
  icon?: "arrow-right" | "plus";
  variant?: "primary" | "secondary" | "gradient";
  href?: string;
  type?: "button" | "submit" | "reset";
  text?: string;
  disabled?: boolean;
}

export function Button({
  className = "",
  showArrow = true,
  icon,
  variant = "primary",
  href,
  type = "button",
  text = "",
  disabled = false,
  ...props
}: ButtonProps) {
  // Base button classes
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 px-6 py-3 w-fit rounded-[0.875rem] text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variant-specific classes
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90 ",
    secondary:
      "bg-white border border-text-200 text-text-500 hover:text-text-500/60",
    gradient:
      "bg-[image:linear-gradient(107deg,#FD8B51_-2.13%,#469DA3_49.87%,#FD8B51_94.01%)] text-white hover:bg-primary/90",
  };

  // Combine classes
  const buttonClasses = cn(
    baseClasses,
    disabled && "disabled",
    variantClasses[variant],
    className
  );

  const iconJsx = (color: "white" | "dark" = "white") => {
    const colorMap = {
      white: "#fff",
      dark: "#1A1C1E",
    };
    if (icon === "plus") {
      return <PlusIcon color={colorMap[color]} />;
    }
    return <ArrowRightIcon color={colorMap[color]} />;
  };

  // Button content
  const buttonJsx = (
    <button type={type} className={buttonClasses} disabled {...props}>
      {text && <span>{text}</span>}
      {showArrow &&
        iconJsx(["primary", "gradient"].includes(variant) ? "white" : "dark")}
    </button>
  );

  if (href) {
    return <Link href={href}>{buttonJsx}</Link>;
  }

  return buttonJsx;
}
