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

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          {/* Menorah Logo Animation */}
          <div className="w-24 h-24 mx-auto mb-6 animate-pulse">
            <img src="/Menorah Logo.jpeg" alt="Menorah Faith Chapel Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="font-serif text-2xl text-navy mb-2">Menorah Faith Chapel</h1>
          <p className="text-sm text-foreground/60">A Light Unto the Nations</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navigation */}
      <Navigation
        currentLang={currentLang}
        onLangChange={handleLangChange}
        onOpenBooking={() => setIsBookingOpen(true)}
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
