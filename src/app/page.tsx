"use client";  // Ensure this is present for client-side rendering

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import Footer from '../app/components/Footer'; // Import Footer component
import Header from '../app/components/Header'; // Import Header component

interface Item {
  name: string;
  price: string;
  image: string;
}

export default function Home() {
  // State to track cart items
  const [cart, setCart] = useState<Item[]>([]);

  // Handle Add to Cart functionality
  const handleAddToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);  // Add item to cart state
    alert(`${item.name} has been added to your cart!`); // Show confirmation
  };

  return (
    <>
      <Header />

      <section className="hero">
        <div>
          <div className="font-serif mt-10 mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap flex flex-col items-center">
            <p>WELCOME</p>
            <p>TO</p>
            <p>RUBAB</p>
            <p>ELITE</p>
            <p>SHOP</p>
          </div>

          <h1 className='font-semibold mt-40 text-center text-1xl'>The Best Store To Shop Online</h1>
          <p className="mb-8 mt-40 text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> 
            Proin egestas orci quis mi convallis ipsum.
          </p>
          <div className="flex items-center justify-center mt-10">
            <Link 
              href="/ShopNowButton" 
              className="bg-black hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="imageContent -ml-40 flex items-center justify-evenly">
          <Image 
            src={'/bagss.jpg'} 
            alt="Fashion Model" 
            layout="responsive" 
            width={1000} 
            height={800} 
            className="w-full max-w-[1000]"
          />
        </div>
      </section>

      <section className="new-arrivals bg-gray-400 py-12 px-4 flex flex-col items-center mb-60">
        <h2 className="text-3xl text-black font-bold flex justify-items-center bg-pink-200">New Arrivals</h2>
        <p className="text-gray-600 font-serif mb-60">Discover our latest products!</p>
        <div className="image-grid">
          {/* New Arrival Item 1 */}
          <div className="group">
            <Image src="/menpic4.jpg" alt="Stylish Jacket" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Shirt Trouser</h3>
            <p className="text-gray-500 mt-1">$49.99</p>
            <button className="add-to-cart" onClick={() => handleAddToCart({ name: 'Shirt Trouser', price: '$49.99', image: '/menpic4.jpg' })}>
              Add to Cart
            </button>
          </div>

          {/* New Arrival Item 2 */}
          <div className="group">
            <Image src="/menpic5.jpg" alt="Casual Sneakers" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Shirt Trouser</h3>
            <p className="text-gray-500 mt-1">$39.99</p>
            <button className="add-to-cart" onClick={() => handleAddToCart({ name: 'Shirt Trouser', price: '$39.99', image: '/menpic5.jpg' })}>
              Add to Cart
            </button>
          </div>

          {/* New Arrival Item 3 */}
          <div className="group">
            <Image src="/menpic2.jpg" alt="Classic Watch" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Shirt Trouser</h3>
            <p className="text-gray-500 mt-1">$99.99</p>
            <button className="add-to-cart" onClick={() => handleAddToCart({ name: 'Shirt Trouser', price: '$99.99', image: '/menpic2.jpg' })}>
              Add to Cart
            </button>
          </div>
{/* New Arrival Item 4 */}
<div className="group">
            <Image src="/menpic1.jpg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Shirt Trouser</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart" onClick={() => handleAddToCart({ name: 'Shirt Trouser', price: '$99.99', image: '/menpic2.jpg' })}>
              Add to Cart
            </button>
          </div>
          {/* New Arrival Item 5*/}
          <div className="group">
            <Image src="/men1.jpg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Coat Pant</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart" onClick={() => handleAddToCart({ name: 'Coat Pant', price: '$99.99', image: '/menpic2.jpg' })}>
              Add to Cart
            </button>
          </div>
          {/* New Arrival Item 6 */}
          <div className="group">
            <Image src="/men2.jpg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Coat Pant</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart" onClick={() => handleAddToCart({ name: 'Coat Pant', price: '$99.99', image: '/menpic2.jpg' })}>
              Add to Cart
            </button>
          </div>
          {/* New Arrival Item 7 */}
          <div className="group">
            <Image src="/child1.jpg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Shirt Pant</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart" onClick={() => handleAddToCart({ name: 'Shirt Pant', price: '$99.99', image: '/menpic2.jpg' })}>
              Add to Cart
            </button>
          </div>
          {/* New Arrival Item 8 */}
          <div className="group">
            <Image src="/child2.jpg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Shirt Pant</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart" onClick={() => handleAddToCart({ name: 'Shirt Pant', price: '$99.99', image: '/menpic2.jpg' })}>
              Add to Cart
            </button>
          </div>
        
          {/* Additional items follow the same pattern */}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .hero {
          display: flex;
          justify-content: space-between;
          padding: 5px 5%;
          background-color: #f5e4e3;
          align-items: center;
        }

        .textContent {
          max-width: 50%;
        }

        .textContent h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .textContent p {
          font-size: 1rem;
          margin-bottom: 20px;
        }

        .shopBtn {
          background-color: black;
          color: white;
          padding: 5px 5px;
          text-decoration: none;
          font-weight: bold;
        }

        .imageContent img {
          width: 400px;
          height: auto;
          border-radius: 10px;
        }

        .new-arrivals {
          padding: 3rem 0;
          text-align: center;
          background-color: #f5e4e3;
          padding: 30px;
          border-radius: 20px;
        }

        .image-grid {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .group {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 250px;
          transition: transform 0.3s ease;
        }

        .group:hover {
          transform: translateY(-5px);
        }

        .add-to-cart {
          background-color: #000;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          margin-top: 10px;
          cursor: pointer;
        }

        .add-to-cart:hover {
          background-color: #333;
        }
      `}</style>
    </>
  );
}
