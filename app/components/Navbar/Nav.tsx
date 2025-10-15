'use client';

import { NavLinks } from '@/app/Constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiSearch, FiShoppingCart, FiX } from 'react-icons/fi';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" px-3 w-full sticky top-0 left-0 z-5000 bg-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src={'/logo.png'}
              alt="Logo"
              width={100}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-gray-700 font-medium hover:text-red-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Extra Section */}
        <div className="hidden md:flex items-center gap-5">

          <button className="text-gray-600 hover:text-red-600 transition relative">
            <FiShoppingCart size={22} />
          </button>

          <button className="text-gray-600 hover:text-red-600 transition">
            <FiSearch size={22} />
          </button>

         <Link href={"/contacts"} className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300">
              Appointment
            </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md w-full px-6 py-4 flex flex-col gap-4">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-gray-700 font-medium hover:text-red-600 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 mt-2">
            <button className="text-gray-600 hover:text-red-600 transition relative">
              <FiShoppingCart size={22} />
            </button>

            <button className="text-gray-600 hover:text-red-600 transition">
              <FiSearch size={22} />
            </button>

            <Link href={"/contacts"} className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300">
              Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
