"use client";

import React from "react";
import Image from "next/image";
import { FiTool, FiHeart, FiUsers } from "react-icons/fi";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-5 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
          About Car Doctor
        </h1>

        {/* Intro Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Welcome to <span className="font-semibold text-red-600">Car Doctor</span> — your trusted automotive partner. 
            We specialize in maintaining, repairing, and improving vehicles with the utmost care and professionalism. 
            Our goal is to keep your car performing at its best, ensuring safety and reliability on every drive.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Founded in 2025 by <span className="font-semibold">Tahreem Hossain</span>, 
            Car Doctor began as a small garage and has grown into a modern car service platform 
            dedicated to providing high-quality, affordable, and transparent auto care solutions.
          </p>
        </div>

        {/* Mission Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Mission & Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <FiTool className="mx-auto text-3xl text-red-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Service</h3>
            <p className="text-gray-600">
              We ensure every repair and inspection meets the highest quality standards with modern diagnostic tools.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <FiHeart className="mx-auto text-3xl text-red-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Care</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority. We believe in honest communication and friendly service.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <FiUsers className="mx-auto text-3xl text-red-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Our certified mechanics and technicians bring years of experience to deliver top-notch results.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Image
              src="/team1.jpg"
              alt="John Smith"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
            <p className="text-red-600 mb-2">Lead Mechanic</p>
            <p className="text-gray-600 text-sm">
              Expert in engine repair and diagnostics with over 10 years of experience.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Image
              src="/team2.jpg"
              alt="Sarah Khan"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Sarah Khan</h3>
            <p className="text-red-600 mb-2">Customer Advisor</p>
            <p className="text-gray-600 text-sm">
              Passionate about ensuring every customer receives transparent and friendly service.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Image
              src="/team3.jpg"
              alt="Ali Ahmed"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Ali Ahmed</h3>
            <p className="text-red-600 mb-2">Electrical Specialist</p>
            <p className="text-gray-600 text-sm">
              Skilled in car electrical systems, wiring, and diagnostic troubleshooting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
