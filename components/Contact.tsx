'use client';

import { motion } from 'motion/react';
import { Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Presentation Now</h2>
            <p className="text-slate-300 text-lg mb-10">
              Ready to upgrade your presentation? Contact me now and get a professional PPT designed for your needs.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email Me</div>
                  <div className="text-lg font-medium">hello@example.com</div>
                </div>
              </a>
              
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
                <div className="bg-green-500 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">WhatsApp</div>
                  <div className="text-lg font-medium">Message Me</div>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-slate-900 dark:text-white border border-transparent dark:border-slate-800"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white dark:bg-slate-950 text-slate-900 dark:text-white" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white dark:bg-slate-950 text-slate-900 dark:text-white" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Project Details</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white dark:bg-slate-950 text-slate-900 dark:text-white" placeholder="Tell me about your presentation needs..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors flex justify-center items-center">
                Send Message <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
