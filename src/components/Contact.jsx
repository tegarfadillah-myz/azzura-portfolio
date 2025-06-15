// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [isFocused, setIsFocused] = useState({ name: false, email: false, message: false });

  const handleFocus = (field) => setIsFocused({ ...isFocused, [field]: true });
  const handleBlur = (field) => setIsFocused({ ...isFocused, [field]: false });

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center">Hubungi Saya</h2>
        </ScrollReveal>
        <ScrollReveal>
          <form className="max-w-xl mx-auto flex flex-col gap-6">
            <div className="relative">
              <input type="text" id="name" onFocus={() => handleFocus('name')} onBlur={() => handleBlur('name')} className="peer w-full p-4 bg-milk-white border-2 border-transparent focus:border-light-brown rounded-lg outline-none transition-all" />
              <motion.label 
                htmlFor="name" 
                className="absolute left-4 transition-all duration-300 text-dark-text/50"
                animate={{
                  top: isFocused.name ? '-12px' : '16px',
                  fontSize: isFocused.name ? '12px' : '16px',
                  backgroundColor: isFocused.name ? '#F5EFE6' : 'transparent', // bg-cream
                  padding: isFocused.name ? '0 8px' : '0',
                }}
              >
                Nama Anda
              </motion.label>
            </div>
            
            <div className="relative">
              <input type="email" id="email" onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} className="peer w-full p-4 bg-milk-white border-2 border-transparent focus:border-light-brown rounded-lg outline-none transition-all" />
              <motion.label 
                htmlFor="email" 
                className="absolute left-4 transition-all duration-300 text-dark-text/50"
                animate={{
                  top: isFocused.email ? '-12px' : '16px',
                  fontSize: isFocused.email ? '12px' : '16px',
                  backgroundColor: isFocused.email ? '#F5EFE6' : 'transparent',
                  padding: isFocused.email ? '0 8px' : '0',
                }}
              >
                Email Anda
              </motion.label>
            </div>

            <div className="relative">
              <textarea id="message" rows="5" onFocus={() => handleFocus('message')} onBlur={() => handleBlur('message')} className="peer w-full p-4 bg-milk-white border-2 border-transparent focus:border-light-brown rounded-lg outline-none transition-all"></textarea>
              <motion.label 
                htmlFor="message" 
                className="absolute left-4 transition-all duration-300 text-dark-text/50"
                animate={{
                  top: isFocused.message ? '-12px' : '16px',
                  fontSize: isFocused.message ? '12px' : '16px',
                  backgroundColor: isFocused.message ? '#F5EFE6' : 'transparent',
                  padding: isFocused.message ? '0 8px' : '0',
                }}
              >
                Pesan Anda
              </motion.label>
            </div>

            <motion.button 
              type="submit" 
              className="bg-warm-yellow text-dark-text font-bold py-4 px-8 rounded-lg shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Kirim Pesan
            </motion.button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;