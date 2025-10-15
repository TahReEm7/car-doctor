"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

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

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6; // Show 6 per page

  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data: Service[]) => setServices(data))
      .catch((err) => console.error("Error loading services:", err));
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(services.length / servicesPerPage);
  const indexOfLast = currentPage * servicesPerPage;
  const indexOfFirst = indexOfLast - servicesPerPage;
  const currentServices = services.slice(indexOfFirst, indexOfLast);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-red-500">All Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore all our car repair services with detailed pricing and description.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {currentServices.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>

              <div className="flex items-center justify-between">
                <span className="text-red-600 font-bold text-lg">${service.price}</span>
                <Link href={`/services/${service.id}`} className="text-red-600 border border-red-600 px-4 py-1 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300">
                  <FiArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg hover:bg-red-600 hover:text-white transition disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-lg hover:bg-red-600 hover:text-white transition disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Services;
