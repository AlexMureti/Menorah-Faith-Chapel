import { useEffect, useRef, useState } from 'react';
import { Play, ArrowRight, Headphones, Video, BookOpen } from 'lucide-react';

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
    en: 'Latest Message',
    es: 'Último Mensaje',
    fr: 'Dernier Message',
    pt: 'Última Mensagem',
    de: 'Neueste Botschaft',
    zh: '最新信息',
    ar: 'أحدث رسالة',
  },
  watchMore: {
    en: 'Watch More Teachings',
    es: 'Ver Más Enseñanzas',
    fr: 'Regarder Plus d\'Enseignements',
    pt: 'Assistir Mais Ensinamentos',
    de: 'Mehr Lehren Ansehen',
    zh: '观看更多教导',
    ar: 'مشاهدة المزيد من التعاليم',
  },
  recentSermons: {
    en: 'Recent Sermons',
    es: 'Sermones Recientes',
    fr: 'Sermons Récents',
    pt: 'Sermões Recentes',
    de: 'Kürzliche Predigten',
    zh: '近期讲道',
    ar: 'العظات الأخيرة',
  },
  categories: {
    en: 'Browse by Category',
    es: 'Navegar por Categoría',
    fr: 'Parcourir par Catégorie',
    pt: 'Navegar por Categoria',
    de: 'Nach Kategorie Durchsuchen',
    zh: '按类别浏览',
    ar: 'تصفح حسب الفئة',
  },
};

interface SermonTitle {
  en: string;
  es: string;
  fr: string;
  pt: string;
  de: string;
  zh: string;
  ar: string;
}

interface Sermon {
  title: SermonTitle;
  date: string;
  duration: string;
  series: string;
}

const recentSermons: Sermon[] = [
  {
    title: {
      en: 'The People Who Know Their God',
      es: 'El Pueblo que Conoce a su Dios',
      fr: 'Le Peuple qui Connaît son Dieu',
      pt: 'O Povo que Conhece seu Deus',
      de: 'Das Volk, das seinen Gott Kennt',
      zh: '认识神的子民',
      ar: 'الشعب الذي يعرف إلهه',
    },
    date: 'January 12, 2026',
    duration: '45 min',
    series: 'Daniel 11:32b',
  },
  {
    title: {
      en: 'Not by Might, but by Spirit',
      es: 'No por Fuerza, sino por el Espíritu',
      fr: 'Non par la Force, mais par l\'Esprit',
      pt: 'Não por Força, mas pelo Espírito',
      de: 'Nicht durch Kraft, sondern durch den Geist',
      zh: '不是倚靠势力，乃是倚靠灵',
      ar: 'ليس بقوة بل بالروح',
    },
    date: 'January 5, 2026',
    duration: '52 min',
    series: 'Zechariah 4:6',
  },
  {
    title: {
      en: 'A Light Unto the Nations',
      es: 'Una Luz para las Naciones',
      fr: 'Une Lumière pour les Nations',
      pt: 'Uma Luz para as Nações',
      de: 'Ein Licht für die Nationen',
      zh: '万民之光',
      ar: 'نور للأمم',
    },
    date: 'December 29, 2025',
    duration: '48 min',
    series: 'Isaiah 49:6',
  },
];

const categories = [
  { icon: Video, name: { en: 'Sermons', es: 'Sermones', fr: 'Sermons', pt: 'Sermões', de: 'Predigten', zh: '讲道', ar: 'العظات' }, count: 240 },
  { icon: Headphones, name: { en: 'Podcasts', es: 'Podcasts', fr: 'Podcasts', pt: 'Podcasts', de: 'Podcasts', zh: '播客', ar: 'البودكاست' }, count: 180 },
  { icon: BookOpen, name: { en: 'Bible Studies', es: 'Estudios Bíblicos', fr: 'Études Bibliques', pt: 'Estudos Bíblicos', de: 'Bibelstudien', zh: '查经', ar: 'دراسات الكتاب' }, count: 95 },
];

export default function Media({ currentLang }: MediaProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedSermon, setSelectedSermon] = useState(0);

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
    <section id="media" ref={sectionRef} className="py-20 md:py-28 bg-navy text-white">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 fade-element opacity-0">
          <span className="w-12 h-px bg-gold" />
          <span className="section-label text-gold">
            {content.sectionLabel[currentLang as keyof typeof content.sectionLabel] || content.sectionLabel.en}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Featured Video */}
          <div className="fade-element opacity-0" style={{ animationDelay: '0.1s' }}>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">
              {content.headline[currentLang as keyof typeof content.headline] || content.headline.en}
            </h2>

            {/* Video Player Placeholder */}
            <div className="relative aspect-video bg-navy-light rounded-sm overflow-hidden group cursor-pointer">
              {/* Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-serif text-lg text-white">
                  {recentSermons[selectedSermon].title[currentLang as keyof SermonTitle] || recentSermons[selectedSermon].title.en}
                </p>
                <div className="flex items-center gap-3 mt-2 text-sm text-white/70">
                  <span>{recentSermons[selectedSermon].date}</span>
                  <span>•</span>
                  <span>{recentSermons[selectedSermon].duration}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-6 inline-flex items-center text-gold hover:text-gold-light transition-colors group">
              {content.watchMore[currentLang as keyof typeof content.watchMore] || content.watchMore.en}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right - Recent Sermons & Categories */}
          <div className="space-y-10 fade-element opacity-0" style={{ animationDelay: '0.2s' }}>
            {/* Recent Sermons */}
            <div>
              <h3 className="font-serif text-xl text-white mb-6">
                {content.recentSermons[currentLang as keyof typeof content.recentSermons] || content.recentSermons.en}
              </h3>
              <div className="space-y-4">
                {recentSermons.map((sermon, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSermon(index)}
                    className={`w-full text-left p-4 rounded-sm border transition-colors ${
                      selectedSermon === index
                        ? 'bg-white/10 border-gold/50'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-white">
                          {sermon.title[currentLang as keyof typeof sermon.title] || sermon.title.en}
                        </p>
                        <p className="text-sm text-white/60 mt-1">{sermon.series}</p>
                      </div>
                      <span className="text-xs text-white/40 flex-shrink-0">{sermon.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-serif text-xl text-white mb-6">
                {content.categories[currentLang as keyof typeof content.categories] || content.categories.en}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={index}
                      className="p-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors text-center"
                    >
                      <Icon className="w-6 h-6 text-gold mx-auto mb-2" />
                      <p className="text-xs text-white font-medium">
                        {category.name[currentLang as keyof typeof category.name] || category.name.en}
                      </p>
                      <p className="text-xs text-white/50 mt-1">{category.count}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
