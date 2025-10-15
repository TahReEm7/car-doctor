"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiLoader } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(true); // Page loader

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 1500); // simulate page load
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call or form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <FiLoader className="animate-spin text-6xl text-red-600" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
          <div>
            <FiMail className="mx-auto text-2xl text-red-600" />
            <p className="mt-2 text-gray-700">info@cardoctor.com</p>
          </div>
          <div>
            <FiPhone className="mx-auto text-2xl text-red-600" />
            <p className="mt-2 text-gray-700">+880 1936532058</p>
          </div>
          <div>
            <FiMapPin className="mx-auto text-2xl text-red-600" />
            <p className="mt-2 text-gray-700">Uttara, Dhaka</p>
          </div>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="text-center">
            <p className="text-green-600 font-medium text-lg">
              ✅ Thank you! Your message has been sent.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-70"
            >
              {loading ? (
                <>
                  <FiLoader className="animate-spin text-xl" /> Sending...
                </>
              ) : (
                <>
                  <FiSend className="text-xl" /> Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
