'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseMe() {
  const reasons = [
    'Clean & professional designs',
    'Fast delivery',
    'Affordable pricing',
    'Custom-made presentations',
    'Easy communication'
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 dark:bg-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Why Choose My Service?</h2>
            <p className="text-blue-100">What makes my presentations stand out.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-blue-700/50 dark:bg-blue-800/50 p-4 rounded-xl"
              >
                <CheckCircle2 className="text-blue-200 shrink-0" />
                <span className="font-medium text-lg">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
