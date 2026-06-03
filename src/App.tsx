import { useState, useEffect } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import YearlyThemeVideo from './sections/YearlyThemeVideo';
import Leadership from './sections/Leadership';
import MinistryPillars from './sections/MinistryPillars';
import ServiceTimes from './sections/ServiceTimes';
import Media from './sections/Media';
import Events from './sections/Events';
import Ministries from './sections/Ministries';
import GlobalReach from './sections/GlobalReach';
import Giving from './sections/Giving';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import AppointmentBooking from './components/AppointmentBooking';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LightCursor from './components/LightCursor';
import LogoSeal from './components/LogoSeal';
import { useSmoothScroll, useScrollReveal } from './lib/motion';

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Buttery smooth scroll + scroll-triggered reveals across the page.
  useSmoothScroll();
  useScrollReveal();

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle language change
  const handleLangChange = (lang: string) => {
    setCurrentLang(lang);
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = lang;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center">
          {/* Living gold seal */}
          <div className="mx-auto mb-6 flex justify-center">
            <LogoSeal size={104} />
          </div>
          <h1 className="font-serif text-2xl text-white mb-2">Menorah Faith Chapel</h1>
          <p className="text-sm text-gold/80 tracking-wide">A Light Unto the Nations</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Light cursor */}
      <LightCursor />

      {/* Navigation */}
      <Navigation
        currentLang={currentLang}
        onLangChange={handleLangChange}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Floating Contact Buttons */}
      <FloatingWhatsApp
        phoneNumber="254723947514"
        message="Hello! I would like to know more about Menorah Faith Chapel."
        locationUrl="https://maps.app.goo.gl/7Y2NasaMrH7YJztm6"
        locationName="Ngong, Embulbul"
      />

      {/* Appointment Booking Modal */}
      {isBookingOpen && (
        <AppointmentBooking
          currentLang={currentLang}
          onClose={() => setIsBookingOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero currentLang={currentLang} />

        {/* Yearly Theme Video */}
        <YearlyThemeVideo currentLang={currentLang} />

        {/* Leadership & Authority */}
        <Leadership currentLang={currentLang} />

        {/* Ministry Pillars */}
        <MinistryPillars currentLang={currentLang} />

        {/* Service Times */}
        <ServiceTimes currentLang={currentLang} />

        {/* Media & Teachings */}
        <Media currentLang={currentLang} />

        {/* Events & Calendar */}
        <Events currentLang={currentLang} />

        {/* Ministries */}
        <Ministries currentLang={currentLang} />

        {/* Global Reach */}
        <GlobalReach currentLang={currentLang} />

        {/* Kingdom Giving */}
        <Giving currentLang={currentLang} />

        {/* Contact & Booking */}
        <Contact currentLang={currentLang} onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onLangChange={handleLangChange} />
    </div>
  );
}

export default App;
