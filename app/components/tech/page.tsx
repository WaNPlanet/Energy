'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";
import { FiArrowRight } from 'react-icons/fi';

const technologies = [
  {
    title: "Smart Grid Solutions",
    description: "Our AI-powered grid management systems optimize energy distribution with 99.98% uptime",
    media: "/tech/wind-grid.mp4",
    stats: [
      { value: "40%", label: "Efficiency Gain" },
      { value: "24/7", label: "Monitoring" }
    ]
  },
  {
    title: "Renewable Integration",
    description: "Seamlessly incorporate solar, wind, and storage into existing infrastructure",
    media: "/tech/wind.mp4",
    stats: [
      { value: "2.4MW", label: "Avg. Installation" },
      { value: "0.02%", label: "Downtime" }
    ]
  },
  {
    title: "Predictive Analytics",
    description: "Machine learning models that forecast demand and prevent outages before they occur",
    media: "/tech/grid.mp4",
    stats: [
      { value: "96%", label: "Accuracy" },
      { value: "15min", label: "Lead Time" }
    ]
  }
];

const Globe = dynamic(() => import('../SvgGlobe'), {
  ssr: false,
});

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-900 font-sans">
      {/* Hero Section */}
      <div className="relative h-96 md:h-screen/2 flex items-center justify-center bg-black overflow-hidden">
        <Image
          src="/tech/hero-bg.jpg"
          alt="Technology background"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Powering <span className="text-blue-400">Tomorrow</span> Today
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Innovative technologies transforming the energy landscape
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Tech
            <FiArrowRight />
          </motion.button>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-600">Technological</span> Edge
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cutting-edge solutions that set new standards in energy efficiency and reliability
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 w-full">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                >
                  <source src={tech.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{tech.title}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <div className="flex gap-4">
                  {tech.stats.map((stat, i) => (
                    <div key={i} className="bg-blue-50 px-4 py-2 rounded-lg">
                      <p className="text-blue-600 font-bold text-xl">{stat.value}</p>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Innovation Section */}
        <div className="bg-black text-white rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:order-last">
              <div className="relative h-full min-h-[400px]">
                <div className="w-full h-full">
                  <Globe />
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-blue-400">Innovation</span> at Our Core
              </h2>
              <p className="text-gray-300 mb-8">
                Our dedicated R&D center houses the brightest minds working on next-generation energy solutions. 
                From quantum computing applications to nano-material research, we're pushing boundaries daily.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▹</span>
                  <span>Annual investment of $12M in research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▹</span>
                  <span>Partnerships with 8 leading universities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▹</span>
                  <span>42 patents filed in the last 3 years</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all w-fit">
                Visit Our Labs
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-blue-600">Innovate</span> With Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Partner with our technology team to build customized energy solutions for your specific needs.
          </p>
          <motion.button
            className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Tech Team
          </motion.button>
        </div>
      </div>
    </div>
  );
}