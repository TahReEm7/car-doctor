import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-10">
      <div className="w-11/12 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-20 gap-8">

        <div>
          <div>
          <Link href="/">
            <Image
             className="rounded-4xl py-4"
              src={'/logo.png'}
              alt="Logo"
              width={80}
              height={40}
              priority
            />
          </Link>
        </div>
          <p className="text-sm leading-6">
            Your trusted car service and repair center. We ensure quality and care for every vehicle.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>

   
        <div className="md:mt-5">
          <h3 className="text-lg font-semibold text-white md:mb-15 mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

       <div className="md:mt-5">
          <h3 className="text-lg font-semibold text-white md:mb-15 mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Why Car Doctor</Link></li>
            <li><Link href="#" className="hover:text-white">About</Link></li>

          </ul>
        </div>


       <div className="md:mt-5">
          <h3 className="text-lg font-semibold text-white md:mb-15 mb-4">Support</h3>
           <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Support Center</Link></li>
            <li><Link href="/services" className="hover:text-white">Feedback</Link></li>
            <li><Link href="/contact" className="hover:text-white">Accessibility</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
