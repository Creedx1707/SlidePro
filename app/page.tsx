import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Portfolio from '@/components/Portfolio';
import WhyChooseMe from '@/components/WhyChooseMe';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <WhyChooseMe />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
