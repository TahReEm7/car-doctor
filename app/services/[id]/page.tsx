"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { FiLoader, FiArrowLeft } from "react-icons/fi";

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

const Page: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [service, setService] = useState<Service | null>(null);
  const params = useParams();
  const id = Number(params.id);
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  // Fetch services
  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data: Service[]) => {
        setServices(data);
        const found = data.find((s) => s.id === id);
        setService(found || null);
      })
      .catch((err) => console.error("Error loading services:", err));
  }, [id]);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading || !services.length || !service) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <FiLoader className="animate-spin text-6xl text-red-600" />
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-red-600 font-semibold mb-6 hover:underline transition"
      >
        <FiArrowLeft /> Back
      </button>

      {/* Service Card */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-t-4 border-red-600">
        {service.image && (
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={300}
            className="w-full object-cover"
          />
        )}

        <div className="p-6">
          <h1 className="text-3xl font-bold text-red-600 mb-3">{service.title}</h1>
          <p className="text-gray-700 mb-4">{service.description}</p>

          <div className="flex flex-wrap gap-4 text-gray-600 font-medium">
            <p className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
              Price: ${service.price}
            </p>
            {service.duration && (
              <p className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                Duration: {service.duration}
              </p>
            )}
            {service.category && (
              <p className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                Category: {service.category}
              </p>
            )}
            {service.rating && (
              <p className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                Rating: {service.rating}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
