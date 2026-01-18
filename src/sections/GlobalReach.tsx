import { useEffect, useRef } from 'react';
import { Languages } from 'lucide-react';

interface GlobalReachProps {
  currentLang: string;
}

const content = {
  sectionLabel: {
    en: 'Global Presence',
    es: 'Presencia Global',
    fr: 'Présence Mondiale',
    pt: 'Presença Global',
    de: 'Weltweite Präsenz',
    zh: '全球存在',
    ar: 'الوجود العالمي',
  },
  headline: {
    en: 'A Light Unto the Nations',
    es: 'Una Luz para las Naciones',
    fr: 'Une Lumière pour les Nations',
    pt: 'Uma Luz para as Nações',
    de: 'Ein Licht für die Nationen',
    zh: '万民之光',
    ar: 'نور للأمم',
  },
  subtext: {
    en: 'Menorah Faith Chapel serves as a beacon of apostolic teaching and prophetic ministry, reaching across continents, cultures, and languages to advance the Kingdom of Christ.',
    es: 'Menorah Faith Chapel sirve como faro de enseñanza apostólica y ministerio profético, alcanzando a través de continentes, culturas y idiomas para avanzar el Reino de Cristo.',
    fr: 'Menorah Faith Chapel sert de phare d\'enseignement apostolique et de ministère prophétique, atteignant à travers les continents, cultures et langues pour faire avancer le Royaume du Christ.',
    pt: 'Menorah Faith Chapel serve como farol de ensino apostólico e ministério profético, alcançando através de continentes, culturas e idiomas para avançar o Reino de Cristo.',
    de: 'Menorah Faith Chapel dient als Leuchtfeuer apostolischer Lehre und prophetischen Dienstes, das über Kontinente, Kulturen und Sprachen reicht, um das Reich Christi voranzubringen.',
    zh: 'Menorah Faith Chapel是使徒教导和先知事工的灯塔，跨越大陆、文化和语言，推进基督的国度。',
    ar: 'تعمل Menorah Faith Chapel كمنارة للتعليم الرسولي والخدمة النبوية، تمتد عبر القارات والثقافات واللغات لتقدم ملك المسيح.',
  },
  scripture: {
    en: '"I will also give you as a light to the nations, that you may be My salvation to the ends of the earth."',
    es: '"También te daré por luz a las naciones, para que seas mi salvación hasta los confines de la tierra."',
    fr: '"Je te donnerai aussi pour lumière des nations, afin que tu sois mon salut jusqu\'aux extrémités de la terre."',
    pt: '"Também te darei por luz das nações, para que sejas a minha salvação até os confins da terra."',
    de: '"Ich will dich auch zum Licht der Nationen machen, dass du mein Heil seiest bis an das Ende der Erde."',
    zh: '"我还要使你作万民的光，使我的救恩直到地极。"',
    ar: '"وأعطيك أيضًا نورًا للأمم لتكون خلاصي إلى أقاصي الأرض."',
  },
  scriptureRef: {
    en: 'Isaiah 49:6',
    es: 'Isaías 49:6',
    fr: 'Ésaïe 49:6',
    pt: 'Isaías 49:6',
    de: 'Jesaja 49:6',
    zh: '以赛亚书 49:6',
    ar: 'إشعياء 49:6',
  },
  stats: {
    countries: {
      en: 'Countries Reached',
      es: 'Países Alcanzados',
      fr: 'Pays Atteints',
      pt: 'Países Alcançados',
      de: 'Erreichte Länder',
      zh: '触及国家',
      ar: 'الدول المُبلغ إليها',
    },
    languages: {
      en: 'Languages',
      es: 'Idiomas',
      fr: 'Langues',
      pt: 'Idiomas',
      de: 'Sprachen',
      zh: '语言',
      ar: 'اللغات',
    },
    partners: {
      en: 'Global Partners',
      es: 'Socios Globales',
      fr: 'Partenaires Mondiaux',
      pt: 'Parceiros Globais',
      de: 'Weltweite Partner',
      zh: '全球伙伴',
      ar: 'الشركاء العالميون',
    },
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

const stats = [
  { value: '45+', label: content.stats.countries },
  { value: '7', label: content.stats.languages },
  { value: '120+', label: content.stats.partners },
];

export default function GlobalReach({ currentLang }: GlobalReachProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-element');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="text-center mb-16 fade-element opacity-0">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="section-label">
              {content.sectionLabel[currentLang as keyof typeof content.sectionLabel] || content.sectionLabel.en}
            </span>
            <span className="w-12 h-px bg-gold" />
          </div>
          <h2 className="editorial-heading max-w-2xl mx-auto mb-6">
            {content.headline[currentLang as keyof typeof content.headline] || content.headline.en}
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto">
            {content.subtext[currentLang as keyof typeof content.subtext] || content.subtext.en}
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="relative mb-16 fade-element opacity-0" style={{ animationDelay: '0.1s' }}>
          {/* Simplified World Map SVG */}
          <div className="relative aspect-[2/1] w-full max-w-4xl mx-auto">
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              {/* Simplified world map paths */}
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#002060" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#002060" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#002060" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Continents - simplified shapes */}
              <path
                d="M150 200 Q200 150 280 180 T400 200 Q450 180 500 200 L500 350 Q400 380 300 350 T150 300 Z"
                fill="url(#mapGradient)"
                stroke="#002060"
                strokeWidth="1"
                strokeOpacity="0.2"
              />
              <path
                d="M550 150 Q650 120 750 160 T900 200 Q920 250 880 300 T750 350 Q650 380 550 350 Z"
                fill="url(#mapGradient)"
                stroke="#002060"
                strokeWidth="1"
                strokeOpacity="0.2"
              />
              <path
                d="M200 400 Q300 380 400 410 T550 400 L550 480 Q400 500 250 480 Z"
                fill="url(#mapGradient)"
                stroke="#002060"
                strokeWidth="1"
                strokeOpacity="0.2"
              />
            </svg>

            {/* Connection Points */}
            <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-gold rounded-full animate-pulse" />
            <div className="absolute top-[40%] left-[35%] w-2 h-2 bg-covenant rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="absolute top-[35%] right-[25%] w-3 h-3 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="absolute top-[50%] right-[15%] w-2 h-2 bg-covenant rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
            <div className="absolute bottom-[25%] left-[30%] w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
            <div className="absolute bottom-[30%] right-[30%] w-3 h-3 bg-covenant rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16 fade-element opacity-0" style={{ animationDelay: '0.2s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-navy mb-2">{stat.value}</p>
              <p className="text-sm text-foreground/60">
                {stat.label[currentLang as keyof typeof stat.label] || stat.label.en}
              </p>
            </div>
          ))}
        </div>

        {/* Scripture */}
        <div className="max-w-3xl mx-auto text-center fade-element opacity-0" style={{ animationDelay: '0.3s' }}>
          <div className="py-6 border-y border-border/50">
            <p className="font-serif italic text-navy/80 text-lg md:text-xl leading-relaxed">
              {content.scripture[currentLang as keyof typeof content.scripture] || content.scripture.en}
            </p>
            <p className="mt-3 text-sm text-covenant font-medium">
              — {content.scriptureRef[currentLang as keyof typeof content.scriptureRef] || content.scriptureRef.en}
            </p>
          </div>
        </div>

        {/* Languages Supported */}
        <div className="mt-16 fade-element opacity-0" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Languages className="w-5 h-5 text-navy" />
            <span className="text-sm text-foreground/60">
              {currentLang === 'en' ? 'Content available in' : currentLang === 'es' ? 'Contenido disponible en' : currentLang === 'fr' ? 'Contenu disponible en' : 'Content available in'}
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang) => (
              <div
                key={lang.code}
                className={`px-4 py-2 rounded-full border text-sm ${
                  currentLang === lang.code
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-foreground/70 border-border hover:border-navy/30'
                }`}
              >
                <span className="mr-2">{lang.flag}</span>
                {lang.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
