"use client";

import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import AboutUs from "../About Us/AboutUs";
import OurServices from "../OurServices/OurServices";
import Availability from "../Availibility/Availability";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Team from "../Team/Team";
import { FiLoader } from "react-icons/fi";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
     return (
         <div className="min-h-screen flex justify-center items-center bg-gray-50">
           <FiLoader className="animate-spin text-6xl text-red-600" />
         </div>
       );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <Banner />
      <AboutUs />
      <OurServices />
      <Availability />
      <Team/>
    </div>
  );
}

export default HomePage;
