import { useEffect, useRef, useState } from 'react';
import { Heart, Gift, TrendingUp, Copy, Check } from 'lucide-react';

interface GivingProps {
    currentLang: string;
}

const content = {
    sectionLabel: {
        en: 'Kingdom Giving & Offerings',
        es: 'Ofrenda del Reino',
        fr: 'Don du Royaume',
        pt: 'Doação do Reino',
        de: 'Königreichsgabe',
        zh: '天国奉献',
        ar: 'العطاء في الملكوت',
    },
    headline: {
        en: 'Partner With God\'s Purpose',
        es: 'Asociate con el Propósito de Dios',
        fr: 'Partenaire avec le Dessein de Dieu',
        pt: 'Seja Parceiro do Propósito de Deus',
        de: 'Partner in Gottes Absicht',
        zh: '与神的目的同工',
        ar: 'كن شريكاً في مقصد الله',
    },
    description: {
        en: 'Your generosity fuels our mission to advance God\'s Kingdom globally through teaching, worship, leadership development, and reaching nations with the Gospel.',
        es: 'Tu generosidad impulsa nuestra misión de avanzar el Reino de Dios globalmente.',
        fr: 'Votre générosité alimente notre mission d\'avancer le Royaume de Dieu à l\'échelle mondiale.',
        pt: 'Sua generosidade alimenta nossa missão de avançar o Reino de Deus globalmente.',
        de: 'Ihre Großzügigkeit treibt unsere Mission voran, das Reich Gottes weltweit voranzubringen.',
        zh: '你的慷慨推动我们全球推进神国度的使命。',
        ar: 'تغذي كرمك مهمتنا لتقدم ملكوت الله عالميًا.',
    },
    mpesaSteps: {
        title: {
            en: '3 Steps to Give',
            es: '3 Pasos para Dar',
            fr: '3 Étapes pour Donner',
            pt: '3 Passos para Dar',
            de: '3 Schritte zum Geben',
            zh: '3个奉献步骤',
            ar: '3 خطوات للتبرع',
        },
        step1Title: {
            en: 'Open Lipa na M-Pesa',
            es: 'Abre Lipa na M-Pesa',
            fr: 'Ouvrir Lipa na M-Pesa',
            pt: 'Abra Lipa na M-Pesa',
            de: 'Öffnen Sie Lipa na M-Pesa',
            zh: '打开Lipa na M-Pesa',
            ar: 'افتح Lipa na M-Pesa',
        },
        step1Desc: {
            en: 'Open the M-Pesa menu on your mobile phone',
            es: 'Abre el menú de M-Pesa en tu teléfono',
            fr: 'Ouvrir le menu M-Pesa sur votre téléphone',
            pt: 'Abra o menu M-Pesa em seu telefone',
            de: 'Öffnen Sie das M-Pesa-Menü auf Ihrem Telefon',
            zh: '在手机上打开M-Pesa菜单',
            ar: 'افتح قائمة M-Pesa على هاتفك',
        },
        step2Title: {
            en: 'Select Buy Goods & Services',
            es: 'Selecciona Comprar Bienes y Servicios',
            fr: 'Sélectionnez Acheter des Biens et Services',
            pt: 'Selecione Comprar Bens e Serviços',
            de: 'Wählen Sie Waren und Dienstleistungen kaufen',
            zh: '选择"购买商品和服务"',
            ar: 'اختر شراء السلع والخدمات',
        },
        step2Desc: {
            en: 'Look for the "Buy Goods and Services" option in the menu',
            es: 'Busca la opción "Comprar Bienes y Servicios"',
            fr: 'Recherchez l\'option "Acheter des Biens et Services"',
            pt: 'Procure a opção "Comprar Bens e Serviços"',
            de: 'Suchen Sie die Option "Waren und Dienstleistungen kaufen"',
            zh: '寻找"购买商品和服务"选项',
            ar: 'ابحث عن خيار "شراء السلع والخدمات"',
        },
        step3Title: {
            en: 'Enter Till Number & Amount',
            es: 'Ingresa el Número de Caja y Cantidad',
            fr: 'Entrez le Numéro de Caisse et le Montant',
            pt: 'Digite o Número da Caixa e o Valor',
            de: 'Geben Sie die Kassennummer und den Betrag ein',
            zh: '输入柜号和金额',
            ar: 'أدخل رقم الكاشير والمبلغ',
        },
        step3Desc: {
            en: 'Enter the Till number and your giving amount. Confirm with your M-Pesa PIN',
            es: 'Ingresa el número de caja y tu cantidad. Confirma con tu PIN',
            fr: 'Entrez le numéro et votre montant. Confirmez avec votre PIN',
            pt: 'Digite o número e seu valor. Confirme com seu PIN',
            de: 'Geben Sie die Nummer und Ihren Betrag ein. Bestätigen Sie mit Ihrer PIN',
            zh: '输入号码和金额。用您的PIN确认',
            ar: 'أدخل الرقم ومبلغك. أكد برمزك',
        },
        tillNumber: {
            en: 'Till (Lipa na M-Pesa Number)',
            es: 'Número de Caja',
            fr: 'Numéro de Caisse',
            pt: 'Número da Caixa',
            de: 'Kassennummer',
            zh: '柜号',
            ar: 'رقم الكاشير',
        },
    },
    givingTypes: {
        tithe: {
            title: {
                en: 'Tithe (10%)',
                es: 'Diezmo (10%)',
                fr: 'Dîme (10%)',
                pt: 'Dízimo (10%)',
                de: 'Zehnten (10%)',
                zh: '十分之一 (10%)',
                ar: 'العشور (10%)',
            },
            description: {
                en: 'The first 10% of your income set apart for God. A covenant commitment for His blessings.',
                es: 'El primer 10% de tus ingresos.',
                fr: 'Les premiers 10% de vos revenus.',
                pt: 'Os primeiros 10% de sua renda.',
                de: 'Die ersten 10% Ihres Einkommens.',
                zh: '你收入的前10%。',
                ar: 'أول 10% من دخلك.',
            },
            icon: TrendingUp,
        },
        offering: {
            title: {
                en: 'Offerings (Voluntary)',
                es: 'Ofrendas (Voluntarias)',
                fr: 'Offrandes (Volontaires)',
                pt: 'Ofertas (Voluntárias)',
                de: 'Opfergaben (Freiwillig)',
                zh: '奉献 (自愿)',
                ar: 'القرابين (طوعا)',
            },
            description: {
                en: 'Express your love and gratitude to God. Offerings are acts of faith and worship.',
                es: 'Expresar tu amor y gratitud a Dios.',
                fr: 'Exprimer votre amour et votre gratitude à Dieu.',
                pt: 'Expressar seu amor e gratidão a Deus.',
                de: 'Drücken Sie Ihre Liebe und Dankbarkeit gegenüber Gott aus.',
                zh: '表达你对上帝的爱和感谢。',
                ar: 'عبر عن حبك وامتنانك لله.',
            },
            icon: Gift,
        },
        sowing: {
            title: {
                en: 'Sowing Seeds',
                es: 'Sembrando Semillas',
                fr: 'Semer des Graines',
                pt: 'Semear Sementes',
                de: 'Samen säen',
                zh: '撒种',
                ar: 'بذر البذور',
            },
            description: {
                en: 'Strategic gifts of faith. Seeds sown in faith bring forth a harvest of blessing.',
                es: 'Regalos estratégicos de fe.',
                fr: 'Des dons stratégiques de foi.',
                pt: 'Presentes estratégicos de fé.',
                de: 'Strategische Gaben des Glaubens.',
                zh: '战略性的信心礼物。',
                ar: 'هدايا استراتيجية للإيمان.',
            },
            icon: Heart,
        },
    },
    impactTitle: {
        en: 'Your Impact',
        es: 'Tu Impacto',
        fr: 'Votre Impact',
        pt: 'Seu Impacto',
        de: 'Ihre Auswirkung',
        zh: '您的影响',
        ar: 'تأثيرك',
    },
    impactItems: {
        item1: {
            en: 'Funds apostolic teaching and prophetic ministry',
            es: 'Financia la enseñanza apostólica',
            fr: 'Finance l\'enseignement apostolique',
            pt: 'Financia o ensino apostólico',
            de: 'Finanziert apostolische Lehre',
            zh: '资助使徒教导',
            ar: 'يمول التعليم الرسولي',
        },
        item2: {
            en: 'Supports global missions and kingdom advancement',
            es: 'Apoya las misiones globales',
            fr: 'Soutient les missions mondiales',
            pt: 'Suporta missões globais',
            de: 'Unterstützt globale Missionen',
            zh: '支持全球宣教',
            ar: 'يدعم المهام العالمية',
        },
        item3: {
            en: 'Develops emerging leaders and kingdom workers',
            es: 'Desarrolla líderes emergentes',
            fr: 'Développe les leaders émergents',
            pt: 'Desenvolve líderes emergentes',
            de: 'Entwickelt aufstrebende Anführer',
            zh: '培养新兴领袖',
            ar: 'يطور القادة الناشئين',
        },
        item4: {
            en: 'Expands worship, prayer, and spiritual empowerment',
            es: 'Expande la adoración y la oración',
            fr: 'Étend l\'adoration et la prière',
            pt: 'Expande adoração e oração',
            de: 'Erweitert Anbetung und Gebet',
            zh: '扩展敬拜和祈祷',
            ar: 'يوسع العبادة والصلاة',
        },
    },
    scriptureRef: {
        en: '"God loves a cheerful giver." - 2 Corinthians 9:7',
        es: '"Dios ama al dador alegre." - 2 Corintios 9:7',
        fr: '"Dieu aime celui qui donne avec joie." - 2 Corinthiens 9:7',
        pt: '"Deus ama quem dá com alegria." - 2 Coríntios 9:7',
        de: '"Gott liebt einen fröhlichen Geber." - 2 Korinther 9:7',
        zh: '"神爱乐意施舍的人。" - 哥林多后书 9:7',
        ar: '"الله يحب من يعطي بفرح." - 2 كورنثوس 9:7',
    },
};

export default function Giving({ currentLang }: GivingProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const lipaNumber = '8511952';

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

    const copyToClipboard = () => {
        navigator.clipboard.writeText(lipaNumber);
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
    };

    return (
        <section id="giving" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-white via-secondary/5 to-white">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="fade-element opacity-0 mb-12 text-center md:text-left">
                        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                            <span className="w-12 h-px bg-gold" />
                            <span className="text-xs uppercase tracking-widest font-semibold text-gold">
                                {content.sectionLabel[currentLang as keyof typeof content.sectionLabel] || content.sectionLabel.en}
                            </span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight">
                            {content.headline[currentLang as keyof typeof content.headline] || content.headline.en}
                        </h2>
                        <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
                            {content.description[currentLang as keyof typeof content.description] || content.description.en}
                        </p>
                    </div>

                    {/* M-Pesa Steps Section */}
                    <div className="fade-element opacity-0 mb-16" style={{ animationDelay: '0.1s' }}>
                        <h3 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
                            {content.mpesaSteps.title[currentLang as keyof typeof content.mpesaSteps.title] || content.mpesaSteps.title.en}
                        </h3>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Step 1 */}
                            <div className="fade-element opacity-0 relative" style={{ animationDelay: '0.2s' }}>
                                <div className="bg-white border-2 border-gold/30 p-8 rounded-sm hover:shadow-lg transition-all h-full">
                                    {/* Step Number */}
                                    <div className="absolute -top-6 left-8 bg-gold text-navy w-12 h-12 rounded-full flex items-center justify-center font-serif text-2xl font-bold">
                                        1
                                    </div>

                                    <h4 className="font-serif text-xl text-navy font-bold mb-4 mt-4">
                                        {content.mpesaSteps.step1Title[currentLang as keyof typeof content.mpesaSteps.step1Title] || content.mpesaSteps.step1Title.en}
                                    </h4>
                                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                                        {content.mpesaSteps.step1Desc[currentLang as keyof typeof content.mpesaSteps.step1Desc] || content.mpesaSteps.step1Desc.en}
                                    </p>
                                </div>
                            </div>

                            {/* Arrow Down Mobile */}
                            <div className="flex justify-center md:hidden text-gold">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>

                            {/* Step 2 */}
                            <div className="fade-element opacity-0 relative" style={{ animationDelay: '0.3s' }}>
                                <div className="bg-white border-2 border-covenant/30 p-8 rounded-sm hover:shadow-lg transition-all h-full">
                                    {/* Step Number */}
                                    <div className="absolute -top-6 left-8 bg-covenant text-white w-12 h-12 rounded-full flex items-center justify-center font-serif text-2xl font-bold">
                                        2
                                    </div>

                                    <h4 className="font-serif text-xl text-navy font-bold mb-4 mt-4">
                                        {content.mpesaSteps.step2Title[currentLang as keyof typeof content.mpesaSteps.step2Title] || content.mpesaSteps.step2Title.en}
                                    </h4>
                                    <p className="text-foreground/70 text-sm leading-relaxed">
                                        {content.mpesaSteps.step2Desc[currentLang as keyof typeof content.mpesaSteps.step2Desc] || content.mpesaSteps.step2Desc.en}
                                    </p>
                                </div>
                            </div>

                            {/* Arrow Down Mobile */}
                            <div className="flex justify-center md:hidden text-gold">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>

                            {/* Step 3 */}
                            <div className="fade-element opacity-0 relative" style={{ animationDelay: '0.4s' }}>
                                <div className="bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-400 p-8 rounded-sm hover:shadow-lg transition-all h-full">
                                    {/* Step Number */}
                                    <div className="absolute -top-6 left-8 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-serif text-2xl font-bold">
                                        3
                                    </div>

                                    <h4 className="font-serif text-xl text-navy font-bold mb-4 mt-4">
                                        {content.mpesaSteps.step3Title[currentLang as keyof typeof content.mpesaSteps.step3Title] || content.mpesaSteps.step3Title.en}
                                    </h4>
                                    <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                                        {content.mpesaSteps.step3Desc[currentLang as keyof typeof content.mpesaSteps.step3Desc] || content.mpesaSteps.step3Desc.en}
                                    </p>

                                    {/* Till Number Box */}
                                    <div className="bg-white border-2 border-green-400 rounded p-3">
                                        <p className="text-xs text-green-700 font-semibold mb-2">
                                            {content.mpesaSteps.tillNumber[currentLang as keyof typeof content.mpesaSteps.tillNumber] || content.mpesaSteps.tillNumber.en}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <code className="flex-1 font-mono font-bold text-green-700 text-xl">
                                                {lipaNumber}
                                            </code>
                                            <button
                                                onClick={copyToClipboard}
                                                className="p-2 hover:bg-green-100 rounded transition-colors"
                                                title="Copy"
                                            >
                                                {copiedPhone ? (
                                                    <Check className="w-5 h-5 text-green-700" />
                                                ) : (
                                                    <Copy className="w-5 h-5 text-green-700" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Giving Types */}
                    <div className="fade-element opacity-0 mb-16" style={{ animationDelay: '0.2s' }}>
                        <div className="grid md:grid-cols-3 gap-6">
                            {Object.entries(content.givingTypes).map((entry, index) => {
                                const [key, option] = entry;
                                const IconComponent = option.icon;

                                return (
                                    <div
                                        key={key}
                                        className="fade-element opacity-0 bg-white border border-border/50 p-6 md:p-8 rounded-sm hover:shadow-lg transition-all"
                                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                                    >
                                        <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                                            <IconComponent className="w-7 h-7 text-gold" />
                                        </div>
                                        <h3 className="font-serif text-xl md:text-2xl text-navy mb-3 font-bold">
                                            {option.title[currentLang as keyof typeof option.title] || option.title.en}
                                        </h3>
                                        <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                                            {option.description[currentLang as keyof typeof option.description] || option.description.en}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Impact Section */}
                    <div className="fade-element opacity-0 bg-gradient-to-r from-navy via-covenant to-navy text-white p-8 md:p-12 rounded-sm shadow-lg" style={{ animationDelay: '0.3s' }}>
                        <h3 className="font-serif text-3xl md:text-4xl mb-10 text-center">
                            {content.impactTitle[currentLang as keyof typeof content.impactTitle] || content.impactTitle.en}
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {Object.entries(content.impactItems).map((entry) => {
                                const [, item] = entry;
                                return (
                                    <div key={entry[0]} className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-6 h-6 rounded-full bg-gold/30 flex items-center justify-center">
                                                <span className="w-2 h-2 rounded-full bg-gold" />
                                            </div>
                                        </div>
                                        <p className="text-white/90 text-sm md:text-base leading-relaxed">
                                            {item[currentLang as keyof typeof item] || item.en}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="border-t border-white/20 pt-8 text-center">
                            <p className="font-serif italic text-white/90 text-lg">
                                {content.scriptureRef[currentLang as keyof typeof content.scriptureRef] || content.scriptureRef.en}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
