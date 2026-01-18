import { useEffect, useRef } from 'react';
import { Play, Zap } from 'lucide-react';

interface YearlyThemeVideoProps {
    currentLang: string;
}

const content = {
    sectionLabel: {
        en: 'Yearly Theme',
        es: 'Tema Anual',
        fr: 'Thème Annuel',
        pt: 'Tema Anual',
        de: 'Jährliches Thema',
        zh: '年度主题',
        ar: 'الموضوع السنوي',
    },
    headline: {
        en: '2026: Divine Favor, Supernatural Momentum, Increase and Establishment',
        es: '2026: Favor Divino, Momento Sobrenatural, Incremento y Establecimiento',
        fr: '2026: Faveur Divine, Impulsion Surnaturelle, Accroissement et Établissement',
        pt: '2026: Favor Divino, Momento Sobrenatural, Aumento e Estabelecimento',
        de: '2026: Göttliche Gunst, Übernatürliche Dynamik, Wachstum und Etablierung',
        zh: '2026年：神圣恩惠、超自然动力、增长与建立',
        ar: '2026: النعمة الإلهية، الزخم الخارق، الزيادة والتأسيس',
    },
    themeYear: {
        en: '2026',
        es: '2026',
        fr: '2026',
        pt: '2026',
        de: '2026',
        zh: '2026',
        ar: '2026',
    },
    description: {
        en: 'A year of unprecedented blessings, divine acceleration, and spiritual establishment. Walk in God\'s favor and see His supernatural power manifest in every area of your life and ministry.',
        es: 'Un año de bendiciones sin precedentes, aceleración divina y establecimiento espiritual. Camina en el favor de Dios y ve Su poder sobrenatural manifestarse en cada área de tu vida y ministerio.',
        fr: 'Une année de bénédictions sans précédent, d\'accélération divine et d\'établissement spirituel. Marchez dans la faveur de Dieu et voyez Sa puissance surnaturelle se manifester dans tous les domaines de votre vie et ministère.',
        pt: 'Um ano de bênçãos sem precedentes, aceleração divina e estabelecimento espiritual. Caminhe na favor de Deus e veja Seu poder sobrenatural se manifestar em cada área de sua vida e ministério.',
        de: 'Ein Jahr beispiellosen Segens, göttlicher Beschleunigung und geistlicher Etablierung. Wandeln Sie in Gottes Gunst und sehen Sie Seine übernatürliche Macht in jedem Bereich Ihres Lebens und Dienstes offenbart.',
        zh: '一年前所未有的祝福、神圣加速和属灵建立。行走在神的恩惠中，看见祂的超自然能力在你生活和事工的每个领域彰显。',
        ar: 'سنة من البركات غير المسبوقة والتسريع الإلهي والتأسيس الروحي. اسر في نعمة الله وانظر قوته الخارقة تتجلى في كل مجالات حياتك وخدمتك.',
    },
};

export default function YearlyThemeVideo({ currentLang }: YearlyThemeVideoProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

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
        <section id="theme-video" ref={sectionRef} className="relative min-h-screen bg-navy text-white overflow-hidden py-12 md:py-0 md:min-h-screen flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #FFD700 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Animated Background Gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-covenant/20 rounded-full blur-3xl opacity-30 -mr-48 -mt-48 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl opacity-20 -ml-48 -mb-48" />

            {/* Main Content Grid */}
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

                        {/* Left - Large Video */}
                        <div className="fade-element opacity-0 order-2 md:order-1">
                            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl group">
                                {/* Video Element */}
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src="/theme-video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Play Icon - shown when video isn't playing */}
                                <div className="absolute inset-0 flex items-center justify-center bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gold/90 hover:bg-gold transition-colors">
                                        <Play className="w-10 h-10 text-navy fill-current" />
                                    </div>
                                </div>

                                {/* Border Glow */}
                                <div className="absolute inset-0 rounded-lg border-2 border-gold/30 group-hover:border-gold/60 transition-colors" />
                            </div>

                            {/* Video Bottom Info */}
                            <div className="mt-6 flex items-center gap-3">
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gold/20">
                                    <Zap className="w-5 h-5 text-gold" />
                                </div>
                                <p className="text-sm uppercase tracking-widest text-gold font-semibold">
                                    {currentLang === 'en' ? 'Prophetic Theme 2026' : currentLang === 'es' ? 'Tema Profético 2026' : 'Prophetic Theme 2026'}
                                </p>
                            </div>
                        </div>

                        {/* Right - Large Content */}
                        <div className="space-y-8 fade-element opacity-0 order-1 md:order-2" style={{ animationDelay: '0.2s' }}>
                            {/* Year Badge */}
                            <div className="inline-flex items-center gap-3 mb-4">
                                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gold via-gold to-yellow-600 flex items-center justify-center shadow-lg">
                                    <span className="font-serif text-2xl font-bold text-navy">
                                        {content.themeYear[currentLang as keyof typeof content.themeYear] || content.themeYear.en}
                                    </span>
                                </div>
                                <div className="border-l-2 border-gold/50 pl-4">
                                    <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Year of</p>
                                    <p className="text-gold text-sm font-semibold">Divine Acceleration</p>
                                </div>
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
                                    {content.headline[currentLang as keyof typeof content.headline] || content.headline.en}
                                </h1>
                            </div>

                            {/* Description */}
                            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-xl">
                                {content.description[currentLang as keyof typeof content.description] || content.description.en}
                            </p>

                            {/* Three Pillars */}
                            <div className="space-y-4 pt-6 border-t border-white/20">

                                {/* Pillar 1 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold/20 border border-gold/50">
                                            <span className="text-gold font-bold text-lg">01</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            {currentLang === 'en' ? 'Divine Favor' : currentLang === 'es' ? 'Favor Divino' : 'Divine Favor'}
                                        </h3>
                                        <p className="text-white/70 text-sm">
                                            {currentLang === 'en'
                                                ? 'Unmerited blessing and God\'s grace flowing abundantly'
                                                : currentLang === 'es'
                                                    ? 'Bendición inmerecida y la gracia de Dios fluyendo abundantemente'
                                                    : 'Unmerited blessing and God\'s grace flowing abundantly'}
                                        </p>
                                    </div>
                                </div>

                                {/* Pillar 2 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold/20 border border-gold/50">
                                            <span className="text-gold font-bold text-lg">02</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            {currentLang === 'en'
                                                ? 'Supernatural Momentum'
                                                : currentLang === 'es'
                                                    ? 'Momento Sobrenatural'
                                                    : 'Supernatural Momentum'}
                                        </h3>
                                        <p className="text-white/70 text-sm">
                                            {currentLang === 'en'
                                                ? 'God\'s unstoppable power advancing His kingdom'
                                                : currentLang === 'es'
                                                    ? 'El poder imparable de Dios avanzando Su reino'
                                                    : 'God\'s unstoppable power advancing His kingdom'}
                                        </p>
                                    </div>
                                </div>

                                {/* Pillar 3 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold/20 border border-gold/50">
                                            <span className="text-gold font-bold text-lg">03</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            {currentLang === 'en'
                                                ? 'Increase & Establishment'
                                                : currentLang === 'es'
                                                    ? 'Incremento y Establecimiento'
                                                    : 'Increase & Establishment'}
                                        </h3>
                                        <p className="text-white/70 text-sm">
                                            {currentLang === 'en'
                                                ? 'Growth and lasting impact in every area of ministry'
                                                : currentLang === 'es'
                                                    ? 'Crecimiento e impacto duradero en todas las áreas del ministerio'
                                                    : 'Growth and lasting impact in every area of ministry'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button className="mt-8 px-8 py-3 bg-gold text-navy font-semibold rounded-sm hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl">
                                {currentLang === 'en' ? 'Learn More' : currentLang === 'es' ? 'Aprender Más' : 'Learn More'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </section>
    );
}