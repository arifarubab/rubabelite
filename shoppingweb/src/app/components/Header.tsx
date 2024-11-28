"use client"; // Ensure this is present for client-side rendering

import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image'; // Import Image for optimized images
import { useState } from 'react'; // Import useState for managing mobile menu state
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Correct import for Heroicons v2

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage mobile menu state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu visibility
  };

  return (
    <>
      <header className="header flex justify-between items-center p-4 bg-pink-200">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Logo Text */}
          <div className="flex items-center">
  <div className="logo font-sans text-xs mr-2">Rubab Elite Shop</div>

  {/* Logo Image for all screens */}
  <Image
    width={30} // Adjusted size
    height={30} // Adjusted size
    src="/logo.png"
    alt="Logo"
  />
</div>
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
            onClick={toggleMenu} // Toggle the menu when clicked
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />  // Show close icon when menu is open
            ) : (
              <Bars3Icon className="w-6 h-6" />  // Show hamburger icon when menu is closed
            )}
          </button>

          {/* Dropdown menu for mobile */}
          {isMenuOpen && (
            <select
              className="bg-white border border-gray-300 rounded-md p-2 text-gray-800 mt-2"
              onChange={(e) => {
                if (e.target.value) {
                  window.location.href = e.target.value; // Redirect to selected page
                }
              }}
            >
              <option value="/">HOME</option>
              <option value="/About">ABOUT</option>
              <option value="/Contact">CONTACT</option>
              <option value="/Collection">COLLECTION</option>
              <option value="/Cart">CART</option>
            </select>
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
