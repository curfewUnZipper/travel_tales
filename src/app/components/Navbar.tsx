"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  if (!loggedIn) return null;

  const linkStyle = (path: string) =>
    `px-3 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-white/30 text-white"
        : "text-white/80 hover:text-white hover:bg-white/20"
    }`;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/20">
      <div className="max-w-6xl mx-auto flex justify-between px-6 py-4">
        <Link href="/home" className="text-lg font-bold text-white">
          Travel Tales ✈️
        </Link>

        <div className="flex gap-4">
          <Link href="/home" className={linkStyle("/home")}>HOME</Link>
          <Link href="/search" className={linkStyle("/search")}>SEARCH</Link>
          <Link href="/diary" className={linkStyle("/diary")}>DIARY</Link>
          <Link href="/profile" className={linkStyle("/profile")}>PROFILE</Link>
        </div>
      </div>
    </nav>
  );
}
