"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  { id: 1, name: "John Smith", role: "Lead Mechanic", image: "/team1.jpg" },
  { id: 2, name: "Sophia Rahman", role: "Car Specialist", image: "/team2.jpg" },
  { id: 3, name: "David Khan", role: "Engine Expert", image: "/team3.jpg" },
  { id: 4, name: "Maria Islam", role: "Customer Advisor", image: "/team4.jpg" },
  { id: 5, name: "Michael Roy", role: "Technician", image: "/team5.jpg" },
];

const Team: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const total = team.length;

  const prevSlide = (): void =>
    setCurrent(current === 0 ? total - 1 : current - 1);
  const nextSlide = (): void =>
    setCurrent(current === total - 1 ? 0 : current + 1);

  // Slice team to show 3 cards at a time
  const visibleSlides = [
    team[current],
    team[(current + 1) % total],
    team[(current + 2) % total],
  ];

  return (
    <section className="my-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Meet Our Expert Team
      </h2>

      <div className=" relative overflow-hidden">
        {/* Carousel Slides */}
        <div className="flex justify-center gap-6 transition-all duration-500 ease-in-out">
          {visibleSlides.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-xl rounded-xl p-6 w-64 md:w-72 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
            
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-6 bg-red-600 text-white p-2 sm:p-3 rounded-full hover:bg-red-700 transition shadow-lg"
        >
          <FiArrowLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-6 bg-red-600 text-white p-2 sm:p-3 rounded-full hover:bg-red-700 transition shadow-lg"
        >
          <FiArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Team;

