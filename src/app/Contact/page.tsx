"use client";
import React from "react";
import Header from "../components/Header"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct

export default function Contact() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <form 
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted successfully!");
            }}
          >
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required
                className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message"
                required
                className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
