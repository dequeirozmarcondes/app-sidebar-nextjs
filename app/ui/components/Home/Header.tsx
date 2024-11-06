"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          MyLogo
        </Link>

        {/* Menu para telas grandes */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Botão do menu hamburguer para telas pequenas */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu para telas pequenas (mobile) */}
      <div
        className={`${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        } transform fixed inset-0 bg-gray-800 bg-opacity-90 z-40 flex flex-col items-center justify-center transition-all duration-700 ease-in-out`}
      >
        {/* Botão fixo de fechar no canto superior direito */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 z-50 text-white"
          aria-label="Close Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="flex flex-col space-y-6 text-center z-40">
          <Link
            href="/"
            className="text-white text-2xl hover:text-yellow-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white text-2xl hover:text-yellow-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-white text-2xl hover:text-yellow-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-white text-2xl hover:text-yellow-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
