'use client';

import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
      title: 'Academic Presentations',
      items: ['Final year project PPTs', 'Seminar presentations', 'Research presentations']
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      title: 'Business Presentations',
      items: ['Pitch decks', 'Sales presentations', 'Company profiles']
    },
    {
      icon: <Palette className="w-10 h-10 text-blue-600" />,
      title: 'Custom Design',
      items: ['Redesign existing PPT', 'Improve visuals & structure', 'Add animations & transitions']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What I Offer</h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md dark:hover:shadow-slate-800/50 transition-all"
            >
              <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-xl flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span className="text-slate-600 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
