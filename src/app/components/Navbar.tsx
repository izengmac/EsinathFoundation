'use client';  // Add this for client-side interactivity

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Esinath Foundation"
            width={80}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row md:flex items-center gap-8 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <li>
            <Link href="/" className="text-gray-800 hover:text-emerald-500 transition-colors font-medium">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-800 hover:text-emerald-500 transition-colors font-medium">About Us</Link>
          </li>
          <li>
            <Link href="/get-help" className="text-gray-800 hover:text-emerald-500 transition-colors font-medium">Get Help</Link>
          </li>
          <li>
            <Link href="/gallery" className="text-gray-800 hover:text-emerald-500 transition-colors font-medium">Gallery</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-800 hover:text-emerald-500 transition-colors font-medium">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;