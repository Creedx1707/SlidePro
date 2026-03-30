'use client';

import { motion } from 'motion/react';
import { ArrowRight, MonitorPlay } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
      >
        <MonitorPlay size={16} />
        <span>Expert Presentation Design</span>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl"
      >
        Professional PowerPoint Presentations That <span className="text-blue-600 dark:text-blue-400">Impress & Convert</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl"
      >
        I design clean, modern, and impactful presentations for students, startups, and professionals and delivers them fast and tailored to your needs.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a href="#portfolio" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
          View Samples
        </a>
        <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          Order Now <ArrowRight className="ml-2" size={18} />
        </a>
      </motion.div>
    </section>
  );
}
