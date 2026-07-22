"use client";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Onest } from "next/font/google";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";
  const isTransparentnav = isHomePage || isContactPage;
  return (
    <nav
  className={`absolute top-0 left-0 w-full z-50 px-6 py-6 ${
    isTransparentnav ? "bg-transparent" : "bg-black"
  }`}
>
  <div className="max-w-7xl mx-auto flex items-center justify-between ">
    {/* Logo */}
    <Link href="/">
      <h1
        className="text-2xl font-bold text-white"
        style={{ fontFamily: "var(--font-onest)" }}
      >
        Urban Spices
      </h1>
    </Link>

    {/* Desktop Menu */}
    <div
    
      className="hidden md:flex items-center gap-4"
      style={{ fontFamily: "var(--font-onest)" }}
    >
          <Link href={"/about"}>
        <button className="px-5 py-2    text-white hover:scale-105 transition">
         About
        </button>
      </Link>
      

      <Link href="/menu">
        <button className="px-5 py-2    text-white hover:scale-105 transition">
          Menu
        </button>
      </Link>
      <Link href="/contact">
        <button className="px-5 py-2    text-white hover:scale-105 transition">
          Make A Reservation
        </button>
      </Link>
      
    </div>

    {/* Mobile Menu Icon */}
    <IoMenu
      onClick={() => setOpen(!open)}
      className="md:hidden text-white text-3xl cursor-pointer"
    />
  </div>

  {/* Mobile Menu */}
  {open && (
    <div className="md:hidden mt-4 flex flex-col gap-3 bg-black/80 p-4 rounded-lg">
       <Link href="/about">
        <button className="px-5 py-2    text-white hover:scale-105 transition">
         About
        </button>
      </Link>
      

      <Link href="/menu">
        <button className="px-5 py-2    text-white hover:scale-105 transition">
          Menu
        </button>
      </Link>
      <Link href="/contact">
        <button className="px-5 py-2    text-white hover:scale-105 transition">
          Make A Reservation
        </button>
      </Link>
    </div>
  )}
</nav>
  );
}