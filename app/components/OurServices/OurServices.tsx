"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface Service {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  duration?: string;
  category?: string;
  rating?: number;
}

const OurServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);


  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data: Service[]) => setServices(data))
      .catch((err) => console.error("Error loading services:", err));
  }, []);


  const visibleServices = services.slice(0, 6);

  if (!services) return <p>Loading or Service not found...</p>;

  return (
    <section className="py-12 md:py-20">
 
      <div className="text-center mb-12">
        <h6 className="text-xl font-bold mb-2 text-red-500">Services</h6>
        <h1 className="text-4xl font-bold mb-4 text-black">Our Services Area</h1>
        <p className="text-gray-600">
          The majority have suffered alteration in some form, by injected humour,
          or randomised <br /> words which don&apos;t look even slightly believable.
        </p>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  px-6">
        {visibleServices.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >

            <div className="relative w-full h-56">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

      
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-red-600 font-bold text-lg">
                  ${service.price}
                </span>
                 <Link href={`/services/${service.id}`} className="text-red-600 border border-red-600 px-4 py-1 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300">
                  <FiArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/services"
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all duration-300"
        >
          More Services
        </Link>
      </div>
    </section>
  );
};

export default OurServices;

