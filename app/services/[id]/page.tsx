"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";


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
   

  if (!service) return <p>Loading or Service not found...</p>;
   if (!services) return <p>Loading or Service not found...</p>;

  return (
    <div className="max-w-xl mx-auto p-4 border rounded shadow">
      <h1 className="text-2xl font-bold">{service.title}</h1>
      {service.image && (
        <Image src={service.image} alt={service.title} width={400} height={250} />
      )}
      <p className="mt-2">{service.description}</p>
      <p className="mt-2 font-semibold">Price: ${service.price}</p>
      {service.duration && <p>Duration: {service.duration}</p>}
      {service.category && <p>Category: {service.category}</p>}
      {service.rating && <p>Rating: {service.rating}</p>}
    </div>
  );
};

export default Page;
