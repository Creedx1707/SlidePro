'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      priceINR: '₹749',
      priceUSD: '$9',
      features: ['Up to 10 slides', '1 revision', 'Delivery in 4 days'],
      highlighted: false
    },
    {
      name: 'Standard',
      priceINR: '₹1599',
      priceUSD: '$19',
      features: ['Up to 20 slides', '3 revisions', 'Delivery in 2 days'],
      highlighted: true
    },
    {
      name: 'Premium',
      priceINR: '₹3299',
      priceUSD: '$39',
      features: ['Up to 30 slides', '5 revisions', 'Delivery in 1 day'],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Pricing Plans</h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-blue-600 text-white shadow-xl scale-105 z-10' 
                  : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-300 text-blue-900 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </div>
              )}
              <h3 className={`text-xl font-bold mb-4 ${plan.highlighted ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.priceINR}</span>
                <span className={`text-lg ml-2 ${plan.highlighted ? 'text-blue-200' : 'text-slate-500 dark:text-slate-400'}`}>
                  ({plan.priceUSD})
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.highlighted ? 'text-blue-200' : 'text-blue-600 dark:text-blue-400'}`} />
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-slate-600 dark:text-slate-300'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted 
                    ? 'bg-white text-blue-600 hover:bg-slate-100' 
                    : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40'
                }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-slate-500 dark:text-slate-400">
          <p>Note: Custom pricing available for large or urgent projects.</p>
        </div>
      </div>
    </section>
  );
}
