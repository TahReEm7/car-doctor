"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// ✅ Slide type
interface Slide {
  id: number;
  image: string;
  title: string;
  describe: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero1.jpg",
    title: "Expert Car Care",
    describe: "Precision. Performance. Perfection.",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    title: "Professional Auto Services",
    describe: "Reliable, Efficient, and Affordable.",
  },
  {
    id: 3,
    image: "/hero3.jpg",
    title: "Your Car, Our Priority",
    describe: "Top-notch maintenance and repair services.",
  },
];

const Banner: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const total: number = slides.length;
  const nextIndex: number = (current + 1) % total;

  const prevSlide = (): void => setCurrent(current === 0 ? total - 1 : current - 1);
  const nextSlide = (): void => setCurrent(current === total - 1 ? 0 : current + 1);

  return (
    <section className="relative w-full">
      {/* Slide */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-xl">
        <Image
          src={slides[current].image}
          alt={slides[current].title}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {slides[current].title}
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-2xl">
            {slides[current].describe}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm sm:text-base">
              Discover More
            </button>
            <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition text-sm sm:text-base">
              Latest Project
            </button>
          </div>
        </div>

        {/* Next Image Preview */}
        <div className="absolute bottom-4 right-4 w-20 h-12 sm:w-24 sm:h-16 md:w-32 md:h-20 border border-white/50 overflow-hidden rounded-md shadow-lg">
          <Image
            src={slides[nextIndex].image}
            alt="Next Slide"
            fill
            className="object-cover opacity-80"
          />
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute bottom-4 right-20 sm:right-24 md:right-28 z-50 bg-red-600 text-white p-2 sm:p-3 rounded-full hover:bg-red-700 transition shadow-lg"
        >
          <FiArrowLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute bottom-4 right-4 z-50 bg-red-600 text-white p-2 sm:p-3 rounded-full hover:bg-red-700 transition shadow-lg"
        >
          <FiArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Banner;
