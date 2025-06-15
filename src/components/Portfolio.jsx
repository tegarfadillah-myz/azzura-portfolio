// src/components/Portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
// Impor gambar Anda
import bread1 from '../assets/images/bread1.jpg';
import bread2 from '../assets/images/bread2.jpg';
import bread3 from '../assets/images/bread3.jpg';
import bread4 from '../assets/images/bread4.jpg';

const portfolioData = [
  { id: 1, title: 'Artisan Sourdough', img: bread1, category: 'Roti' },
  { id: 2, title: 'Flaky Croissants', img: bread2, category: 'Pastry' },
  { id: 3, title: 'Rustic Baguette', img: bread3, category: 'Roti' },
  { id: 4, title: 'Sweet Cinnamon Rolls', img: bread4, category: 'Pastry' },
];

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = portfolioData.find(p => p.id === selectedId);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-milk-white">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center">Portfolio</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              className="rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={item.img} alt={item.title} className="w-full h-80 object-cover" />
              <div className="p-4 bg-cream">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-light-brown">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            layoutId={selectedId}
            // Tambahkan `items-end sm:items-center` untuk posisi modal di mobile
            className="fixed inset-0 bg-black bg-opacity-70 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modifikasi Modal Content */}
            <div className="bg-milk-white rounded-t-2xl sm:rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative">
              <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-64 sm:h-96 object-cover" />
              {/* Padding responsif */}
              <div className="p-4 sm:p-6">
                {/* Font responsif */}
                <h2 className="text-2xl sm:text-3xl font-bold">{selectedProject.title}</h2>
                <p className="mt-2 text-dark-text/80">{/*... deskripsi ...*/}</p>
              </div>
              <motion.button 
                onClick={() => setSelectedId(null)}
                // Pindahkan tombol close ke dalam agar lebih mudah dijangkau
                className="absolute top-4 right-4 bg-cream/80 backdrop-blur-sm p-2 rounded-full"
                whileHover={{ scale: 1.2 }}
              >
                <FaTimes />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;