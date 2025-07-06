'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Energy Consultation",
      description: "Expert analysis of your energy needs with customized solutions to optimize efficiency and reduce costs.",
      icon: "/energy.png",
    },
    {
      id: 2,
      title: "Solar Solutions",
      description: "End-to-end solar panel installation and maintenance for residential and commercial properties.",
      icon: "/solar.png",
    },
    {
      id: 3,
      title: "Grid Management",
      description: "Advanced grid optimization services to ensure stable and reliable power distribution.",
      icon: "/grid.png",
    },
    {
      id: 4,
      title: "Energy Storage",
      description: "Cutting-edge battery storage solutions to maximize your renewable energy utilization.",
      icon: "/energy.png",
    },
    {
      id: 5,
      title: "Maintenance Services",
      description: "Comprehensive maintenance programs to keep your energy systems running at peak performance.",
      icon: "/solar.png",
    },
    {
      id: 6,
      title: "Sustainability Planning",
      description: "Strategic roadmaps to transition your operations to renewable energy sources.",
      icon: "/grid.png",
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-4 py-16">
      {/* Title Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.h2 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Comprehensive energy solutions tailored to power your future
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
            <div className="mt-6 text-center">
              <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                Learn more →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p className="text-lg text-gray-700 mb-6">
          Ready to transform your energy infrastructure?
        </p>
        <motion.button
          className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Today
        </motion.button>
      </motion.div>
    </div>
  );
}