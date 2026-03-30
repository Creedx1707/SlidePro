export default function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-black text-slate-400 py-12 border-t border-slate-800 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-white">SlidePro</span>
            <p className="mt-2 text-sm max-w-xs">Professional PowerPoint Presentations That Impress & Convert.</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 dark:border-slate-900 text-sm text-center md:text-left flex flex-col md:flex-row justify-between">
          <p>&copy; {new Date().getFullYear()} SlidePro. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Impact.</p>
        </div>
      </div>
    </footer>
  );
}
