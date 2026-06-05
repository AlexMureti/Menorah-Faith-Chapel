import { useEffect, useRef, useState } from 'react';
import { Play, ArrowRight, X, Facebook } from 'lucide-react';
import { site } from '../data/site';

interface MediaProps {
  currentLang: string;
}

const content = {
  sectionLabel: {
    en: 'Media & Teachings',
    es: 'Medios y Enseñanzas',
    fr: 'Médias et Enseignements',
    pt: 'Mídia e Ensinamentos',
    de: 'Medien und Lehren',
    zh: '媒体与教导',
    ar: 'الوسائط والتعاليم',
  },
  headline: {
    en: 'Watch & Be Blessed',
    es: 'Mira y Sé Bendecido',
    fr: 'Regardez et Soyez Béni',
    pt: 'Assista e Seja Abençoado',
    de: 'Schauen und Gesegnet Werden',
    zh: '观看并蒙福',
    ar: 'شاهد وكن مباركًا',
  },
  intro: {
    en: 'Moments of worship, teaching and prophetic ministry from Menorah Faith Chapel. Tap any clip to watch.',
    es: 'Momentos de adoración, enseñanza y ministerio profético de Menorah Faith Chapel. Toca cualquier clip para ver.',
    fr: 'Des moments de louange, d\'enseignement et de ministère prophétique de Menorah Faith Chapel. Touchez un clip pour regarder.',
    pt: 'Momentos de adoração, ensino e ministério profético da Menorah Faith Chapel. Toque em qualquer clipe para assistir.',
    de: 'Momente der Anbetung, Lehre und des prophetischen Dienstes der Menorah Faith Chapel. Tippen Sie auf einen Clip.',
    zh: '来自Menorah Faith Chapel的敬拜、教导与先知性事工片段。点击任意片段观看。',
    ar: 'لحظات من العبادة والتعليم والخدمة النبوية من كنيسة Menorah Faith Chapel. اضغط على أي مقطع للمشاهدة.',
  },
  watchMore: {
    en: 'Watch More on Facebook',
    es: 'Ver Más en Facebook',
    fr: 'Voir Plus sur Facebook',
    pt: 'Ver Mais no Facebook',
    de: 'Mehr auf Facebook Ansehen',
    zh: '在 Facebook 上观看更多',
    ar: 'شاهد المزيد على فيسبوك',
  },
};

const reels = [
  '/media/reels/reel-1.mp4',
  '/media/reels/reel-2.mp4',
  '/media/reels/reel-3.mp4',
  '/media/reels/reel-4.mp4',
  '/media/reels/reel-5.mp4',
  '/media/reels/reel-6.mp4',
];

export default function Media({ currentLang }: MediaProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeReel, setActiveReel] = useState<number | null>(null);

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

  // Close the lightbox on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveReel(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="media" ref={sectionRef} className="relative py-20 md:py-28 bg-navy text-white grain overflow-hidden">
      <div className="editorial-container relative z-[2]">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 fade-element opacity-0">
          <span className="w-12 h-px bg-gold" />
          <span className="section-label text-gold">
            {content.sectionLabel[currentLang as keyof typeof content.sectionLabel] || content.sectionLabel.en}
          </span>
        </div>

        <div className="max-w-3xl mb-10 md:mb-14 fade-element opacity-0" style={{ animationDelay: '0.1s' }}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            {content.headline[currentLang as keyof typeof content.headline] || content.headline.en}
          </h2>
          <p className="text-white/70 leading-relaxed">
            {content.intro[currentLang as keyof typeof content.intro] || content.intro.en}
          </p>
        </div>

        {/* Reel wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {reels.map((src, index) => (
            <button
              key={src}
              onClick={() => setActiveReel(index)}
              className="fade-element opacity-0 group relative aspect-[9/16] rounded-sm overflow-hidden bg-navy-light ring-1 ring-white/10 hover:ring-gold/60 transition-all"
              style={{ animationDelay: `${0.15 + index * 0.06}s` }}
              aria-label="Play clip"
            >
              <video
                src={src}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-cover grayscale contrast-[1.08] brightness-[0.92] group-hover:brightness-100 transition-all duration-500"
              />
              {/* gold cast + readability */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-gold/10 to-transparent mix-blend-soft-light pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              {/* play affordance */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <Play className="w-5 h-5 text-white ml-0.5" />
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 fade-element opacity-0">
          <a
            href={site.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-gold text-navy font-semibold hover:bg-gold-dark transition-colors group"
          >
            <Facebook className="w-4 h-4" />
            {content.watchMore[currentLang as keyof typeof content.watchMore] || content.watchMore.en}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {activeReel !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveReel(null)}
        >
          <button
            onClick={() => setActiveReel(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-gold transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <video
              src={reels[activeReel]}
              controls
              autoPlay
              playsInline
              className="max-h-[85vh] w-auto max-w-[92vw] rounded-sm shadow-2xl bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
