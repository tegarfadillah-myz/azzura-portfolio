import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import Croissant from '../assets/icons/Croissant';
import AboutImage from '../assets/images/about-image.jpg'; // <-- Impor gambar baru

const About = () => {
  const repeatingText = "about. about. about. about. ".repeat(10);

  // Array untuk posisi, ukuran, dan rotasi croissant agar lebih mudah diatur
  const decorativeCroissants = [
    { top: '10%', left: '5%', size: 'w-32', rotation: -15 },
    { top: '25%', left: '90%', size: 'w-40', rotation: 10 },
    { top: '70%', left: '10%', size: 'w-24', rotation: 25 },
    { top: '85%', left: '80%', size: 'w-48', rotation: -5 },
    { top: '50%', left: '50%', size: 'w-20', rotation: 20 },
  ];

  return (
    <section id="about" className="relative py-24 md:py-40 bg-milk-white overflow-hidden">
      
      {/* ===== Elemen Dekoratif yang Disebar ===== */}
      {decorativeCroissants.map((croissant, index) => (
        <Croissant
          key={index}
          className={`absolute ${croissant.size} opacity-20 z-0`}
          style={{
            top: croissant.top,
            left: croissant.left,
            transform: `rotate(${croissant.rotation}deg)`,
          }}
        />
      ))}

      {/* Teks Latar Belakang Repetitif */}
      <motion.div
        className="absolute top-0 left-0 whitespace-nowrap text-8xl md:text-9xl font-black text-cream opacity-50 select-none z-10"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
      >
        {repeatingText}
      </motion.div>

      {/* ===== Konten Utama dengan Layout Grid ===== */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Kolom Kiri: Teks Deskripsi */}
          <ScrollReveal>
            <div className='text-center md:text-left'>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Tentang Saya
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-dark-text/80">
            Saya adalah seorang baker berpengalaman yang pernah bekerja di restoran profesional dan memiliki keahlian dalam menciptakan berbagai jenis roti berkualitas, mulai dari sourdough hingga brioche. Dengan latar belakang kuliner yang kuat dan kecintaan pada dunia memanggang, saya memadukan teknik, rasa, dan kreativitas untuk menghadirkan roti yang tidak hanya lezat, tetapi juga memiliki nilai seni dan cerita di setiap bagiannya.
              </p>
            </div>
          </ScrollReveal>

          {/* Kolom Kanan: Gambar */}
          <motion.div
            className="hidden md:block" // Sembunyikan di mobile, tampilkan di desktop
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img 
              src={AboutImage} 
              alt="Proses membuat adonan roti" 
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;