'use client';

import { motion } from 'motion/react';
import { MessageSquare, PenTool, Eye, CheckSquare } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Send your requirements',
      description: 'Share your content, ideas, and any specific design preferences.'
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'I design your presentation',
      description: 'I will craft a professional and visually appealing presentation.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Review & revisions',
      description: 'You review the draft and I make necessary adjustments.'
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: 'Final delivery',
      description: 'Receive the final polished presentation ready to impress.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">How It Works</h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 dark:bg-blue-900 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg border-4 border-slate-50 dark:border-slate-950">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
