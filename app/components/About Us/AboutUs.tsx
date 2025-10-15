"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className=" py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8 ">
        <div className="md:col-span-4 relative flex  ">
          {/* Back Image */}
          <div className="relative w-120 h-140 md:w-90 md:h-100 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about-us1.jpg"
              alt="About Us 1"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Front Image */}
          <div className="absolute lg:right-[-10] md:right-[-15] top-40 w-56 h-56 md:w-65 md:h-70 rounded-lg overflow-hidden border-4 border-white shadow-xl hidden md:block">
            <Image
              src="/about-us2.jpg"
              alt="About Us 2"
              fill
              className="object-cover rounded-lg hidden md:block"
              priority
            />
          </div>
        </div>

        <div className="md:col-span-6 text-gray-700">
          <h2 className="text-xl font-bold mb-4 text-red-500">
            About Us
          </h2>
          <p className="text-4xl text-black font-bold mb-4">
           We are qualified <br /> & of experience <br /> in this field
          </p>
          <p className="text-[#737373] mb-6">
           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
          </p>
          <p className="text-[#737373] mb-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
          </p>
          <Link href={"/about"} className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all duration-300">
            Get More Info
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

