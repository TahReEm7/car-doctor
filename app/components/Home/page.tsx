"use client";

import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import AboutUs from "../About Us/AboutUs";
import OurServices from "../OurServices/OurServices";
import Availability from "../Availibility/Availability";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Team from "../Team/Team";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <AiOutlineLoading3Quarters className="animate-spin text-6xl text-red-500" />
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <AboutUs />
      <OurServices />
      <Availability />
      <Team/>
    </div>
  );
}

export default HomePage;
