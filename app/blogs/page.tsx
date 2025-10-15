"use client";

import React, { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
}

interface QA {
  id: number;
  question: string;
  answer: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Maintain Your Car Engine Like a Pro",
    date: "October 10, 2025",
    author: "Tahreem Hossain",
    content:
      "Regular oil changes, checking coolant levels, and timely servicing can significantly extend your car engine’s life. Learn the essential habits that keep your engine healthy.",
  },
  {
    id: 2,
    title: "Top 5 Signs Your Car Needs Immediate Service",
    date: "September 28, 2025",
    author: "Car Doctor Team",
    content:
      "From strange noises to smoke under the hood — we cover the top warning signs that indicate it’s time to visit your mechanic before it’s too late.",
  },
  {
    id: 3,
    title: "Best Tips for Saving Fuel While Driving in the City",
    date: "August 18, 2025",
    author: "Tahreem Hossain",
    content:
      "Smooth acceleration, maintaining steady speed, and regular tire checks can save you a lot of fuel. Here’s a guide for smarter, more efficient driving.",
  },
];

const qnaData: QA[] = [
  {
    id: 1,
    question: "How often should I change my car oil?",
    answer:
      "Typically, every 5,000 to 7,000 kilometers, but it depends on your vehicle model and driving conditions. Always check your manufacturer’s manual for exact intervals.",
  },
  {
    id: 2,
    question: "What are the most common reasons for engine overheating?",
    answer:
      "Low coolant levels, broken radiator fans, or a faulty thermostat are common causes. Regular maintenance helps prevent overheating issues.",
  },
  {
    id: 3,
    question: "Can I wash my car engine myself?",
    answer:
      "Yes, but do it carefully. Cover electrical parts, use mild pressure, and avoid soaking sensitive areas. If unsure, let a professional handle it.",
  },
];

const BlogPage: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number): void => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className=" bg-gray-50 py-5 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
          Car Doctor Blog
        </h1>

        {/* Blog List */}
        <div className="space-y-8 mb-16">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-black mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {post.date} • {post.author}
              </p>
              <p className="text-gray-700 leading-relaxed">{post.content}</p>
              <button className="mt-4 text-red-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>

        {/* Q&A Section */}
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
          FAQs & Q&A
        </h2>

        <div className="space-y-4">
          {qnaData.map((qa) => (
            <div
              key={qa.id}
              className="bg-white rounded-lg shadow-md p-5 cursor-pointer"
              onClick={() => toggleQuestion(qa.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {qa.question}
                </h3>
                <span className="text-red-600 text-xl">
                  {openQuestion === qa.id ? "−" : "+"}
                </span>
              </div>
              {openQuestion === qa.id && (
                <p className="mt-3 text-gray-700">{qa.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
