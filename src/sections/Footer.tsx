import { Phone, Mail, Globe, ChevronUp, Facebook, MapPin } from 'lucide-react';
import { site } from '../data/site';

interface FooterProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

const content = {
  about: {
    en: 'Menorah Faith Chapel is a Christ-centered apostolic ministry committed to teaching the Word, cultivating prayer, and raising believers grounded in spiritual strength and global purpose.',
    es: 'Menorah Faith Chapel es un ministerio apostólico centrado en Cristo comprometido con enseñar la Palabra, cultivar la oración, y levantar creyentes arraigados en fortaleza espiritual y propósito global.',
    fr: 'Menorah Faith Chapel est un ministère apostolique centré sur Christ engagé à enseigner la Parole, cultiver la prière, et élever des croyants enracinés dans la force spirituelle et le but mondial.',
    pt: 'Menorah Faith Chapel é um ministério apostólico centrado em Cristo comprometido em ensinar a Palavra, cultivar a oração, e levantar crentes enraizados em força espiritual e propósito global.',
    de: 'Menorah Faith Chapel ist eine christuszentrierte apostolische Gemeinde, die sich verpflichtet hat, das Wort zu lehren, das Gebet zu kultivieren, und Gläubige zu erziehen, die in geistlicher Stärke und weltweitem Zweck verwurzelt sind.',
    zh: 'Menorah Faith Chapel是一个以基督为中心的使徒事工，致力于教导圣言、培养祷告，并兴起植根于灵力力量和全球目标的信徒。',
    ar: 'Menorah Faith Chapel هي وزارة رسولية تركز على المسيح ملتزمة بتعليم الكلمة، وزراعة الصلاة، ورفع المؤمنين المجذرين في القوة الروحية والغرض العالمي.',
  },
  quickLinks: {
    title: {
      en: 'Quick Links',
      es: 'Enlaces Rápidos',
      fr: 'Liens Rapides',
      pt: 'Links Rápidos',
      de: 'Schnelle Links',
      zh: '快速链接',
      ar: 'روابط سريعة',
    },
    links: [
      { en: 'About Us', es: 'Acerca de', fr: 'À propos', pt: 'Sobre', de: 'Über uns', zh: '关于我们', ar: 'من نحن' },
      { en: 'Services', es: 'Servicios', fr: 'Services', pt: 'Serviços', de: 'Dienste', zh: '聚会', ar: 'خدمات' },
      { en: 'Sermons', es: 'Sermones', fr: 'Sermons', pt: 'Sermões', de: 'Predigten', zh: '讲道', ar: 'العظات' },
      { en: 'Events', es: 'Eventos', fr: 'Événements', pt: 'Eventos', de: 'Veranstaltungen', zh: '活动', ar: 'أحداث' },
      { en: 'Give', es: 'Donar', fr: 'Donner', pt: 'Doar', de: 'Spenden', zh: '奉献', ar: 'التبرع' },
    ],
  },
  connect: {
    title: {
      en: 'Connect',
      es: 'Conectar',
      fr: 'Se Connecter',
      pt: 'Conectar',
      de: 'Verbinden',
      zh: '连接',
      ar: 'الاتصال',
    },
  },
  scripture: {
    en: '"Not by might, nor by power, but by my Spirit, says the Lord."',
    es: '"No por ejército, ni por fuerza, sino por mi Espíritu, ha dicho Jehová."',
    fr: '"Ce ne sera pas par une armée, ni par la force, mais par mon esprit, dit l\'Eternel."',
    pt: '"Não por exército, nem por força, mas pelo meu Espírito, disse o Senhor."',
    de: '"Nicht durch Heer, nicht durch Kraft, sondern durch meinen Geist, spricht der Herr."',
    zh: '"万军之耶和华说：不是倚靠势力，不是倚靠才能，乃是倚靠我的灵。"',
    ar: '"ليس بجيش ولا بقوة بل بروحي يقول الرب."',
  },
  scriptureRef: 'Zechariah 4:6',
  copyright: {
    en: 'All rights reserved.',
    es: 'Todos los derechos reservados.',
    fr: 'Tous droits réservés.',
    pt: 'Todos os direitos reservados.',
    de: 'Alle Rechte vorbehalten.',
    zh: '版权所有。',
    ar: 'جميع الحقوق محفوظة.',
  },
};

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export default function Footer({ currentLang, onLangChange }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white w-full">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <img src="/Menorah Logo.jpeg" alt="Menorah Faith Chapel Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-serif text-lg text-white">Menorah Faith Chapel</span>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-gold">A Light Unto the Nations</span>
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
                {content.about[currentLang as keyof typeof content.about] || content.about.en}
              </p>

              {/* Scripture */}
              <div className="pt-6 border-t border-white/10">
                <p className="font-serif italic text-white/80 text-sm">
                  {content.scripture[currentLang as keyof typeof content.scripture] || content.scripture.en}
                </p>
                <p className="mt-2 text-xs text-gold">— {content.scriptureRef}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg text-white mb-5">
                {content.quickLinks.title[currentLang as keyof typeof content.quickLinks.title] || content.quickLinks.title.en}
              </h4>
              <ul className="space-y-3">
                {content.quickLinks.links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        const sections = ['#about', '#services', '#media', '#events', '#contact'];
                        scrollToSection(sections[index]);
                      }}
                      className="text-sm text-white/70 hover:text-gold transition-colors"
                    >
                      {link[currentLang as keyof typeof link] || link.en}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-serif text-lg text-white mb-5">
                {content.connect.title[currentLang as keyof typeof content.connect.title] || content.connect.title.en}
              </h4>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{site.phone}</span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>{site.email}</span>
                </a>
                <a
                  href={site.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>{site.location.label}</span>
                </a>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3 mb-6">
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Menorah Faith Chapel on Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-navy hover:bg-gold hover:border-gold transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>

              {/* Language Selector */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-gold" />
                  <span className="text-xs text-white/60 uppercase tracking-wider">Language</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => onLangChange(lang.code)}
                      className={`px-2 py-1 text-xs rounded border transition-colors ${currentLang === lang.code
                          ? 'bg-gold text-navy border-gold'
                          : 'bg-transparent text-white/60 border-white/20 hover:border-gold/50'
                        }`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-white/50 text-center sm:text-left">
                © {new Date().getFullYear()} Menorah Faith Chapel. {content.copyright[currentLang as keyof typeof content.copyright] || content.copyright.en}
              </p>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs text-white/50 hover:text-gold transition-colors group"
              >
                <span>{currentLang === 'en' ? 'Back to Top' : currentLang === 'es' ? 'Volver Arriba' : 'Back to Top'}</span>
                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
