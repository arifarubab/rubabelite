"use client";
import React from "react";
import Header from "../components/Header"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct

export default function Collections() {
  const items = [
    { id: 1, title: "Winter Collection", image: "/menpic1.jpg" },
    { id: 2, title: "Summer Collection", image: "/menpic2.jpg" },
    { id: 3, title: "Autumn Collection", image: "/menpic3.jpg" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Collections</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image} // Corrected to use the dynamic `item.image`
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">Explore the best styles.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
