'use client';  // Add this for client-side interactivity

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';  // Import for active link detection

const Navbar = () => {
  const pathname = usePathname();  // Get current path

  // Function to check if link is active
  const isActive = (path: string) => {
    return pathname === path ? 'text-emerald-500' : 'text-gray-800';
  };

  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png" // Make sure to add your logo to the public folder
            alt="Eunath Foundation"
            width={80}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          <li>
            <Link 
              href="/" 
              className={`${isActive('/')} hover:text-emerald-500 transition-colors font-medium`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`${isActive('/about')} hover:text-emerald-500 transition-colors font-medium`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              href="/get-help" 
              className={`${isActive('/get-help')} hover:text-emerald-500 transition-colors font-medium`}
            >
              Get Help
            </Link>
          </li>
          <li>
            <Link 
              href="/gallery" 
              className={`${isActive('/gallery')} hover:text-emerald-500 transition-colors font-medium`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`${isActive('/contact')} hover:text-emerald-500 transition-colors font-medium`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;