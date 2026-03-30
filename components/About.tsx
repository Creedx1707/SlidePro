'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://picsum.photos/seed/workspace/800/600" 
                alt="Presentation Designer Workspace" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Who Am I?</h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
              <p>
                I am a presentation designer specializing in academic and business PowerPoint slides.
              </p>
              <p>
                With experience in creating MATLAB project presentations, reports, and professional slides, I focus on delivering visually appealing and well-structured presentations that clearly communicate your ideas.
              </p>
              <p>
                Whether you are a student preparing for your final-year presentation or a business owner pitching your idea, I can help you stand out.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
