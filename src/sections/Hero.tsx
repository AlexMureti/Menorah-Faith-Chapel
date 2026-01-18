import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Zap } from 'lucide-react';

interface HeroProps {
  currentLang: string;
}

const content = {
  headline: {
    en: 'Raising a People Rooted in Power, Truth, and Global Impact',
    es: 'Formando un Pueblo Arraigado en Poder, Verdad e Impacto Global',
    fr: 'Élever un Peuple Enraciné dans la Puissance, la Vérité et l\'Impact Mondial',
    pt: 'Formando um Povo Enraizado em Poder, Verdade e Impacto Global',
    de: 'Ein Volk Erziehen, das in Kraft, Wahrheit und Weltweitem Einfluss Verwurzelt Ist',
    zh: '培养植根于能力、真理和全球影响力的子民',
    ar: 'تربية شعب متجذر في القوة والحقيقة والتأثير العالمي',
  },
  subtext: {
    en: 'A Christ-centered apostolic ministry advancing the Kingdom through teaching, worship, leadership, and global mission.',
    es: 'Un ministerio apostólico centrado en Cristo que avanza el Reino mediante la enseñanza, la adoración, el liderazgo y la misión global.',
    fr: 'Un ministère apostolique centré sur Christ faisant avancer le Royaume par l\'enseignement, l\'adoration, le leadership et la mission mondiale.',
    pt: 'Um ministério apostólico centrado em Cristo, avançando o Reino através do ensino, adoração, liderança e missão global.',
    de: 'Eine christuszentrierte apostolische Gemeinde, die das Reich durch Lehre, Anbetung, Führung und weltweite Mission voranbringt.',
    zh: '一个以基督为中心的使徒事工，通过教导、敬拜、领导和全球使命推进神的国度。',
    ar: 'وزارة رسولية تركز على المسيح تقدم المملكة من خلال التعليم والعبادة والقيادة والمهمة العالمية.',
  },
  cta1: {
    en: 'Book Appointment',
    es: 'Reservar Cita',
    fr: 'Réserver un Rendez-vous',
    pt: 'Agendar Consulta',
    de: 'Termin Buchen',
    zh: '预约',
    ar: 'حجز موعد',
  },
  cta2: {
    en: 'Watch Latest Message',
    es: 'Ver Último Mensaje',
    fr: 'Regarder le Dernier Message',
    pt: 'Assistir Última Mensagem',
    de: 'Neueste Botschaft Ansehen',
    zh: '观看最新信息',
    ar: 'مشاهدة أحدث رسالة',
  },
  scripture: {
    en: 'Zechariah 4:6',
    es: 'Zacarías 4:6',
    fr: 'Zacharie 4:6',
    pt: 'Zacarias 4:6',
    de: 'Sacharja 4:6',
    zh: '撒迦利亚书 4:6',
    ar: 'زكريا 4:6',
  },
  scriptureText: {
    en: '"Not by might, nor by power, but by my Spirit, says the Lord of hosts."',
    es: '"No por ejército, ni por fuerza, sino por mi Espíritu, ha dicho Jehová de los ejércitos."',
    fr: '"Ce ne sera pas par une armée, ni par la force, mais par mon esprit, dit l\'Eternel des armées."',
    pt: '"Não por exército, nem por força, mas pelo meu Espírito, disse o Senhor dos Exércitos."',
    de: '"Nicht durch Heer, nicht durch Kraft, sondern durch meinen Geist, spricht der Herr der Heerscharen."',
    zh: '"万军之耶和华说：不是倚靠势力，不是倚靠才能，乃是倚靠我的灵。"',
    ar: '"ليس بجيش ولا بقوة بل بروحي يقول رب الجنود."',
  },
  theme2026: {
    en: 'Our Year of Divine Favor, Supernatural Momentum, Increase and Establishment',
    es: 'Nuestro Año de Favor Divino, Momento Sobrenatural, Incremento y Establecimiento',
    fr: 'Notre Année de Faveur Divine, d\'Impulsion Surnaturelle, d\'Accroissement et d\'Établissement',
    pt: 'Nosso Ano de Favor Divino, Momento Sobrenatural, Aumento e Estabelecimento',
    de: 'Unser Jahr der Göttlichen Gunst, Übernatürlichen Dynamik, des Wachstums und der Etablierung',
    zh: '我们神圣恩惠、超自然动力、增长与建立之年',
    ar: 'عامنا للنعمة الإلهية، والزخم الخارق، والزيادة والتأسيس',
  },
  vision: {
    en: 'Our Vision',
    es: 'Nuestra Visión',
    fr: 'Notre Vision',
    pt: 'Nossa Visão',
    de: 'Unsere Vision',
    zh: '我们的愿景',
    ar: 'رؤيتنا',
  },
  visionContent: {
    en: 'A global apostolic community transforming lives, advancing the Kingdom of God, and impacting nations through the power of the Holy Spirit.',
    es: 'Una comunidad apostólica global que transforma vidas, avanza el Reino de Dios e impacta naciones a través del poder del Espíritu Santo.',
    fr: 'Une communauté apostolique mondiale transformant les vies, faisant avancer le Royaume de Dieu et impactant les nations par la puissance du Saint-Esprit.',
    pt: 'Uma comunidade apostólica global transformando vidas, avançando o Reino de Deus e impactando nações pelo poder do Espírito Santo.',
    de: 'Eine globale apostolische Gemeinschaft, die Leben verändert, das Reich Gottes vorantreibt und Nationen durch die Kraft des Heiligen Geistes beeinflusst.',
    zh: '一个全球使徒性社区，通过圣灵的大能改变生命、推进神的国度、影响列国。',
    ar: 'مجتمع رسولي عالمي يحول الحياة ويقدم ملكوت الله ويؤثر على الأمم بقوة الروح القدس.',
  },
  yearsDream: {
    en: 'This Year\'s Dream',
    es: 'El Sueño de Este Año',
    fr: 'Le Rêve de Cette Année',
    pt: 'O Sonho Deste Ano',
    de: 'Traum Dieses Jahres',
    zh: '今年的梦想',
    ar: 'حلم هذا العام',
  },
  yearsDreamContent: {
    en: 'To see unprecedented growth in our ministry, empower emerging leaders, and demonstrate God\'s supernatural power through signs, wonders, and transformative testimonies of faith and revival.',
    es: 'Ver un crecimiento sin precedentes en nuestro ministerio, empoderar líderes emergentes y demostrar el poder sobrenatural de Dios a través de señales, maravillas y testimonios transformadores de fe y avivamiento.',
    fr: 'Voir une croissance sans précédent dans notre ministère, autonomiser les jeunes leaders et démontrer la puissance surnaturelle de Dieu à travers les signes, les merveilles et les témoignages transformateurs de foi et de renouveau.',
    pt: 'Ver um crescimento sem precedentes em nosso ministério, capacitar líderes emergentes e demonstrar o poder sobrenatural de Deus através de sinais, maravilhas e testemunhos transformadores de fé e avivamento.',
    de: 'Beispielloses Wachstum in unserem Dienst sehen, aufstrebende Leiter stärken und Gottes übernatürliche Macht durch Zeichen, Wunder und transformative Zeugnisse des Glaubens und der Erweckung demonstrieren.',
    zh: '在我们的事工中看到前所未有的增长，赋权新兴领袖，通过神迹奇事和信心与复兴的转变见证彰显上帝的超自然能力。',
    ar: 'رؤية نمو لم يسبق له مثيل في وزارتنا، وتمكين القادة الناشئين، وإظهار القوة الخارقة لله من خلال الآيات والعجائب والشهادات التحويلية للإيمان والإحياء.',
  },
};

export default function Hero({ currentLang }: HeroProps) {
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

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-secondary/30 via-white to-secondary/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #002060 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Subtle World Map Overlay */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path
            d="M150 200 Q250 150 350 200 T550 200 Q650 150 750 200 T950 200"
            stroke="#002060"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="200" cy="200" r="3" fill="#FFD700" />
          <circle cx="400" cy="180" r="3" fill="#FFD700" />
          <circle cx="600" cy="220" r="3" fill="#FFD700" />
          <circle cx="800" cy="190" r="3" fill="#FFD700" />
        </svg>
      </div>

      {/* Vision & Dream Banner */}
      <div className="relative w-full z-20 pt-6 sm:pt-8 md:pt-10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* 2026 Theme Banner */}
            <div className="fade-element opacity-0 bg-gradient-to-r from-navy via-navy to-covenant p-3 sm:p-4 md:p-5 rounded-sm shadow-lg relative overflow-hidden mb-3 sm:mb-4">
              {/* Decorative Speedometer Elements */}
              <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 opacity-20 hidden sm:block">
                <svg viewBox="0 0 120 80" className="w-20 md:w-32 h-12 md:h-20">
                  <path
                    d="M 20 60 A 40 40 0 0 1 100 60"
                    stroke="#FFD700"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <line
                    x1="60"
                    y1="60"
                    x2="85"
                    y2="35"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="60" cy="60" r="4" fill="#FFD700" />
                  <line x1="95" y1="25" x2="110" y2="15" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                  <line x1="100" y1="40" x2="115" y2="35" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Theme Content */}
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                    <span className="text-gold text-xs font-bold tracking-wider">2026</span>
                  </div>
                  <span className="text-white/70 text-xs">•</span>
                  <span className="text-white text-xs uppercase tracking-wider font-semibold">
                    {currentLang === 'en' ? 'Prophetic Theme' : currentLang === 'es' ? 'Tema Profético' : 'Prophetic Theme'}
                  </span>
                </div>
                <p className="font-serif text-xs sm:text-sm md:text-base text-white leading-tight">
                  {content.theme2026[currentLang as keyof typeof content.theme2026] || content.theme2026.en}
                </p>
              </div>
            </div>

            {/* Vision & Dream Cards */}
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
              {/* Vision Card */}
              <div className="fade-element opacity-0 bg-white/95 backdrop-blur-sm border border-gold/30 p-4 sm:p-5 md:p-6 rounded-sm shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gold/20">
                      <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base font-serif text-navy font-bold mb-2">
                      {content.vision[currentLang as keyof typeof content.vision] || content.vision.en}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      {content.visionContent[currentLang as keyof typeof content.visionContent] || content.visionContent.en}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dream Card */}
              <div className="fade-element opacity-0 bg-white/95 backdrop-blur-sm border border-covenant/30 p-4 sm:p-5 md:p-6 rounded-sm shadow-lg hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-covenant/20">
                      <svg className="h-5 w-5 text-covenant" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM4.343 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM2 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.343 5.757a1 1 0 001.414-1.414L4.05 3.636a1 1 0 00-1.414 1.414l.707.707z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base font-serif text-navy font-bold mb-2">
                      {content.yearsDream[currentLang as keyof typeof content.yearsDream] || content.yearsDream.en}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      {content.yearsDreamContent[currentLang as keyof typeof content.yearsDreamContent] || content.yearsDreamContent.en}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-12rem)]">
            {/* Left Content */}
            <div className="space-y-5 sm:space-y-6 fade-element opacity-0">
              {/* Scripture Reference */}
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-px bg-gold" />
                <span className="text-xs uppercase tracking-[0.2em] text-covenant font-medium">
                  {content.scripture[currentLang as keyof typeof content.scripture] || content.scripture.en}
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
                {content.headline[currentLang as keyof typeof content.headline] || content.headline.en}
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-foreground/80 max-w-xl leading-relaxed">
                {content.subtext[currentLang as keyof typeof content.subtext] || content.subtext.en}
              </p>

              {/* Scripture Quote */}
              <div className="py-3 sm:py-4 border-y border-border/50">
                <p className="font-serif italic text-navy text-sm sm:text-base font-medium">
                  {content.scriptureText[currentLang as keyof typeof content.scriptureText] || content.scriptureText.en}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary group text-sm sm:text-base"
                >
                  {content.cta1[currentLang as keyof typeof content.cta1] || content.cta1.en}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollToSection('#media')}
                  className="btn-outline group text-sm sm:text-base"
                >
                  <Play className="mr-2 w-4 h-4" />
                  {content.cta2[currentLang as keyof typeof content.cta2] || content.cta2.en}
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative fade-element opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:ml-auto">
                {/* Menorah Overlay */}
                <div className="absolute -top-6 -right-6 w-24 h-24 opacity-20 pointer-events-none z-10 hidden sm:block">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="heroMenorahGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="100%" stopColor="#002060" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M50 5 L50 20 M25 20 L75 20 M20 20 L20 45 M30 20 L30 45 M50 20 L50 50 M70 20 L70 45 M80 20 L80 45 M15 45 L85 45"
                      stroke="url(#heroMenorahGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Portrait Frame */}
                <div className="relative w-full h-full rounded-sm overflow-hidden shadow-editorial">
                  <img
                    src="/leadership-portrait.jpg"
                    alt="Apostle Isaac - Senior Pastor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
                </div>

                {/* Gold accent line */}
                <div className="absolute -bottom-4 -left-4 w-16 sm:w-24 h-1 bg-gold" />
                <div className="absolute -bottom-4 -left-4 w-1 h-16 sm:h-24 bg-gold" />
              </div>

              {/* Name Badge */}
              <div className="mt-6 max-w-md mx-auto lg:ml-auto">
                <div className="inline-block px-4 py-2 bg-white border border-border/50 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-covenant mb-1">
                    {currentLang === 'en' ? 'Senior Pastor' : currentLang === 'es' ? 'Pastor Principal' : currentLang === 'fr' ? 'Pasteur Principal' : 'Senior Pastor'}
                  </p>
                  <p className="font-serif text-base sm:text-lg text-navy">Apostle Isaac</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
