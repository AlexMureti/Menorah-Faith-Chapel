import { useEffect, useRef } from 'react';
import { BookOpen, Flame, Globe, Users, Radio, GraduationCap } from 'lucide-react';

interface MinistryPillarsProps {
  currentLang: string;
}

const pillars = [
  {
    icon: BookOpen,
    title: {
      en: 'Word & Teaching',
      es: 'Palabra y Enseñanza',
      fr: 'Parole et Enseignement',
      pt: 'Palavra e Ensino',
      de: 'Wort und Lehre',
      zh: '圣言与教导',
      ar: 'الكلمة والتعليم',
    },
    description: {
      en: 'Systematic exposition of Scripture, grounding believers in the whole counsel of God through verse-by-verse teaching that builds faith and understanding.',
      es: 'Exposición sistemática de las Escrituras, arraigando a los creyentes en todo el consejo de Dios mediante la enseñanza versículo por versículo que edifica la fe y el entendimiento.',
      fr: 'Exposition systématique des Écritures, enracinant les croyants dans tout le conseil de Dieu à travers un enseignement verset par verset qui construit la foi et la compréhension.',
      pt: 'Exposição sistemática das Escrituras, enraizando os crentes em todo o conselho de Deus através do ensino versículo por versículo que constrói a fé e o entendimento.',
      de: 'Systematische Auslegung der Schrift, die Gläubige in dem ganzen Ratschlag Gottes verankert durch Vers-für-Vers-Unterricht, der Glauben und Verständnis aufbaut.',
      zh: '系统地讲解圣经，通过逐节教导将信徒根植于神全备的旨意中，建立信心和理解。',
      ar: 'شرح منهجي للكتاب المقدس، يجذر المؤمنين في مشورة الله الكاملة من خلال التعليم الآية فالآية الذي يبني الإيمان والفهم.',
    },
  },
  {
    icon: Flame,
    title: {
      en: 'Prayer & Intercession',
      es: 'Oración e Intercesión',
      fr: 'Prière et Intercession',
      pt: 'Oração e Intercessão',
      de: 'Gebet und Fürbitten',
      zh: '祷告与代求',
      ar: 'الصلاة والشفاعة',
    },
    description: {
      en: 'A house of prayer for all nations. Strategic intercession, prophetic prayer watches, and corporate fasting that moves heaven and shapes history.',
      es: 'Una casa de oración para todas las naciones. Intercesión estratégica, vigilias de oración profética, y ayuno corporal que mueve los cielos y da forma a la historia.',
      fr: 'Une maison de prière pour toutes les nations. Intercession stratégique, veillées de prière prophétiques, et jeûne corporatif qui émeut les cieux et façonne l\'histoire.',
      pt: 'Uma casa de oração para todas as nações. Intercessão estratégica, vigílias de oração profética, e jejum corporal que move os céus e molda a história.',
      de: 'Ein Haus des Gebets für alle Nationen. Strategische Fürbitten, prophetische Gebetswachen, und gemeinsames Fasten, das den Himmel bewegt und die Geschichte gestaltet.',
      zh: '万民祷告的殿。策略性的代祷、先知的守望祷告、集体的禁食，震动天庭，塑造历史。',
      ar: 'بيت صلاة لجميع الأمم. شفاعة استراتيجية، أحراسة صلاة نبوية، وصيام جماعي يحرك السماء ويشكل التاريخ.',
    },
  },
  {
    icon: Radio,
    title: {
      en: 'Worship Ministry',
      es: 'Ministerio de Adoración',
      fr: 'Ministère d\'Adoration',
      pt: 'Ministério de Adoração',
      de: 'Anbetungsministerium',
      zh: '敬拜事工',
      ar: 'وزارة العبادة',
    },
    description: {
      en: 'Spirit-filled worship that exalts Christ, creates atmosphere for encounter, and leads God\'s people into His presence with reverence and joy.',
      es: 'Adoración llena del Espíritu que exalta a Cristo, crea atmósfera para el encuentro, y conduce al pueblo de Dios a Su presencia con reverencia y gozo.',
      fr: 'Adoration pleine de l\'Esprit qui exalte Christ, crée une atmosphère de rencontre, et conduit le peuple de Dieu dans Sa présence avec révérence et joie.',
      pt: 'Adoração cheia do Espírito que exalta Cristo, cria atmosfera para o encontro, e conduz o povo de Deus à Sua presença com reverência e alegria.',
      de: 'Geisterfüllte Anbetung, die Christus erhöht, eine Atmosphäre für Begegnung schafft, und Gottes Volk in Seine Gegenwart mit Ehrfurcht und Freude führt.',
      zh: '圣灵充满的敬拜，高举基督，创造相遇的氛围，带领神的百姓以敬畏和喜乐进入祂的同在。',
      ar: 'عبادة مملوءة بالروح ترفع المسيح، وتخلق جوًا للقاء، وتقود شعب الله إلى حضوره بخشوع وفرح.',
    },
  },
  {
    icon: GraduationCap,
    title: {
      en: 'Discipleship & Leadership',
      es: 'Discipulado y Liderazgo',
      fr: 'Discipleship et Leadership',
      pt: 'Discipulado e Liderança',
      de: 'Jüngerschaft und Führung',
      zh: '门训与领导',
      ar: 'التلمذة والقيادة',
    },
    description: {
      en: 'Intentional formation pathways that develop mature disciples, raise servant leaders, and release ministries according to biblical patterns.',
      es: 'Caminos de formación intencional que desarrollan discípulos maduros, levantan líderes siervos, y liberan ministerios según patrones bíblicos.',
      fr: 'Voies de formation intentionnelles qui développent des disciples mûrs, élèvent des leaders serviteurs, et libèrent des ministères selon des patterns bibliques.',
      pt: 'Caminhos de formação intencional que desenvolvem discípulos maduros, levantam líderes servos, e liberam ministérios segundo padrões bíblicos.',
      de: 'Absichtliche Formungswege, die reife Jünger entwickeln, dienende Führer erheben, und Dienste nach biblischen Mustern freisetzen.',
      zh: '有意识的塑造路径，培养成熟的门徒，兴起仆人领袖，按照圣经模式释放事工。',
      ar: 'مسارات تكوينية مقصودة تطور تلاميذًا ناضجين، وتقيم قادة خدام، وتطلق خدمات وفقًا للأنماط الكتابية.',
    },
  },
  {
    icon: Globe,
    title: {
      en: 'Missions & Global Outreach',
      es: 'Misiones y Alcance Global',
      fr: 'Missions et Portée Mondiale',
      pt: 'Missões e Alcance Global',
      de: 'Missionen und Weltweiter Einsatz',
      zh: '宣教与全球外展',
      ar: 'الرسالات والامتداد العالمي',
    },
    description: {
      en: 'Strategic partnerships across continents, church planting initiatives, and humanitarian outreach that extends the kingdom to the ends of the earth.',
      es: 'Alianzas estratégicas a través de continentes, iniciativas de plantación de iglesias, y alcance humanitario que extiende el reino hasta los confines de la tierra.',
      fr: 'Partenariats stratégiques à travers les continents, initiatives de plantation d\'églises, et outreach humanitaire qui étend le royaume jusqu\'aux extrémités de la terre.',
      pt: 'Parcerias estratégicas através de continentes, iniciativas de plantação de igrejas, e alcance humanitário que estende o reino até os confins da terra.',
      de: 'Strategische Partnerschaften über Kontinente, Kirchengründungsinitiativen, und humanitäre Outreach, die das Reich bis an die Enden der Erde ausdehnen.',
      zh: '跨洲策略伙伴关系，植堂计划，人道外展，将国度延伸到地极。',
      ar: 'شراكات استراتيجية عبر القارات، ومبادرات زرع الكنائس، والامتداد الإنساني الذي يمد المملكة إلى أقاصي الأرض.',
    },
  },
  {
    icon: Users,
    title: {
      en: 'Media & Gospel Broadcasting',
      es: 'Medios y Difusión del Evangelio',
      fr: 'Médias et Diffusion de l\'Évangile',
      pt: 'Mídia e Difusão do Evangelho',
      de: 'Medien und Evangeliumsverbreitung',
      zh: '媒体与福音广播',
      ar: 'الوسائط وإذاعة الإنجيل',
    },
    description: {
      en: 'Digital evangelism, teaching archives, and broadcast ministry reaching millions worldwide with the uncompromised gospel of Christ.',
      es: 'Evangelismo digital, archivos de enseñanza, y ministerio de transmisión alcanzando a millones en todo el mundo con el evangelio inequívoco de Cristo.',
      fr: 'Évangélisme numérique, archives d\'enseignement, et ministère de diffusion atteignant des millions dans le monde entier avec l\'évangile non compromis de Christ.',
      pt: 'Evangelismo digital, arquivos de ensino, e ministério de transmissão alcançando milhões em todo o mundo com o evangelho sem compromisso de Cristo.',
      de: 'Digitale Evangelisation, Lehrarchive, und Sendungsministerium, die Millionen weltweit mit dem unbeugsamen Evangelium Christi erreichen.',
      zh: '数字福音、教导档案、广播事工，向全球数百万人传扬基督不妥协的福音。',
      ar: 'التبشير الرقمي، وأرشيف التعليم، ووزارة البث التي تصل إلى الملايين حول العالم بإنجيل المسيح غير المساوم.',
    },
  },
];

export default function MinistryPillars({ currentLang }: MinistryPillarsProps) {
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-navy text-white overflow-hidden">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="text-center mb-16 fade-element opacity-0">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="section-label text-gold">
              {currentLang === 'en' ? 'Ministry Focus' : currentLang === 'es' ? 'Enfoque Ministerial' : currentLang === 'fr' ? 'Focus Ministériel' : 'Ministry Focus'}
            </span>
            <span className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white max-w-3xl mx-auto">
            {currentLang === 'en' 
              ? 'The Ministry Pillars'
              : currentLang === 'es'
              ? 'Los Pilares del Ministerio'
              : currentLang === 'fr'
              ? 'Les Piliers du Ministère'
              : 'The Ministry Pillars'
            }
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="fade-element opacity-0 group"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="p-6 md:p-8 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 h-full rounded-sm">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-gold/10 rounded-sm mb-5 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                    <Icon className="w-7 h-7 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-3">
                    {pillar.title[currentLang as keyof typeof pillar.title] || pillar.title.en}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    {pillar.description[currentLang as keyof typeof pillar.description] || pillar.description.en}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
