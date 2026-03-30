'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      category: 'Final Year Engineering Project',
      title: 'Grid Connected Solar PV System',
      description: 'A professional academic presentation covering system design, simulation results, and conclusions. Designed for final-year electrical engineering students.',
      image: 'https://picsum.photos/seed/solar/600/400'
    },
    {
      id: 2,
      category: 'Startup Pitch Deck',
      title: 'AI-Based Automation Startup Pitch',
      description: 'Clean and modern pitch deck including problem statement, solution, business model, and financial projections.',
      image: 'https://picsum.photos/seed/startup/600/400'
    },
    {
      id: 3,
      category: 'Business Sales Presentation',
      title: 'Digital Marketing Agency Proposal',
      description: 'High-converting presentation designed to attract clients with clear visuals, service breakdown, and pricing strategy.',
      image: 'https://picsum.photos/seed/marketing/600/400'
    },
    {
      id: 4,
      category: 'Seminar Presentation',
      title: 'Artificial Intelligence in Power Systems',
      description: 'Engaging seminar PPT with diagrams, key concepts, and simplified explanations for easy understanding.',
      image: 'https://picsum.photos/seed/ai/600/400'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Sample Presentations</h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-slate-800/50 transition-all duration-300 bg-white dark:bg-slate-950"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-700 dark:text-blue-400">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
