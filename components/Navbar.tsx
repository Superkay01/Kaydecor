"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = (name: string): string =>
    active === name
      ? "w-full bg-white text-blue-700 px-3 py-1 rounded-lg"
      : "text-white px-3 py-1 rounded-lg hover:bg-white/20 transition";

  return (
    <div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex bg-blue-700 items-center justify-between px-8 py-3">
        <Image src="/logo.png" width={70} height={70} alt="Superkay" priority />

        <ul className="flex gap-8 text-lg">
          {["home", "about", "project", "contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "home" ? "/" : `/${item}`}
                onClick={() => setActive(item)}
                className={linkClasses(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex bg-blue-700 items-center justify-between px-8 py-3">
        <Image src="/logo.png" width={50} height={60} alt="Superkay" priority />
        <button
          className="text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-blue-700/95 backdrop-blur-sm flex flex-col gap-4 items-center py-8 z-40">
          {["home", "about", "project", "contact"].map((item) => (
            <li key={item} className="w-full max-w-xs">
              <Link
                href={item === "home" ? "/" : `/${item}`}
                onClick={() => {
                  setActive(item);
                  setIsOpen(false);
                }}
                className={`${linkClasses(item)} block text-center py-3 text-lg`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;