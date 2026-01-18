import { useEffect, useRef } from 'react';
import { Users, UserCircle, Heart, GraduationCap, Radio, Globe } from 'lucide-react';

interface MinistriesProps {
  currentLang: string;
}

const ministries = [
  {
    icon: UserCircle,
    title: {
      en: "Men's Ministry",
      es: 'Ministerio de Hombres',
      fr: 'Ministère des Hommes',
      pt: 'Ministério de Homens',
      de: 'Männerministerium',
      zh: '弟兄事工',
      ar: 'وزارة الرجال',
    },
    description: {
      en: 'Equipping men to be spiritual leaders in their homes, workplaces, and communities through discipleship, accountability, and brotherhood.',
      es: 'Equipando a los hombres para ser líderes espirituales en sus hogares, lugares de trabajo y comunidades a través del discipulado, la responsabilidad y la hermandad.',
      fr: 'Équipant les hommes pour être des leaders spirituels dans leurs foyers, lieux de travail et communautés à travers le discipleship, la responsabilité et la fraternité.',
      pt: 'Equipando os homens para serem líderes espirituais em seus lares, locais de trabalho e comunidades através do discipulado, responsabilidade e fraternidade.',
      de: 'Ausstatten von Männern, um in ihren Häusern, Arbeitsplätzen und Gemeinschaften als geistliche Führer zu dienen durch Jüngerschaft, Verantwortlichkeit und Brüderschaft.',
      zh: '通过门训、问责和兄弟情谊，装备弟兄成为家庭、职场和社区中的属灵领袖。',
      ar: 'تجهيز الرجال ليكونوا قادة روحيين في بيوتهم وأماكن عملهم ومجتمعاتهم من خلال التلمذة والمساءلة والأخوة.',
    },
  },
  {
    icon: Heart,
    title: {
      en: "Women's Ministry",
      es: 'Ministerio de Mujeres',
      fr: 'Ministère des Femmes',
      pt: 'Ministério de Mulheres',
      de: 'Frauenministerium',
      zh: '姊妹事工',
      ar: 'وزارة النساء',
    },
    description: {
      en: 'Nurturing women in faith, fostering authentic relationships, and releasing them into their God-given calling through teaching, prayer, and service.',
      es: 'Nutriendo a las mujeres en la fe, fomentando relaciones auténticas, y liberándolas a su llamado dado por Dios a través de la enseñanza, la oración y el servicio.',
      fr: 'Nourrir les femmes dans la foi, favoriser des relations authentiques, et les libérer dans leur appel donné par Dieu à travers l\'enseignement, la prière et le service.',
      pt: 'Nutrindo as mulheres na fé, fomentando relacionamentos autênticos, e libertando-as para seu chamado dado por Deus através do ensino, oração e serviço.',
      de: 'Frauen im Glauben nähren, authentische Beziehungen fördern, und sie in ihren von Gott gegebenen Ruf freisetzen durch Lehre, Gebet und Dienst.',
      zh: '在信仰中培育姊妹，建立真诚关系，通过教导、祷告和服事，释放她们进入神所赐的呼召。',
      ar: 'تغذية النساء في الإيمان، وتعزيز العلاقات الأصيلة، وتحريرهن في دعوتهن المُنح من الله من خلال التعليم والصلاة والخدمة.',
    },
  },
  {
    icon: GraduationCap,
    title: {
      en: 'Youth & Next Generation',
      es: 'Juventud y Próxima Generación',
      fr: 'Jeunesse et Prochaine Génération',
      pt: 'Juventude e Próxima Geração',
      de: 'Jugend und Nächste Generation',
      zh: '青年与下一代',
      ar: 'الشباب والجيل القادم',
    },
    description: {
      en: 'Raising a generation of young believers who are grounded in Scripture, passionate for Christ, and equipped to impact their schools and communities.',
      es: 'Levantando una generación de jóvenes creyentes arraigados en las Escrituras, apasionados por Cristo, y equipados para impactar sus escuelas y comunidades.',
      fr: 'Élevant une génération de jeunes croyants enracinés dans les Écritures, passionnés pour Christ, et équipés pour impacter leurs écoles et communautés.',
      pt: 'Levantando uma geração de jovens crentes enraizados nas Escrituras, apaixonados por Cristo, e equipados para impactar suas escolas e comunidades.',
      de: 'Eine Generation junger Gläubiger erziehen, die in der Schrift verwurzelt, leidenschaftlich für Christus, und ausgestattet sind, um ihre Schulen und Gemeinschaften zu beeinflussen.',
      zh: '兴起一代扎根圣经、热爱基督、装备齐全以影响学校和社区的年轻信徒。',
      ar: 'تربية جيل من المؤمنين الشباب المجذرين في الكتاب المقدس، المتمتعين بالشغف للمسيح، والمجهزين للتأثير في مدارسهم ومجتمعاتهم.',
    },
  },
  {
    icon: Radio,
    title: {
      en: 'Media & Communications',
      es: 'Medios y Comunicaciones',
      fr: 'Médias et Communications',
      pt: 'Mídia e Comunicações',
      de: 'Medien und Kommunikation',
      zh: '媒体与传播',
      ar: 'الوسائط والاتصالات',
    },
    description: {
      en: 'Using technology, creative arts, and communication platforms to amplify the gospel message and serve the ministry\'s digital outreach.',
      es: 'Usando tecnología, artes creativas, y plataformas de comunicación para amplificar el mensaje del evangelio y servir el alcance digital del ministerio.',
      fr: 'Utiliser la technologie, les arts créatifs, et les plateformes de communication pour amplifier le message de l\'évangile et servir l\'outreach numérique du ministère.',
      pt: 'Usando tecnologia, artes criativas, e plataformas de comunicação para amplificar a mensagem do evangelho e servir o alcance digital do ministério.',
      de: 'Technologie, kreative Künste, und Kommunikationsplattformen nutzen, um die Evangeliumsbotschaft zu verstärken und die digitale Outreach des Ministeriums zu dienen.',
      zh: '运用科技、创意艺术和传播平台，放大福音信息，服事事工的数字外展。',
      ar: 'استخدام التكنولوجيا والفنون الإبداعية ومنصات الاتصال لتضخيم رسالة الإنجيل وخدمة امتداد الوزارة الرقمي.',
    },
  },
  {
    icon: Globe,
    title: {
      en: 'Missions & Outreach',
      es: 'Misiones y Alcance',
      fr: 'Missions et Portée',
      pt: 'Missões e Alcance',
      de: 'Missionen und Outreach',
      zh: '宣教与外展',
      ar: 'الرسالات والامتداد',
    },
    description: {
      en: 'Local and global outreach initiatives, humanitarian aid, and church planting partnerships that extend the kingdom to unreached communities.',
      es: 'Iniciativas de alcance local y global, ayuda humanitaria, y asociaciones de plantación de iglesias que extienden el reino a comunidades no alcanzadas.',
      fr: 'Initiatives d\'outreach locales et mondiales, aide humanitaire, et partenariats de plantation d\'églises qui étendent le royaume aux communautés non atteintes.',
      pt: 'Iniciativas de alcance local e global, ajuda humanitária, e parcerias de plantação de igrejas que estendem o reino a comunidades não alcançadas.',
      de: 'Lokale und globale Outreach-Initiativen, humanitäre Hilfe, und Kirchengründungspartnerschaften, die das Reich auf unerreichte Gemeinschaften ausdehnen.',
      zh: '本地和全球外展计划、人道援助、植堂伙伴关系，将国度扩展到未触及的群体。',
      ar: 'مبادرات الامتداد المحلية والعالمية، والإغاثة الإنسانية، وشراكات زرع الكنائس التي تمتد المملكة إلى المجتمعات غير المُبلغ إليها.',
    },
  },
  {
    icon: Users,
    title: {
      en: 'Community Care',
      es: 'Cuidado Comunitario',
      fr: 'Soins Communautaires',
      pt: 'Cuidado Comunitário',
      de: 'Gemeindeversorgung',
      zh: '社区关怀',
      ar: 'رعاية المجتمع',
    },
    description: {
      en: 'Practical support, counseling services, and care ministries that demonstrate Christ\'s love through tangible acts of service.',
      es: 'Apoyo práctico, servicios de consejería, y ministerios de cuidado que demuestran el amor de Cristo a través de actos tangibles de servicio.',
      fr: 'Soutien pratique, services de counseling, et ministères de soins qui démontrent l\'amour du Christ à travers des actes tangibles de service.',
      pt: 'Suporte prático, serviços de aconselhamento, e ministérios de cuidado que demonstram o amor de Cristo através de atos tangíveis de serviço.',
      de: 'Praktische Unterstützung, Beratungsdienste, und Fürsorgeministerien, die die Liebe Christi durch greifbare Dienstakte demonstrieren.',
      zh: '实际支持、辅导服务和关怀事工，通过具体的服务行动彰显基督的爱。',
      ar: 'الدعم العملي، وخدمات الاستشارة، وخدمات الرعاية التي تُظهر محبة المسيح من خلال أفعال الخدمة الملموسة.',
    },
  },
];

export default function Ministries({ currentLang }: MinistriesProps) {
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
    <section id="ministries" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="text-center mb-16 fade-element opacity-0">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="section-label">
              {currentLang === 'en' ? 'Ministries' : currentLang === 'es' ? 'Ministerios' : currentLang === 'fr' ? 'Ministères' : 'Ministries'}
            </span>
            <span className="w-12 h-px bg-gold" />
          </div>
          <h2 className="editorial-heading max-w-2xl mx-auto">
            {currentLang === 'en' 
              ? 'Departments of Service'
              : currentLang === 'es'
              ? 'Departamentos de Servicio'
              : currentLang === 'fr'
              ? 'Départements de Service'
              : 'Departments of Service'
            }
          </h2>
        </div>

        {/* Ministries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <div
                key={index}
                className="fade-element opacity-0 group"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="p-6 md:p-8 bg-white border border-border/50 hover:shadow-editorial transition-shadow duration-300 h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-navy/5 rounded-sm mb-5 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-navy mb-3">
                    {ministry.title[currentLang as keyof typeof ministry.title] || ministry.title.en}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {ministry.description[currentLang as keyof typeof ministry.description] || ministry.description.en}
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
