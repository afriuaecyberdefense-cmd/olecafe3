import { useState, useEffect, useCallback } from 'react';
import { Coffee, Info, MapPin, Phone, Shield } from 'lucide-react';

interface NavigationProps {
  onAdminClick: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

export default function Navigation({ onAdminClick }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { id: 'menu', label: 'Menu', icon: <Coffee className="w-5 h-5" />, href: '#menu' },
    { id: 'about', label: 'About', icon: <Info className="w-5 h-5" />, href: '#about' },
    { id: 'location', label: 'Location', icon: <MapPin className="w-5 h-5" />, href: '#location' },
    { id: 'contact', label: 'Contact', icon: <Phone className="w-5 h-5" />, href: '#contact' },
    { id: 'admin', label: 'Admin', icon: <Shield className="w-5 h-5" />, href: '#admin' },
  ];

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 50);

    // Determine active section
    const sections = ['hero', 'menu', 'about', 'location', 'contact'];
    const viewportMid = window.innerHeight / 2;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportMid + 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (item: NavItem) => {
    if (item.id === 'admin') {
      onAdminClick();
      return;
    }
    const element = document.getElementById(item.id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Top Navigation - hidden on mobile */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:flex items-center justify-between px-8 lg:px-12 h-16 ${
          scrolled ? 'bg-burgundy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <img
            src="/images/olecafe.jpeg"
            alt="Ole Cafe logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-brand italic text-white text-2xl font-bold">Olé</span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-lg ${
                activeSection === item.id
                  ? 'text-champagne'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
              {activeSection === item.id && item.id !== 'admin' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-champagne rounded-full" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-burgundy/95 backdrop-blur-md md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-around h-16 pb-safe">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`flex flex-col items-center justify-center gap-0.5 w-16 h-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-champagne'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              {item.icon}
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
              {activeSection === item.id && (
                <span className="absolute top-0 w-10 h-0.5 bg-champagne rounded-b-full" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Safe area padding for mobile */}
      <style>{`
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }
      `}</style>
    </>
  );
}
