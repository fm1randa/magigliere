"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const getClassnames = (path: string) =>
    path === pathname ? "underline hover:underline" : "hover:underline";
  return (
    <nav className="flex gap-1 ml-auto mr-2">
      <Link href={"/"} className={getClassnames("/")}>
        Home
      </Link>
      <Link href={"/characters"} className={getClassnames("/characters")}>
        Characters
      </Link>
      <Link href={"/profile"} className={getClassnames("/profile")}>
        My profile
      </Link>
    </nav>
  );
}
