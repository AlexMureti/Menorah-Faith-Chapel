import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react';

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

const slideShowMedia = [
  { type: 'image', src: '/slideshow/photo-1.jpeg', alt: 'Slide 1' },
  { type: 'video', src: '/slideshow/menorahs.mp4', alt: 'Menorahs' },
  { type: 'image', src: '/slideshow/photo-2.jpeg', alt: 'Slide 2' },
  { type: 'video', src: '/slideshow/theme-video.mp4', alt: 'Theme' },
];

export default function Hero({ currentLang }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // Set playback speed for menorahs video
  useEffect(() => {
    const video = videoRefs.current[1]; // menorahs.mp4 is at index 1
    if (video) {
      video.playbackRate = 0.5; // Half speed
    }
  }, []);

  // Auto-advance slideshow every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideShowMedia.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index % slideShowMedia.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideShowMedia.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideShowMedia.length) % slideShowMedia.length);
  };

  return (
    <section ref={sectionRef} className="relative">
      {/* Main Hero with Slideshow Background */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0 bg-navy">
          {/* Slideshow Media */}
          <div className="relative w-full h-full">
            {slideShowMedia.map((media, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                {media.type === 'image' ? (
                  <img
                    src={media.src}
                    alt={media.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  >
                    <source src={media.src} type="video/mp4" />
                  </video>
                )}
              </div>
            ))}
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/50 to-navy/70" />
        </div>

        {/* Slideshow Controls */}
        <div className="absolute inset-x-0 bottom-6 sm:bottom-8 z-20 flex items-center justify-center gap-3">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm border border-white/30 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {slideShowMedia.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${index === currentSlide
                  ? 'bg-gold w-8 h-2'
                  : 'bg-white/40 w-2 h-2 hover:bg-white/60'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm border border-white/30 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto">
              {/* Scripture Reference */}
              <div className="fade-element opacity-0 inline-flex items-center gap-3 mb-4 sm:mb-6">
                <span className="w-8 sm:w-12 h-px bg-gold" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gold font-semibold">
                  {content.scripture[currentLang as keyof typeof content.scripture] || content.scripture.en}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="fade-element opacity-0 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-4 sm:mb-6" style={{ animationDelay: '0.1s' }}>
                {content.headline[currentLang as keyof typeof content.headline] || content.headline.en}
              </h1>

              {/* Subtext */}
              <p className="fade-element opacity-0 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-6 sm:mb-8 leading-relaxed" style={{ animationDelay: '0.2s' }}>
                {content.subtext[currentLang as keyof typeof content.subtext] || content.subtext.en}
              </p>

              {/* Scripture Quote Banner */}
              <div className="fade-element opacity-0 border-l-4 border-gold bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8 inline-block" style={{ animationDelay: '0.3s' }}>
                <p className="font-serif italic text-white text-base sm:text-lg leading-relaxed">
                  {content.scriptureText[currentLang as keyof typeof content.scriptureText] || content.scriptureText.en}
                </p>
              </div>

              {/* CTAs */}
              <div className="fade-element opacity-0 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gold hover:bg-gold/90 text-navy font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-sm transition-all inline-flex items-center justify-center sm:justify-start gap-2 group w-full sm:w-auto"
                >
                  {content.cta1[currentLang as keyof typeof content.cta1] || content.cta1.en}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-sm transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm border border-white/30 w-full sm:w-auto"
                >
                  <Play className="w-4 h-4" />
                  {content.cta2[currentLang as keyof typeof content.cta2] || content.cta2.en}
                </button>
              </div>

              {/* 2026 Theme Badge */}
              <div className="fade-element opacity-0 mt-8 sm:mt-12 inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm px-4 sm:px-5 py-2 sm:py-3" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <Zap className="w-4 h-4 text-gold" />
                  <span className="text-gold text-xs font-bold tracking-wider uppercase">2026</span>
                </div>
                <p className="text-white/90 text-xs sm:text-sm leading-tight">
                  {content.theme2026[currentLang as keyof typeof content.theme2026] || content.theme2026.en}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs uppercase tracking-wider font-semibold">Scroll</span>
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Vision & Dream Section */}
      <div className="relative w-full bg-gradient-to-br from-white via-secondary/5 to-white py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Vision Card */}
              <div className="fade-element opacity-0 bg-white border border-gold/30 p-6 md:p-8 rounded-sm shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold/20">
                      <svg className="h-6 w-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-navy font-bold">
                      {content.vision[currentLang as keyof typeof content.vision] || content.vision.en}
                    </h3>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {content.visionContent[currentLang as keyof typeof content.visionContent] || content.visionContent.en}
                </p>
              </div>

              {/* Dream Card */}
              <div className="fade-element opacity-0 bg-white border border-covenant/30 p-6 md:p-8 rounded-sm shadow-lg hover:shadow-xl transition-all" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-covenant/20">
                      <svg className="h-6 w-6 text-covenant" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM4.343 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM2 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.343 5.757a1 1 0 001.414-1.414L4.05 3.636a1 1 0 00-1.414 1.414l.707.707z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-navy font-bold">
                      {content.yearsDream[currentLang as keyof typeof content.yearsDream] || content.yearsDream.en}
                    </h3>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {content.yearsDreamContent[currentLang as keyof typeof content.yearsDreamContent] || content.yearsDreamContent.en}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-10 right-0 text-white hover:text-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video rounded-sm overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Latest Message"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
