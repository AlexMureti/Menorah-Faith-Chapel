import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Calendar } from 'lucide-react';

interface NavigationProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
  onOpenBooking: () => void;
}

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

const navLinks = [
  { href: '#about', label: { en: 'About', es: 'Acerca', fr: 'À propos', pt: 'Sobre', de: 'Über', zh: '关于', ar: 'من نحن' } },
  { href: '#services', label: { en: 'Services', es: 'Servicios', fr: 'Services', pt: 'Serviços', de: 'Dienste', zh: '聚会', ar: 'خدمات' } },
  { href: '#media', label: { en: 'Media', es: 'Multimedia', fr: 'Média', pt: 'Mídia', de: 'Medien', zh: '媒体', ar: 'وسائط' } },
  { href: '#ministries', label: { en: 'Ministries', es: 'Ministerios', fr: 'Ministères', pt: 'Ministérios', de: 'Ministerien', zh: '事工', ar: 'خدمات' } },
  { href: '#giving', label: { en: 'Giving', es: 'Ofrenda', fr: 'Donner', pt: 'Doar', de: 'Geben', zh: '奉献', ar: 'العطاء' } },
  { href: '#events', label: { en: 'Events', es: 'Eventos', fr: 'Événements', pt: 'Eventos', de: 'Veranstaltungen', zh: '活动', ar: 'أحداث' } },
  { href: '#contact', label: { en: 'Contact', es: 'Contacto', fr: 'Contact', pt: 'Contato', de: 'Kontakt', zh: '联系', ar: 'اتصل' } },
];

export default function Navigation({ currentLang, onLangChange, onOpenBooking }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Full-width navbar with centered content */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-border/30 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
          }`}
      >
        {/* Full-width container */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group flex-shrink-0"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img src="/Menorah Logo.jpeg" alt="Menorah Faith Chapel Logo" className="w-full h-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <span className="font-serif text-lg md:text-xl tracking-wide text-navy">
                  Menorah Faith Chapel
                </span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-covenant">
                  A Light Unto the Nations
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-navy transition-colors"
                >
                  {link.label[currentLang as keyof typeof link.label] || link.label.en}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Book Appointment Button - Desktop */}
              <button
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-navy bg-gold hover:bg-gold-dark border border-gold transition-colors rounded-sm"
              >
                <Calendar className="w-4 h-4" />
                <span className="hidden xl:inline">
                  {currentLang === 'en' ? 'Book Appointment' : currentLang === 'es' ? 'Reservar Cita' : 'Book Appointment'}
                </span>
                <span className="xl:hidden">{currentLang === 'en' ? 'Book' : 'Reservar'}</span>
              </button>

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-1.5 px-2 sm:px-3 py-2 text-sm font-medium text-foreground/70 hover:text-navy transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {languages.find(l => l.code === currentLang)?.name}
                  </span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border border-border/50 rounded-md shadow-lg py-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLangChange(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary ${currentLang === lang.code ? 'bg-secondary/50' : ''
                          }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 -mr-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-navy" />
                ) : (
                  <Menu className="w-6 h-6 text-navy" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 right-0 bg-white shadow-lg max-h-[100vh] overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="mobileMenorahGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="50%" stopColor="#FFF8DC" />
                        <stop offset="100%" stopColor="#FFD700" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M50 10 L50 25 M30 25 L70 25 M25 25 L25 40 M35 25 L35 40 M50 25 L50 45 M65 25 L65 40 M75 25 L75 40 M20 40 L80 40"
                      stroke="url(#mobileMenorahGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="font-serif text-sm text-navy">Menorah Faith Chapel</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <X className="w-5 h-5 text-navy" />
              </button>
            </div>

            <div className="px-4 sm:px-6 py-4">
              {/* Book Appointment - Mobile */}
              <button
                onClick={() => {
                  onOpenBooking();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mb-4 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-navy bg-gold hover:bg-gold-dark border border-gold transition-colors rounded-sm"
              >
                <Calendar className="w-4 h-4" />
                {currentLang === 'en' ? 'Book Appointment' : currentLang === 'es' ? 'Reservar Cita' : 'Book Appointment'}
              </button>

              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-3 px-2 text-sm font-medium text-foreground hover:text-navy hover:bg-secondary/30 transition-colors border-b border-border/30 last:border-0 rounded-sm"
                >
                  {link.label[currentLang as keyof typeof link.label] || link.label.en}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="mt-4 w-full btn-primary"
              >
                {currentLang === 'en' ? 'Plan a Visit' : currentLang === 'es' ? 'Planificar Visita' : 'Plan a Visit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
