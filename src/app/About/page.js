"use client";

import React from "react";
import Header from "../components/Header"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-6 bg-white shadow-lg rounded-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-gray-600 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-blue-600">Rubab Club</span>, your one-stop destination for all your shopping needs. 
            At Rubab Club, we believe that shopping should be convenient, enjoyable, and accessible to everyone.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            From the latest fashion trends to everyday essentials, we offer a wide range of products to suit your lifestyle. 
            Our team is committed to providing high-quality items at competitive prices, ensuring that you get the best value for your money.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8">Why Choose Us?</h2>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>Fast and secure delivery.</li>
            <li>Easy returns and refunds.</li>
            <li>24/7 customer support.</li>
            <li>Exclusive discounts and deals.</li>
          </ul>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Thank you for choosing Rubab Club as your trusted shopping partner. 
            We look forward to serving you and making your shopping experience unforgettable!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
