"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Logo() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-32" />; // Placeholder to prevent layout shift
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const logoSrc = currentTheme === "dark"
    ? "/images/logos/logo-white.svg"
    : "/images/logos/logo-black.svg";

  return (
    <Image
      src={logoSrc}
      alt="Recoupable Research"
      width={120}
      height={32}
      className="h-8 w-auto"
      priority
    />
  );
}
