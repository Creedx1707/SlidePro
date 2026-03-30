'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The presentation was clean and professional. Helped me score well in my final-year project.",
      author: "Engineering Student"
    },
    {
      quote: "Great design and fast delivery. Highly recommended!",
      author: "Startup Founder"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What Clients Say</h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-50 dark:bg-slate-950 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-blue-100 dark:text-blue-900/40 w-12 h-12" />
              <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-6 relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="font-bold text-slate-900 dark:text-white">
                — {testimonial.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
