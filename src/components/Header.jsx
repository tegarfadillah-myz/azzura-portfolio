// src/components/Header.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    // Menu datang dari kanan
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } 
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    }
  };
  
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    // Header tetap menjadi container utama
    <header className="fixed top-0 left-0 w-full z-40">
      
      {/* Bagian Navigasi dengan Latar Belakang Blur */}
      <nav className="relative z-50 bg-cream/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-dark-text">Azzura.Bake</a>
          
          {/* Navigasi Desktop */}
          <div className="hidden md:flex gap-8 font-semibold">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href} className="hover:text-warm-yellow transition-colors">
                {link.title}
              </a>
            ))}
          </div>

          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl z-50 relative">
              {/* Menampilkan ikon close jika menu terbuka */}
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MENU OVERLAY DIPINDAHKAN KE SINI --- */}
      {/* Menu sekarang menjadi sibling dari <nav>, bukan child */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Latar Belakang Hitam Transparan */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Konten Menu */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-milk-white shadow-lg z-50 p-8 flex flex-col"
            >
              <h3 className="text-gray-400 font-semibold mb-8">Navigasi</h3>
              <div className="flex flex-col gap-8">
                {navLinks.map((link, index) => (
                  <motion.a 
                    key={link.title} 
                    href={link.href} 
                    className="text-3xl font-bold hover:text-warm-yellow"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.3 + index * 0.1 } }}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;