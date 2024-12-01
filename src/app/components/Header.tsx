"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Trash } from "lucide-react"; // Import icons from lucide-react
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header flex justify-between items-center p-4 bg-pink-200">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="logo font-sans text-xs mr-2">Rubab Elite Shop</div>
          <Image
            width={30}
            height={30}
            src="/logo.png"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="navList flex gap-4">
            <li>
              <Link href="/" className="hover:text-blue-600">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-blue-600">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-blue-600">
                CONTACT
              </Link>
            </li>
            <li>
              <Link href="/Collection" className="hover:text-blue-600">
                COLLECTION
              </Link>
            </li>
            <li>
              <Link href="/Cart" className="hover:text-blue-600">
                CART
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" /> // Close icon
            ) : (
              <Menu className="w-6 h-6" /> // Hamburger icon
            )}
          </button>

          {/* Dropdown menu for mobile */}
          {isMenuOpen && (
            <ul className="bg-white border border-gray-300 rounded-md p-2 text-gray-800 mt-2">
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/About" onClick={() => setIsMenuOpen(false)}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/Contact" onClick={() => setIsMenuOpen(false)}>
                  CONTACT
                </Link>
              </li>
              <li>
                <Link href="/Collection" onClick={() => setIsMenuOpen(false)}>
                  COLLECTION
                </Link>
              </li>
              <li>
                <Link href="/Cart" onClick={() => setIsMenuOpen(false)}>
                  CART
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </header>

      <style jsx>{`
        .navList {
          list-style: none;
        }

        .navList li a {
          text-decoration: none;
          font-weight: bold;
          color: black; /* Customize the link color */
        }
      `}</style>
    </>
  );
}
