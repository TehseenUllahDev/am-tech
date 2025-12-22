import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, User, Briefcase, Phone, Database, Palette, Check, Sun, Moon } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import EmployeeDB from './pages/EmployeeDB';
import Privacy from './pages/Privacy';
import ChatBot from './components/ChatBot';
import { motion, AnimatePresence } from 'framer-motion';

// --- Fluid Background (Freepik Template Style) ---
const FluidBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-primary">
    {/* Pink Blob (Top Left) */}
    <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-accent/20 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob"></div>
    {/* Cyan Blob (Bottom Right) */}
    <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-accent-tertiary/20 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob animation-delay-2000"></div>
    {/* Violet Blob (Center/Floating) */}
    <div className="absolute top-[30%] left-[30%] w-[500px] h-[500px] bg-accent-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
    
    {/* Noise Texture for that 'Modern' feel */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
  </div>
);

// --- Navbar Component ---
const Navbar = ({ currentTheme, setTheme }: { currentTheme: string, setTheme: (t: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/', icon: <Globe size={16} /> },
    { name: 'Services', path: '/services', icon: <Briefcase size={16} /> },
    { name: 'Team', path: '/employees', icon: <Database size={16} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={16} /> },
    { name: 'About', path: '/about', icon: <User size={16} /> },
  ];

  const themes = [
    { id: 'default', name: 'Fluid Dark', color: '#020617', icon: <Moon size={14}/> },
    { id: 'theme-light', name: 'Fluid Light', color: '#f8fafc', icon: <Sun size={14}/> },
  ];

  return (
    <nav className="fixed w-full z-50 top-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-accent-secondary flex items-center justify-center text-white font-bold font-display shadow-[0_0_20px_var(--color-accent)] group-hover:rotate-12 transition-transform">
                AM
             </div>
             <span className="font-display font-bold text-xl tracking-wide text-text-main">Tech Hub</span>
          </Link>

          {/* Desktop Menu - Glass Pill */}
          <div className="hidden md:flex items-center glass-panel rounded-full px-2 py-2">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                    isActive ? 'text-white' : 'text-text-muted hover:text-text-main hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 bg-gradient-to-r from-accent to-accent-secondary rounded-full -z-10 shadow-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Switcher */}
            <div className="relative">
              <button 
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-text-muted hover:text-accent transition-colors hover:border-accent/50"
              >
                <Palette size={18} />
              </button>
              
              <AnimatePresence>
                {showThemeMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-48 glass-panel rounded-2xl overflow-hidden py-2 shadow-xl"
                  >
                    {themes.map(t => (
                      <button 
                        key={t.id}
                        onClick={() => { setTheme(t.id); setShowThemeMenu(false); }}
                        className="w-full text-left px-4 py-2.5 flex items-center justify-between hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          {t.icon}
                          <span className="text-sm font-medium text-text-main">{t.name}</span>
                        </div>
                        {currentTheme === t.id && <Check size={14} className="text-accent" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-full glass-panel flex items-center justify-center text-text-main"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-24 left-4 right-4 glass-panel rounded-3xl p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium ${
                    location.pathname === link.path ? 'bg-accent/20 text-accent border border-accent/20' : 'text-text-muted hover:bg-white/5 hover:text-text-main'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Footer Component ---
const Footer = () => (
  <footer className="mt-20 border-t border-ui-border bg-primary/30 backdrop-blur-lg">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4 group">
             <div className="w-8 h-8 rounded-lg bg-white text-accent flex items-center justify-center font-bold font-display shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                AM
             </div>
             <span className="font-display font-bold text-2xl tracking-wide text-white drop-shadow-[0_0_10px_var(--color-accent)]">TECH HUB</span>
          </Link>
          <p className="text-text-muted text-sm leading-relaxed">
            Pioneering the fluid nature of digital transformation. Bridging the gap between today's reality and tomorrow's innovation.
          </p>
        </div>
        <div>
          <h3 className="text-text-main font-bold mb-4 tracking-wide font-display">Services</h3>
          <ul className="space-y-2 text-text-muted text-sm">
            <li><Link to="/services" className="hover:text-accent transition-colors">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Cloud Solutions</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Consulting</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-text-main font-bold mb-4 tracking-wide font-display">Company</h3>
          <ul className="space-y-2 text-text-muted text-sm">
            <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link to="/employees" className="hover:text-accent transition-colors">Team</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-text-main font-bold mb-4 tracking-wide font-display">Connect</h3>
          <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white transition-all hover:scale-110 border border-white/5">
               <Globe size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white transition-all hover:scale-110 border border-white/5">
               <Phone size={18} />
             </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-ui-border text-center text-text-muted text-sm">
        &copy; {new Date().getFullYear()} AM Tech Hub Pvt. Ltd. | Designed with Fluidity.
      </div>
    </div>
  </footer>
);

const App = () => {
  const [theme, setTheme] = useState('default');

  return (
    <HashRouter>
      <div className={`min-h-screen bg-primary text-text-main flex flex-col font-sans selection:bg-accent selection:text-white ${theme}`}>
        <FluidBackground />
        <Navbar currentTheme={theme} setTheme={setTheme} />
        <main className="flex-grow pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/employees" element={<EmployeeDB />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </HashRouter>
  );
};

export default App;