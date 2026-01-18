import { useEffect, useRef } from 'react';
import { Calendar, Sun, Moon, Coffee } from 'lucide-react';

interface ServiceTimesProps {
  currentLang: string;
}

const content = {
  sectionLabel: {
    en: 'Gatherings',
    es: 'Reuniones',
    fr: 'Rassemblements',
    pt: 'Reuniões',
    de: 'Versammlungen',
    zh: '聚会',
    ar: 'الاجتماعات',
  },
  headline: {
    en: 'Service Times',
    es: 'Horarios de Servicios',
    fr: 'Horaires des Services',
    pt: 'Horários dos Serviços',
    de: 'Gottesdienstzeiten',
    zh: '聚会时间',
    ar: 'أوقات الخدمات',
  },
  subtext: {
    en: 'Come worship with us. All services include biblical teaching, Spirit-led worship, and prayer ministry.',
    es: 'Ven a adorar con nosotros. Todos los servicios incluyen enseñanza bíblica, adoración dirigida por el Espíritu, y ministerio de oración.',
    fr: 'Venez adorer avec nous. Tous les services incluent un enseignement biblique, une adoration conduite par l\'Esprit, et un ministère de prière.',
    pt: 'Venha adorar conosco. Todos os serviços incluem ensino bíblico, adoração dirigida pelo Espírito, e ministério de oração.',
    de: 'Kommen Sie und beten Sie mit uns. Alle Gottesdienste beinhalten biblische Lehre, geistleitete Anbetung, und Gebetdienst.',
    zh: '请来与我们一同敬拜。所有聚会都包括圣经教导、圣灵引导的敬拜和祷告事工。',
    ar: 'تعال وصلى معنا. جميع الخدمات تشمل التعليم الكتابي، العبادة بقيادة الروح، وخدمة الصلاة.',
  },
  sundayServices: {
    title: {
      en: 'Sunday Services',
      es: 'Servicios Dominicales',
      fr: 'Services du Dimanche',
      pt: 'Cultos de Domingo',
      de: 'Sonntagsgottesdienste',
      zh: '主日聚会',
      ar: 'خدمات الأحد',
    },
    services: [
      { name: { en: 'First Service', es: 'Primer Servicio', fr: 'Premier Service', pt: 'Primeiro Culto', de: 'Erster Gottesdienst', zh: '第一场聚会', ar: 'الخدمة الأولى' }, time: '9:00 AM – 10:00 AM', icon: Sun },
      { name: { en: 'Second Service', es: 'Segundo Servicio', fr: 'Deuxième Service', pt: 'Segundo Culto', de: 'Zweiter Gottesdienst', zh: '第二场聚会', ar: 'الخدمة الثانية' }, time: '10:00 AM – 1:00 PM', icon: Sun },
    ],
  },
  midweekServices: {
    title: {
      en: 'Midweek Services',
      es: 'Servicios de Entresemana',
      fr: 'Services en Semaine',
      pt: 'Cultos de Meio de Semana',
      de: 'Wochentag-Gottesdienste',
      zh: '周中聚会',
      ar: 'خدمات منتصف الأسبوع',
    },
    services: [
      { name: { en: 'Lunch Hour Fellowship', es: 'Comunión del Almuerzo', fr: 'Communion du Déjeuner', pt: 'Comunhão do Almoço', de: 'Mittagessen-Gemeinschaft', zh: '午餐团契', ar: 'شركة الغداء' }, time: '12:50 PM – 1:50 PM', days: { en: 'Tue–Thu', es: 'Mar–Jue', fr: 'Mar–Jeu', pt: 'Ter–Qui', de: 'Di–Do', zh: '周二至周四', ar: 'ث-خ' }, icon: Coffee },
      { name: { en: 'Worship Service', es: 'Servicio de Adoración', fr: 'Service d\'Adoration', pt: 'Culto de Adoração', de: 'Anbetungsgottesdienst', zh: '敬拜聚会', ar: 'خدمة العبادة' }, time: 'Wednesday, 6:00 PM – 8:00 PM', day: { en: 'Wednesday', es: 'Miércoles', fr: 'Mercredi', pt: 'Quarta-feira', de: 'Mittwoch', zh: '周三', ar: 'الأربعاء' }, icon: Moon },
      { name: { en: 'Mini Kesha (Overnight Prayer)', es: 'Mini Kesha (Oración Nocturna)', fr: 'Mini Kesha (Prière de Nuit)', pt: 'Mini Kesha (Oração Noturna)', de: 'Mini Kesha (Nachtgebet)', zh: '小型通宵祷告会', ar: 'ميني كيشوا (صلاة ليلية)' }, time: 'Friday, 7:00 PM – 10:00 PM', day: { en: 'Friday', es: 'Viernes', fr: 'Vendredi', pt: 'Sexta-feira', de: 'Freitag', zh: '周五', ar: 'الجمعة' }, icon: Moon },
    ],
  },
  location: {
    en: 'All services held at our main sanctuary unless otherwise noted.',
    es: 'Todos los servicios se llevan a cabo en nuestro santuario principal salvo indicación contraria.',
    fr: 'Tous les services ont lieu dans notre sanctuaire principal sauf indication contraire.',
    pt: 'Todos os cultos realizam-se no nosso santuário principal salvo indicação em contrário.',
    de: 'Alle Gottesdienste finden in unserem Hauptheiligtum statt, sofern nicht anders angegeben.',
    zh: '除非另有说明，所有聚会都在我们主堂举行。',
    ar: 'جميع الخدمات تُعقد في مذبحتنا الرئيسية ما لم يُذكر خلاف ذلك.',
  },
};

export default function ServiceTimes({ currentLang }: ServiceTimesProps) {
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
    <section id="services" ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-br from-white to-secondary/20">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 fade-element opacity-0">
          <span className="w-12 h-px bg-gold" />
          <span className="section-label">
            {content.sectionLabel[currentLang as keyof typeof content.sectionLabel] || content.sectionLabel.en}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Header Content */}
          <div className="fade-element opacity-0" style={{ animationDelay: '0.1s' }}>
            <h2 className="editorial-heading mb-6">
              {content.headline[currentLang as keyof typeof content.headline] || content.headline.en}
            </h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              {content.subtext[currentLang as keyof typeof content.subtext] || content.subtext.en}
            </p>

            {/* Location Note */}
            <div className="mt-8 p-4 bg-white border border-border/50 rounded-sm shadow-sm">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground/70">
                  {content.location[currentLang as keyof typeof content.location] || content.location.en}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Service Schedule */}
          <div className="space-y-8 fade-element opacity-0" style={{ animationDelay: '0.2s' }}>
            {/* Sunday Services */}
            <div className="bg-white border border-border/50 rounded-sm shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-border/30 bg-navy text-white">
                <div className="w-10 h-10 flex items-center justify-center bg-gold/20 rounded-sm">
                  <Sun className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-lg">
                  {content.sundayServices.title[currentLang as keyof typeof content.sundayServices.title] || content.sundayServices.title.en}
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {content.sundayServices.services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border/30 last:border-0">
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-covenant" />
                        <span className="text-foreground/80">
                          {service.name[currentLang as keyof typeof service.name] || service.name.en}
                        </span>
                      </div>
                      <span className="font-medium text-navy">{service.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Midweek Services */}
            <div className="bg-white border border-border/50 rounded-sm shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-border/30 bg-covenant text-white">
                <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-sm">
                  <Moon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-serif text-lg">
                  {content.midweekServices.title[currentLang as keyof typeof content.midweekServices.title] || content.midweekServices.title.en}
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {content.midweekServices.services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="py-3 border-b border-border/30 last:border-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-navy" />
                          <span className="text-foreground/80">
                            {service.name[currentLang as keyof typeof service.name] || service.name.en}
                          </span>
                        </div>
                        <span className="font-medium text-navy">{service.time}</span>
                      </div>
                      {service.days && (
                        <span className="text-xs text-foreground/50 ml-7">
                          {service.days[currentLang as keyof typeof service.days] || service.days.en}
                        </span>
                      )}
                      {service.day && (
                        <span className="text-xs text-foreground/50 ml-7">
                          {service.day[currentLang as keyof typeof service.day] || service.day.en}
                        </span>
                      )}
                    </div>
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
