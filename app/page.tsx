'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { motion } from 'framer-motion';
import AboutSection from './components/about/page';
import ServicesPage from './components/services/page';
import TechnologyPage from './components/tech/page';
import ContactPage from './components/contact/page';

const newsItems = [
  {
    id: 1,
    date: 'May 12, 2024',
    title: 'The Company Powerfully Contributed As A Participant In The Forum For Great Renewal',
    category: 'Industry Event',
    excerpt: 'Our team shared groundbreaking insights on renewable energy integration at the international forum.'
  },
  {
    id: 2,
    date: 'April 28, 2024',
    title: 'New Solar Farm Project Launched in Partnership with Local Communities',
    category: 'Project Update',
    excerpt: '20MW solar array will provide clean energy to 5,000 homes while creating local jobs.'
  },
  {
    id: 3,
    date: 'March 15, 2024',
    title: 'Company Recognized as Top Sustainable Energy Provider for 2024',
    category: 'Award',
    excerpt: 'Received the Green Energy Excellence award for innovative grid solutions.'
  }
];

function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative z-10 text-white w-full md:w-[38%] lg:w-[35%] px-6 md:px-8">
      {/* News Carousel */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        {newsItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="absolute inset-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0,
              x: `${(index - currentIndex) * 100}%`
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="w-full space-y-4">
              <p className="text-xs md:text-sm uppercase tracking-wider opacity-80">
                {item.category} • {item.date}
              </p>
              <motion.h2 
                className="text-xl md:text-2xl font-medium leading-snug"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {item.title}
              </motion.h2>
              <p className="text-sm md:text-base opacity-90 line-clamp-2">
                {item.excerpt}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-base font-medium border-b border-white/50 hover:border-white transition-all pb-1 w-fit"
              >
                <span>Read more</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        <button 
          onClick={prevSlide}
          className="text-white text-3xl opacity-75 hover:opacity-100 transition hover:scale-110"
          aria-label="Previous news"
        >
          ←
        </button>
        <div className="flex space-x-2">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition ${index === currentIndex ? 'bg-white opacity-100' : 'bg-white/50'}`}
              aria-label={`Go to news ${index + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={nextSlide}
          className="text-white text-3xl opacity-75 hover:opacity-100 transition hover:scale-110"
          aria-label="Next news"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col bg-[#f5f5f5] font-sans text-black">
      {/* Hero Section from Home Page */}
      <div
        className="flex flex-col min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/p3.jpg')" }}
      >
        {/* Navbar */}
        <div className="navbar bg-transparent shadow-none">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-opacity-80 rounded-box z-10 mt-3 w-52 p-2 shadow"
                style={{ backgroundColor: "oklch(0.828 0.111 230.318)" }}
              >
                <li><a>Services</a></li>
                <li>
                  <a>About</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>News</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost hover:bg-transparent text-xl text-white">Boadi Corp.</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Services</a></li>
              <li>
                <details>
                  <summary>About</summary>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a>News</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-outline hover:bg-transparent hover:border-white hover:text-white">
              <Image src="/user.png" alt="User icon" width={16} height={16} />
              Login
            </button>
          </div>
        </div>

        {/* Main Content from Home Page */}
        <main className="flex-grow flex flex-col md:flex-row items-center justify-between w-full px-5 md:px-10">
          <div className="flex flex-col items-start text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold">
              Choose a Future with
              <br />
              <span style={{ color: "oklch(0.828 0.111 230.318)" }}>
                Reliable Energy Solutions
              </span>
            </h1>
            <div className="flex gap-6 mt-6">
              <Link href="#" className="flex items-center space-x-2 border-b-2 border-white hover:text-gray-300">
                <span>Electricity Supply</span>
                ↗
              </Link>
              <Link href="#" className="flex items-center space-x-2 border-b-2 border-white hover:text-gray-300">
                <span>Other Supplies</span>
                ↗
              </Link>
            </div>
          </div>

          {/* Integrated News Carousel */}
          <NewsCarousel />
        </main>

        {/* Footer from Home Page */}
        <footer style={{ backgroundColor: "oklch(0.828 0.111 230.318)" }} className="w-full bg-opacity-80 text-white py-5 text-center text-sm">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
            <div className="flex items-center text-left space-x-4">
              <h2 className="text-6xl font-bold">24</h2>
              <p className="text-xs">DELIVERY TO THE REGION</p>
            </div>
            <div className="flex items-center text-left space-x-4">
              <h2 className="text-6xl font-bold">960</h2>
              <p className="text-xs">BLKW <br /> LEGAL OBLIGATION OF IMPLEMENTATION</p>
            </div>
            <div className="flex items-center text-left space-x-4 py-2">
              <h2 className="text-6xl font-bold">12</h2>
              <p className="text-xs">REGIONAL REPRESENTATIVE OFFICES</p>
            </div>
            <div className="text-left space-x-4">
              <p className="text-sm">The company is an active participant in the wholesale energy market.</p>
              <Link href="#">
                <button
                  style={{ backgroundColor: "oklch(0.5 0.134 242.749)" }}
                  className="text-white px-10 mt-2 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition"
                >
                  Contact Us
                  <span className="text-xl">↗</span>
                </button>
              </Link>
            </div>
          </div>
        </footer>
      </div>

      {/* Page Sections */}
      <AboutSection/>
      <ServicesPage/>
      <TechnologyPage/>
      <ContactPage/>
    </div>
  );
}