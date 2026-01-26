import { MessageCircle, MapPin } from 'lucide-react';
import { useState } from 'react';

interface FloatingWhatsAppProps {
    phoneNumber?: string;
    message?: string;
    locationUrl?: string;
    locationName?: string;
}

export default function FloatingWhatsApp({
    phoneNumber = '254723947514',
    message = 'Hello! I would like to know more about Menorah Faith Chapel.',
    locationUrl = 'https://share.google.com/88rmyJPqFv0BzZB7d',
    locationName = 'Ngong, Embulbul'
}: FloatingWhatsAppProps) {
    const [showMenu, setShowMenu] = useState(false);

    // Format phone number for WhatsApp API (remove spaces, dashes, etc.)
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-40">
            {/* Menu Items */}
            {showMenu && (
                <div className="absolute bottom-20 right-0 space-y-3 animate-in fade-in slide-in-from-bottom-2">
                    {/* Google Maps Button */}
                    <a
                        href={locationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                        title={`View us on Google Maps: ${locationName}`}
                        aria-label="View location on Google Maps"
                    >
                        <MapPin className="w-7 h-7 md:w-8 md:h-8" />
                        <span className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-navy text-white text-xs whitespace-nowrap rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            {locationName}
                        </span>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                        title="Chat with us on WhatsApp"
                        aria-label="Contact us on WhatsApp"
                    >
                        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
                        <span className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-navy text-white text-xs whitespace-nowrap rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            Message us
                        </span>
                    </a>
                </div>
            )}

            {/* Main Toggle Button */}
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gold hover:bg-gold/90 text-navy rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                title="Contact options"
                aria-label="Open contact menu"
            >
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>

                {/* Pulse Animation */}
                <span className="absolute inset-0 rounded-full bg-gold opacity-75 animate-ping" style={{ animationDuration: '2s' }} />
            </button>
        </div>
    );
}
