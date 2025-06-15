// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skillsData = [
  { name: "Sourdough Making", level: 95 },
  { name: "Pastry & Viennoiserie", level: 90 },
  { name: "Waiters", level: 85 },
  { name: "Baker", level: 100 },
  { name: "Helper", level: 80 },
  { name: "Office Management Automation", level: 88 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-12 text-center">
            Keahlian
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <ScrollReveal key={index}>
              <div className="mb-4">
                <div className="flex justify-between items-end mb-1">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-xl font-bold text-warm-yellow">
                    {skill.level}%
                  </p>
                </div>
                <div className="w-full bg-milk-white rounded-full h-4">
                  <motion.div
                    className="bg-light-brown h-4 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
