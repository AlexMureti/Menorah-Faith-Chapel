import { useEffect, useRef } from 'react';
import { BookOpen, Users, Award, Flame } from 'lucide-react';

interface LeadershipProps {
  currentLang: string;
}

const content = {
  sectionLabel: {
    en: 'Leadership',
    es: 'Liderazgo',
    fr: 'Leadership',
    pt: 'Liderança',
    de: 'Führung',
    zh: '领导',
    ar: 'القيادة',
  },
  headline: {
    en: 'Called to Shepherd, Commissioned to Equip',
    es: 'Llamado a Pastorear, Comisionado para Equipar',
    fr: 'Appelé à Pâturer, Commissionné pour Équiper',
    pt: 'Chamado a Pastorear, Comissionado para Equipar',
    de: 'Berufen zu Hüten, Beauftragt zu Ausrüsten',
    zh: '蒙召牧养，受训装备',
    ar: 'مدعو للرعاية، مفوض للتجهيز',
  },
  bio: {
    en: 'Isaac is the Senior Pastor of Menorah Faith Chapel, called to teach the Word of God with clarity and conviction. His ministry focuses on spiritual formation, grounding believers in the truth of Scripture, and raising a people who know their God and carry out great exploits.',
    es: 'Isaac es el Pastor Principal de Menorah Faith Chapel, llamado a enseñar la Palabra de Dios con claridad y convicción. Su ministerio se enfoca en la formación espiritual, arraigando a los creyentes en la verdad de las Escrituras y levantando un pueblo que conoce a su Dios y realiza grandes hazañas.',
    fr: 'Isaac est le Pasteur Principal de Menorah Faith Chapel, appelé à enseigner la Parole de Dieu avec clarté et conviction. Son ministère se concentre sur la formation spirituelle, enracinant les croyants dans la vérité des Écritures et élevant un peuple qui connaît son Dieu et accomplit de grandes exploits.',
    pt: 'Isaac é o Pastor Principal da Menorah Faith Chapel, chamado a ensinar a Palavra de Deus com clareza e convicção. Seu ministério se concentra na formação espiritual, enraizando os crentes na verdade das Escrituras e levantando um povo que conhece seu Deus e realiza grandes feitos.',
    de: 'Isaac ist der Seniorpastor der Menorah Faith Chapel, berufen, das Wort Gottes mit Klarheit und Überzeugung zu lehren. Sein Dienst konzentriert sich auf die geistliche Formung, das Verankern der Gläubigen in der Wahrheit der Schrift und das Erziehen eines Volkes, das seinen Gott kennt und große Taten vollbringt.',
    zh: '以撒是Menorah Faith Chapel的主任牧师，蒙召以清晰和信念教导神的话语。他的事工专注于灵性塑造，使信徒扎根于圣经的真理，并兴起认识神、成就大事的子民。',
    ar: 'إسحاق هو القس الأكبر لكنيسة Menorah Faith Chapel، مدعو لتعليم كلمة الله بوضوح واقتناع. يركز خدمته على التكوين الروحي، وتجذير المؤمنين في حقيقة الكتاب المقدس، ورفع شعب يعرف إلهه ويحقق إنجازات عظيمة.',
  },
  scripture: {
    en: '"Not by might, nor by power, but by my Spirit, says the Lord of hosts."',
    es: '"No por ejército, ni por fuerza, sino por mi Espíritu, ha dicho Jehová de los ejércitos."',
    fr: '"Ce ne sera pas par une armée, ni par la force, mais par mon esprit, dit l\'Eternel des armées."',
    pt: '"Não por exército, nem por força, mas pelo meu Espírito, disse o Senhor dos Exércitos."',
    de: '"Nicht durch Heer, nicht durch Kraft, sondern durch meinen Geist, spricht der Herr der Heerscharen."',
    zh: '"万军之耶和华说：不是倚靠势力，不是倚靠才能，乃是倚靠我的灵。"',
    ar: '"ليس بجيش ولا بقوة بل بروحي يقول رب الجنود."',
  },
  scriptureRef: {
    en: 'Zechariah 4:6',
    es: 'Zacarías 4:6',
    fr: 'Zacharie 4:6',
    pt: 'Zacarias 4:6',
    de: 'Sacharja 4:6',
    zh: '撒迦利亚书 4:6',
    ar: 'زكريا 4:6',
  },
};

const highlights = [
  { icon: BookOpen, label: { en: 'Scripture Teacher', es: 'Maestro de Escrituras', fr: 'Enseignant des Écritures', pt: 'Professor de Escrituras', de: 'Schriftlehrer', zh: '圣经教师', ar: 'معلم الكتاب المقدس' } },
  { icon: Users, label: { en: 'Spiritual Father', es: 'Padre Espiritual', fr: 'Père Spirituel', pt: 'Pai Espiritual', de: 'Geistlicher Vater', zh: '属灵父亲', ar: 'الأب الروحي' } },
  { icon: Flame, label: { en: 'Prophetic Voice', es: 'Voz Profética', fr: 'Voix Prophétique', pt: 'Voz Profética', de: 'Prophetische Stimme', zh: '先知声音', ar: 'الصوت النبوي' } },
  { icon: Award, label: { en: 'Apostolic Leader', es: 'Líder Apostólico', fr: 'Leader Apostolique', pt: 'Líder Apostólico', de: 'Apostolischer Führer', zh: '使徒领袖', ar: 'القائد الرسولي' } },
];

export default function Leadership({ currentLang }: LeadershipProps) {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-br from-secondary/20 to-secondary/5">
      <div className="editorial-container">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12 fade-element opacity-0">
          <span className="w-12 h-px bg-gold" />
          <span className="section-label">
            {content.sectionLabel[currentLang as keyof typeof content.sectionLabel] || content.sectionLabel.en}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Portrait */}
          <div className="fade-element opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="relative max-w-md">
              {/* Portrait */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-editorial">
                <img
                  src="/leadership-portrait.jpg"
                  alt="Apostle Isaac"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              </div>

              {/* Name Plate */}
              <div className="absolute -bottom-6 left-6 bg-white px-6 py-4 shadow-editorial border-l-4 border-gold">
                <p className="font-serif text-2xl text-navy">Apostle Isaac</p>
                <p className="text-sm text-foreground/60 mt-1">
                  {currentLang === 'en' ? 'Senior Pastor & Prophet' : currentLang === 'es' ? 'Pastor Principal y Profeta' : currentLang === 'fr' ? 'Pasteur Principal et Prophète' : 'Senior Pastor & Prophet'}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-gold/50" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-gold/50" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 lg:pt-8 fade-element opacity-0" style={{ animationDelay: '0.2s' }}>
            <h2 className="editorial-heading">
              {content.headline[currentLang as keyof typeof content.headline] || content.headline.en}
            </h2>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              {content.bio[currentLang as keyof typeof content.bio] || content.bio.en}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white border border-border/50 rounded-sm">
                    <div className="w-10 h-10 flex items-center justify-center bg-navy/5 rounded-sm">
                      <Icon className="w-5 h-5 text-navy" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">
                      {item.label[currentLang as keyof typeof item.label] || item.label.en}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Scripture Quote */}
            <div className="py-6 border-y border-border/50">
              <p className="font-serif italic text-navy/80 text-lg md:text-xl leading-relaxed">
                {content.scripture[currentLang as keyof typeof content.scripture] || content.scripture.en}
              </p>
              <p className="mt-3 text-sm text-covenant font-medium">
                — {content.scriptureRef[currentLang as keyof typeof content.scriptureRef] || content.scriptureRef.en}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
