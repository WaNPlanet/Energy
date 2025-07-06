
'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Kwame Boadi",
    position: "CEO & Founder",
    bio: "Visionary leader with 15+ years in energy sector innovation. Pioneered sustainable solutions across 3 continents.",
    image: "/CEO.png"
  },
  {
    id: 2,
    name: "Ama Serwah",
    position: "CTO",
    bio: "Tech innovator specializing in smart grid systems and renewable integration. PhD in Electrical Engineering.",
    image: "/CEO-2.png"
  },
  {
    id: 3,
    name: "Kofi Mensah",
    position: "Chief Engineer",
    bio: "Infrastructure expert with a track record of delivering large-scale energy projects on time and under budget.",
    image: "/CEO-3.png"
  }
];

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Our Story */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span style={{ color: "oklch(0.828 0.111 230.318)" }}>Our</span> Story
            </h2>
            <p className="text-lg mb-6">
              Founded in 2010, Boadi Corp began as a small energy consultancy with a vision to transform how businesses access and utilize power.
            </p>
            <p className="mb-6">
              Today, we`&apos;`re a leading provider of comprehensive energy solutions, serving clients across 24 regions with innovative approaches to power generation, distribution, and sustainability.
            </p>
            <div className="flex gap-4">
              <motion.div 
                className="text-center p-4 border rounded-lg"
                whileHover={{ y: -5 }}
              >
                <p className="text-3xl font-bold" style={{ color: "oklch(0.828 0.111 230.318)" }}>24</p>
                <p className="text-sm">Regions Served</p>
              </motion.div>
              <motion.div 
                className="text-center p-4 border rounded-lg"
                whileHover={{ y: -5 }}
              >
                <p className="text-3xl font-bold" style={{ color: "oklch(0.828 0.111 230.318)" }}>960+</p>
                <p className="text-sm">Projects Completed</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            suppressHydrationWarning
          >
            <Image
              src="/team.jpg"
              alt="Our team working"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative h-96 rounded-xl overflow-hidden shadow-lg order-last lg:order-first"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            suppressHydrationWarning
          >
            <Image
              src="/team2.jpg"
              alt="Energy infrastructure"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span style={{ color: "oklch(0.828 0.111 230.318)" }}>Our</span> Mission
            </h2>
            <p className="mb-6">
              To deliver reliable, sustainable energy solutions that power progress while minimizing environmental impact.
            </p>
            <ul className="space-y-4 mb-8">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <span className="inline-block mr-3" style={{ color: "oklch(0.828 0.111 230.318)" }}>→</span>
                <span>Innovate energy solutions for diverse needs</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <span className="inline-block mr-3" style={{ color: "oklch(0.828 0.111 230.318)" }}>→</span>
                <span>Reduce carbon footprint through smart technology</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <span className="inline-block mr-3" style={{ color: "oklch(0.828 0.111 230.318)" }}>→</span>
                <span>Empower communities with accessible power</span>
              </motion.li>
            </ul>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 border-b-2 border-black hover:border-opacity-50 transition-all group"
            >
              <span>Explore our services</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* Leadership Team Section */}
<section className="mb-20">
  <motion.h2 
    className="text-3xl md:text-4xl font-bold mb-12 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <span style={{ color: "oklch(0.828 0.111 230.318)" }}>Leadership</span> Team
  </motion.h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
    {teamMembers.map((member, index) => (
      <motion.div
        key={member.id}
        className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="relative w-full h-80 overflow-hidden">
          <Image
            src={member.image}
            alt={`Portrait of ${member.name}, ${member.position}`}
            fill
            className="object-cover object-top" // Changed to object-cover with object-top
            style={{ objectPosition: "top center" }} // Ensures faces are prioritized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            priority={index < 2} // Prioritize first two images
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
        </div>
        
        <div className="p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-bold mb-1 text-gray-900">{member.name}</h3>
          <p style={{ color: "oklch(0.828 0.111 230.318)" }} className="font-medium mb-4">{member.position}</p>
          <p className="text-gray-600 text-sm lg:text-base">
            {member.bio}
          </p>
          
          <div className="mt-6 flex space-x-4">
            {/* Social links remain the same */}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* CTA Section */}
      <motion.section 
        className="bg-white rounded-xl shadow-md p-8 md:p-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">
          Ready to <span style={{ color: "oklch(0.828 0.111 230.318)" }}>power your future</span>?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to discuss how our energy solutions can transform your business.
        </p>
        <Link
          href="#contact"
          className="inline-block text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition mx-auto group"
          style={{ backgroundColor: "oklch(0.5 0.134 242.749)" }}
        >
          <span>Get in touch</span>
          <span className="group-hover:translate-x-1 transition-transform">↗</span>
        </Link>
      </motion.section>
    </div>
  );
};

export default AboutSection;
