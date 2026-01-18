import { useEffect, useRef } from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

interface EventsProps {
  currentLang: string;
}

const content = {
  sectionLabel: {
    en: 'Events & Calendar',
    es: 'Eventos y Calendario',
    fr: 'Événements et Calendrier',
    pt: 'Eventos e Calendário',
    de: 'Veranstaltungen und Kalender',
    zh: '活动与日历',
    ar: 'الأحداث والتقويم',
  },
  headline: {
    en: 'Upcoming Gatherings',
    es: 'Próximas Reuniones',
    fr: 'Prochains Rassemblements',
    pt: 'Próximos Encontros',
    de: 'Bevorstehende Versammlungen',
    zh: '即将举行的聚会',
    ar: 'الاجتماعات القادمة',
  },
  theme: {
    en: '2026 Prophetic Theme',
    es: 'Tema Profético 2026',
    fr: 'Thème Prophétique 2026',
    pt: 'Tema Profético 2026',
    de: 'Prophetisches Thema 2026',
    zh: '2026年先知主题',
    ar: 'الموضوع النبوي 2026',
  },
  themeVerse: {
    en: '"The people who know their God shall be strong, and carry out great exploits."',
    es: '"El pueblo que conoce a su Dios será fuerte y realizará grandes hazañas."',
    fr: '"Le peuple qui connaît son Dieu sera fort et accomplira de grandes exploits."',
    pt: '"O povo que conhece seu Deus será forte e realizará grandes feitos."',
    de: '"Das Volk, das seinen Gott kennt, wird stark sein und große Taten vollbringen."',
    zh: '"认识神的子民必刚强行事。"',
    ar: '"الشعب الذي يعرف إلهه يكون قويًا ويحقق إنجازات عظيمة."',
  },
  themeRef: {
    en: 'Daniel 11:32b',
    es: 'Daniel 11:32b',
    fr: 'Daniel 11:32b',
    pt: 'Daniel 11:32b',
    de: 'Daniel 11:32b',
    zh: '但以理书 11:32b',
    ar: 'دانيال 11:32ب',
  },
  viewAll: {
    en: 'View Full Calendar',
    es: 'Ver Calendario Completo',
    fr: 'Voir le Calendrier Complet',
    pt: 'Ver Calendário Completo',
    de: 'Vollständigen Kalender Ansehen',
    zh: '查看完整日历',
    ar: 'عرض التقويم الكامل',
  },
};

const upcomingEvents = [
  {
    date: { day: '25', month: { en: 'Jan', es: 'Ene', fr: 'Jan', pt: 'Jan', de: 'Jan', zh: '1月', ar: 'يناير' } },
    title: {
      en: 'Leadership Summit',
      es: 'Cumbre de Liderazgo',
      fr: 'Sommet de Leadership',
      pt: 'Cúpula de Liderança',
      de: 'Führungsgipfel',
      zh: '领袖峰会',
      ar: 'قمة القيادة',
    },
    description: {
      en: 'Annual gathering for ministry leaders, pastors, and church planters.',
      es: 'Reunión anual para líderes ministeriales, pastores y plantadores de iglesias.',
      fr: 'Rassemblement annuel pour les leaders ministériels, pasteurs et planteurs d\'églises.',
      pt: 'Encontro anual para líderes ministeriais, pastores e plantadores de igrejas.',
      de: 'Jährliche Versammlung für Dienstleiter, Pastoren und Kirchengründer.',
      zh: '年度事工领袖、牧师和植堂者聚会。',
      ar: 'اجتماع سنوي لقادة الخدمة والخدام وزارعي الكنائس.',
    },
    location: 'Main Sanctuary',
    time: '9:00 AM',
  },
  {
    date: { day: '15', month: { en: 'Feb', es: 'Feb', fr: 'Fév', pt: 'Fev', de: 'Feb', zh: '2月', ar: 'فبراير' } },
    title: {
      en: 'Global Missions Week',
      es: 'Semana de Misiones Globales',
      fr: 'Semaine des Missions Mondiales',
      pt: 'Semana de Missões Globais',
      de: 'Weltweite Missionswoche',
      zh: '全球宣教周',
      ar: 'أسبوع الرسالات العالمية',
    },
    description: {
      en: 'Special emphasis on international missions with guest speakers from partner churches worldwide.',
      es: 'Énfasis especial en misiones internacionales con oradores invitados de iglesias asociadas mundialmente.',
      fr: 'Accent particulier sur les missions internationales avec des conférenciers invités d\'églises partenaires mondiales.',
      pt: 'Ênfase especial em missões internacionais com palestrantes convidados de igrejas parceiras mundiais.',
      de: 'Besonderer Schwerpunkt auf internationalen Missionen mit Gastrednern von Partnerkirchen weltweit.',
      zh: '特别重视国际宣教，来自全球伙伴教会的讲员分享。',
      ar: 'تركيز خاص على الرسالات الدولية مع ضيوف من الكنائس الشريكة حول العالم.',
    },
    location: 'Various Locations',
    time: 'Multiple Sessions',
  },
  {
    date: { day: '01', month: { en: 'Mar', es: 'Mar', fr: 'Mar', pt: 'Mar', de: 'Mär', zh: '3月', ar: 'مارس' } },
    title: {
      en: 'Prophetic Conference',
      es: 'Conferencia Profética',
      fr: 'Conférence Prophétique',
      pt: 'Conferência Profética',
      de: 'Prophetische Konferenz',
      zh: '先知特会',
      ar: 'مؤتمر نبوي',
    },
    description: {
      en: 'Three-day conference on hearing God, prophetic ministry, and spiritual discernment.',
      es: 'Conferencia de tres días sobre escuchar a Dios, el ministerio profético y el discernimiento espiritual.',
      fr: 'Conférence de trois jours sur entendre Dieu, le ministère prophétique, et le discernement spirituel.',
      pt: 'Conferência de três dias sobre ouvir Deus, o ministério profético e o discernimento espiritual.',
      de: 'Dreitägige Konferenz über Gott hören, prophetisches Dienst, und geistliche Unterscheidung.',
      zh: '为期三天的特会，主题：聆听神、先知事工、属灵分辨。',
      ar: 'مؤتمر لمدة ثلاثة أيام عن سماع الله، والخدمة النبوية، والتمييز الروحي.',
    },
    location: 'Main Sanctuary',
    time: 'Full Days',
  },
];

export default function Events({ currentLang }: EventsProps) {
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
    <section id="events" ref={sectionRef} className="py-20 md:py-28 bg-secondary/30">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 fade-element opacity-0">
          <span className="w-12 h-px bg-gold" />
          <span className="section-label">
            {content.sectionLabel[currentLang as keyof typeof content.sectionLabel] || content.sectionLabel.en}
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left - Theme Banner */}
          <div className="lg:col-span-1 fade-element opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="bg-navy text-white p-8 rounded-sm h-full">
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
                {content.theme[currentLang as keyof typeof content.theme] || content.theme.en}
              </p>
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-white font-medium">
                {content.themeVerse[currentLang as keyof typeof content.themeVerse] || content.themeVerse.en}
              </p>
              <p className="mt-4 text-sm text-white font-medium">
                — {content.themeRef[currentLang as keyof typeof content.themeRef] || content.themeRef.en}
              </p>

              {/* Menorah Decoration */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <img src="/Menorah Logo.jpeg" alt="Menorah Logo" className="w-12 h-12 opacity-40 object-contain" />
              </div>
            </div>
          </div>

          {/* Right - Events List */}
          <div className="lg:col-span-2 fade-element opacity-0" style={{ animationDelay: '0.2s' }}>
            <h2 className="editorial-heading mb-8">
              {content.headline[currentLang as keyof typeof content.headline] || content.headline.en}
            </h2>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex gap-4 md:gap-6 p-4 md:p-6 bg-white border border-border/50 rounded-sm hover:shadow-editorial transition-shadow"
                >
                  {/* Date */}
                  <div className="flex-shrink-0 w-16 md:w-20 text-center">
                    <div className="bg-navy text-white py-2 md:py-3 rounded-t-sm">
                      <p className="text-xs uppercase tracking-wider text-gold">
                        {event.date.month[currentLang as keyof typeof event.date.month] || event.date.month.en}
                      </p>
                    </div>
                    <div className="bg-secondary py-2 md:py-3 rounded-b-sm">
                      <p className="font-serif text-2xl md:text-3xl text-navy">{event.date.day}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg md:text-xl text-navy mb-2">
                      {event.title[currentLang as keyof typeof event.title] || event.title.en}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-3">
                      {event.description[currentLang as keyof typeof event.description] || event.description.en}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-foreground/60">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All CTA */}
            <button className="mt-8 inline-flex items-center text-navy hover:text-covenant transition-colors group">
              {content.viewAll[currentLang as keyof typeof content.viewAll] || content.viewAll.en}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
