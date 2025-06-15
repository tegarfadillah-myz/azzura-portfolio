// src/components/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Me from '../assets/images/me.jpg';
import ScrollReveal from './ScrollReveal';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center container mx-auto px-6 py-24 pt-32 md:py-24">
      {/* Grid dibuat agar di mobile (default) menjadi 1 kolom, dan di desktop (md) menjadi 2 kolom */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Kolom Kiri: Teks */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-center md:text-left" // <-- Dibuat center di mobile
        >
          {/* Penyesuaian ukuran font untuk mobile */}
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
            Azzura<br />
            Portfolio
          </h1>
          <div className="flex gap-8 justify-center md:justify-start"> {/* <-- Dibuat center di mobile */}
            <div className="text-center">
              {/* Penyesuaian ukuran font untuk mobile */}
              <p className="text-3xl sm:text-4xl font-bold text-warm-yellow">10+</p>
              <span className="text-dark-text/70">Projek Selesai</span>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-warm-yellow">5+</p>
              <span className="text-dark-text/70">Tahun Pengalaman</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4 justify-center md:justify-start"> {/* <-- Dibuat center di mobile */}
            {/* <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="#" className="text-2xl"><FaGithub /></motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="#" className="text-2xl"><FaLinkedin /></motion.a> */}
            <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="https://www.instagram.com/azzurazuka/" className="text-2xl"><FaInstagram /></motion.a>
          </div>
        </motion.div>
        
        {/* Kolom Kanan: Gambar */}
        {/* Kolom ini akan otomatis turun ke bawah di mobile karena layout grid */}
        <motion.div 
          className="relative w-full max-w-sm mx-auto mt-10 md:mt-0" // <-- Disesuaikan margin & width
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="absolute -top-3 -left-3 w-full h-full bg-warm-yellow rounded-3xl" // <-- Disesuaikan posisi
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          ></motion.div>
          <img src={Me} alt="Foto Profil" className="relative w-full h-full object-cover rounded-3xl shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;