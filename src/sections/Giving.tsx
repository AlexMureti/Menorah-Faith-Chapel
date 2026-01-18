import { useEffect, useRef } from 'react';
import { Heart, Gift, TrendingUp, Smartphone, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface GivingProps {
    currentLang: string;
}

const content = {
    sectionLabel: {
        en: 'Kingdom Giving',
        es: 'Ofrenda del Reino',
        fr: 'Don du Royaume',
        pt: 'Doação do Reino',
        de: 'Königreichsgabe',
        zh: '天国奉献',
        ar: 'العطاء في الملكوت',
    },
    headline: {
        en: 'Sow Into the Kingdom and Watch God Multiply Your Blessing',
        es: 'Siembra en el Reino y Mira a Dios Multiplicar tu Bendición',
        fr: 'Semez dans le Royaume et Regardez Dieu Multiplier votre Bénédiction',
        pt: 'Semeia no Reino e Veja Deus Multiplicar sua Bênção',
        de: 'Säen Sie ins Reich und Sehen Sie Gott Ihren Segen vervielfachen',
        zh: '撒种在天国，看神倍增你的祝福',
        ar: 'ابذر في الملكوت وشاهد الله يضاعف بركتك',
    },
    description: {
        en: 'Your generosity fuels our mission to advance God\'s Kingdom globally. Every contribution—no matter the size—makes a significant impact in teaching, worship, leadership development, and reaching nations.',
        es: 'Tu generosidad impulsa nuestra misión de avanzar el Reino de Dios globalmente. Cada contribución, sin importar el tamaño, tiene un impacto significativo en la enseñanza, adoración, desarrollo de liderazgo y alcance de naciones.',
        fr: 'Votre générosité alimente notre mission d\'avancer le Royaume de Dieu à l\'échelle mondiale. Chaque contribution, quelle que soit sa taille, a un impact significatif sur l\'enseignement, l\'adoration, le développement du leadership et la portée des nations.',
        pt: 'Sua generosidade alimenta nossa missão de avançar o Reino de Deus globalmente. Cada contribuição, não importa o tamanho, tem um impacto significativo no ensino, adoração, desenvolvimento de liderança e alcance das nações.',
        de: 'Ihre Großzügigkeit treibt unsere Mission voran, das Reich Gottes weltweit voranzubringen. Jeder Beitrag – egal wie groß – hat einen großen Einfluss auf Lehre, Anbetung, Führungskräfteentwicklung und Reichweite von Nationen.',
        zh: '你的慷慨推动我们全球推进神国度的使命。每一份贡献，无论大小，都在教导、敬拜、领袖发展和影响列国方面产生重大影响。',
        ar: 'تغذي كرمك مهمتنا لتقدم ملكوت الله عالميًا. كل مساهمة - بغض النظر عن الحجم - لها تأثير كبير في التعليم والعبادة وتطوير القيادة والوصول إلى الأمم.',
    },
    scriptureRef: {
        en: 'Malachi 3:10 - "Bring the whole tithe into the storehouse... and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it."',
        es: 'Malaquías 3:10 - "Traed todos los diezmos al alfolí... y pruébame ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos, y derramaré sobre vosotros bendición hasta que sobreabunde."',
        fr: 'Malachie 3:10 - "Apportez la totalité de la dîme au magasin... et mettez-moi à l\'épreuve en cela, dit l\'Éternel des armées, pour voir si je n\'ouvre pas pour vous les écluses du ciel et si je ne verse pas sur vous la bénédiction jusqu\'à ce qu\'il n\'y ait plus de place."',
        pt: 'Malaquias 3:10 - "Tragam todo o dízimo para o tesouro... e provem-me nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu e derramar bênção até que não haja espaço para armazená-la."',
        de: 'Maleachi 3:10 - "Bringt den ganzen Zehnten ins Vorratshaus... und prüft mich darin, spricht der Herr der Heerscharen, ob ich dir nicht die Fenster des Himmels öffne und dir Segen ausschütte bis zum Überfluss."',
        zh: '玛拉基书 3:10 - "万军之耶和华说：你们要将当纳的十分之一全然送入仓库... 以此试试我是否为你们敞开天上的窗户，倾福与你们，甚至无处可容。"',
        ar: 'ملاخي 3:10 - "هاتوا الكل العشر إلى بيت الخزنة... قال رب الجنود: جربوني بهذا إن كنت لا أفتح لكم أبواب السماء وأفيض عليكم البركة حتى لا توسع."',
    },
    givingOptions: {
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
                en: 'The first 10% of your income set apart for God. A covenant commitment that positions you to receive God\'s increase and blessing.',
                es: 'El primer 10% de tus ingresos apartado para Dios. Un compromiso del pacto que te posiciona para recibir el aumento y la bendición de Dios.',
                fr: 'Les premiers 10% de vos revenus mis à part pour Dieu. Un engagement d\'alliance qui vous positionne pour recevoir l\'augmentation et la bénédiction de Dieu.',
                pt: 'Os primeiros 10% de sua renda separados para Deus. Um compromisso da aliança que o posiciona para receber o aumento e a bênção de Deus.',
                de: 'Die ersten 10% Ihres Einkommens, die für Gott bestimmt sind. Ein Bundesverpflichtung, die Sie positioniert, um Gottes Zunahme und Segen zu empfangen.',
                zh: '你收入的前10%分别为神。一个使约承诺，使你处于接受神的增长和祝福的位置。',
                ar: 'أول 10% من دخلك مخصص لله. التزام العهد الذي يضعك لتلقي زيادة الله وبركته.',
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
                en: 'Above the tithe, these gifts express your love and gratitude to God. Offerings are a powerful way to sow seeds of faith and blessing.',
                es: 'Además del diezmo, estos regalos expresan tu amor y gratitud a Dios. Las ofrendas son una forma poderosa de sembrar semillas de fe y bendición.',
                fr: 'Au-delà de la dîme, ces dons expriment votre amour et votre gratitude envers Dieu. Les offrandes sont un moyen puissant de semer des graines de foi et de bénédiction.',
                pt: 'Além do dízimo, esses presentes expressam seu amor e gratidão a Deus. As ofertas são uma forma poderosa de semear sementes de fé e bênção.',
                de: 'Über den Zehnten hinaus drücken diese Gaben Ihre Liebe und Dankbarkeit gegenüber Gott aus. Opfergaben sind ein kraftvoller Weg, Samen des Glaubens und des Segens zu säen.',
                zh: '除十分之一外，这些礼物表达了你对神的爱和感谢。奉献是撒种信心和祝福种子的强大方式。',
                ar: 'بخلاف العشور، تعبر هذه الهدايا عن حبك وامتنانك لله. القرابين هي طريقة قوية لبذر بذور الإيمان والبركة.',
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
                en: 'Strategic gifts released in response to God\'s prompting. Seeds sown in faith bring forth a harvest of blessing, multiplication, and divine favor.',
                es: 'Regalos estratégicos liberados en respuesta al impulso de Dios. Las semillas sembradas con fe traen una cosecha de bendición, multiplicación y favor divino.',
                fr: 'Des dons stratégiques libérés en réponse à la poussée de Dieu. Les graines semées avec foi apportent une moisson de bénédiction, de multiplication et de faveur divine.',
                pt: 'Presentes estratégicos liberados em resposta ao impulso de Deus. Sementes semadas com fé trazem uma colheita de bênção, multiplicação e favor divino.',
                de: 'Strategische Gaben, die als Reaktion auf Gottes Drängen freigegeben werden. Mit Glauben gesäte Samen bringen eine Ernte von Segen, Vermehrung und göttlicher Gunst.',
                zh: '为回应神的催促而释放的战略性礼物。用信心撒的种子带来祝福、倍增和神圣恩惠的收获。',
                ar: 'هدايا إستراتيجية تُطلق استجابة لحثّ الله. البذور المزروعة بالإيمان تحمل حصادًا من البركة والمضاعفة والنعمة الإلهية.',
            },
            icon: Heart,
        },
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
        <section id="giving" ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-b from-white via-secondary/10 to-white">
            <div className="editorial-container">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-8 fade-element opacity-0">
                    <span className="w-12 h-px bg-gold" />
                    <span className="section-label">
                        {content.sectionLabel[currentLang as keyof typeof content.sectionLabel] || content.sectionLabel.en}
                    </span>
                </div>

                {/* Main Headline */}
                <h2 className="fade-element opacity-0 editorial-heading mb-6 max-w-3xl">
                    {content.headline[currentLang as keyof typeof content.headline] || content.headline.en}
                </h2>

                {/* Description & Scripture */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="fade-element opacity-0">
                        <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                            {content.description[currentLang as keyof typeof content.description] || content.description.en}
                        </p>
                    </div>

                    {/* Scripture Box */}
                    <div className="fade-element opacity-0 bg-navy/5 border-l-4 border-gold p-6 rounded-sm" style={{ animationDelay: '0.1s' }}>
                        <p className="font-serif italic text-navy leading-relaxed">
                            {content.scriptureRef[currentLang as keyof typeof content.scriptureRef] || content.scriptureRef.en}
                        </p>
                    </div>
                </div>

                {/* Three Types of Giving Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {Object.entries(content.givingOptions).map((entry, index) => {
                        const [key, option] = entry;
                        const IconComponent = option.icon;

                        return (
                            <div
                                key={key}
                                className="fade-element opacity-0 bg-white border border-border/50 p-6 md:p-8 rounded-sm hover:shadow-editorial transition-all hover:border-gold/50"
                                style={{ animationDelay: `${0.1 * (index + 2)}s` }}
                            >
                                {/* Icon */}
                                <div className="mb-4">
                                    <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                                        <IconComponent className="w-7 h-7 text-gold" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                                    {option.title[currentLang as keyof typeof option.title] || option.title.en}
                                </h3>

                                {/* Description */}
                                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                                    {option.description[currentLang as keyof typeof option.description] || option.description.en}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Payment Methods Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Payment Instructions */}
                    <div className="fade-element opacity-0">
                        <h3 className="font-serif text-2xl md:text-3xl text-navy mb-8">
                            {currentLang === 'en' ? 'Give Today' : currentLang === 'es' ? 'Dona Hoy' : currentLang === 'fr' ? 'Donnez Aujourd\'hui' : currentLang === 'pt' ? 'Doe Hoje' : currentLang === 'de' ? 'Heute Geben' : currentLang === 'zh' ? '今天奉献' : 'تبرع اليوم'}
                        </h3>

                        <div className="space-y-6">
                            {/* M-Pesa Option */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 p-6 rounded-sm">
                                <div className="flex items-start gap-3 mb-4">
                                    <Smartphone className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 text-lg mb-2">
                                            {currentLang === 'en' ? 'Lipa na M-Pesa' : currentLang === 'es' ? 'Lipa na M-Pesa' : 'Lipa na M-Pesa'}
                                        </h4>
                                        <p className="text-sm text-green-800 mb-4">
                                            {currentLang === 'en'
                                                ? 'Quick and secure mobile payment'
                                                : currentLang === 'es'
                                                    ? 'Pago móvil rápido y seguro'
                                                    : currentLang === 'fr'
                                                        ? 'Paiement mobile rapide et sécurisé'
                                                        : currentLang === 'pt'
                                                            ? 'Pagamento móvel rápido e seguro'
                                                            : currentLang === 'de'
                                                                ? 'Schnelle und sichere Mobilzahlung'
                                                                : currentLang === 'zh'
                                                                    ? '快速安全的移动支付'
                                                                    : 'الدفع عبر الهاتف المحمول بسرعة وأمان'}
                                        </p>

                                        {/* Lipa Number Display */}
                                        <div className="flex items-center gap-2 bg-white p-3 rounded border border-green-200">
                                            <code className="flex-1 font-mono font-bold text-green-900 text-lg">Buy Goods - {lipaNumber}</code>
                                            <button
                                                onClick={copyToClipboard}
                                                className="p-2 hover:bg-green-100 rounded transition-colors"
                                                title={currentLang === 'en' ? 'Copy' : 'Copiar'}
                                            >
                                                {copiedPhone ? (
                                                    <Check className="w-5 h-5 text-green-700" />
                                                ) : (
                                                    <Copy className="w-5 h-5 text-green-700" />
                                                )}
                                            </button>
                                        </div>

                                        <p className="text-xs text-green-700 mt-3 font-medium">
                                            {currentLang === 'en'
                                                ? '1. Dial the code above | 2. Enter amount | 3. Confirm with PIN'
                                                : currentLang === 'es'
                                                    ? '1. Marca el código anterior | 2. Ingresa cantidad | 3. Confirma con PIN'
                                                    : currentLang === 'fr'
                                                        ? '1. Composez le code ci-dessus | 2. Entrez le montant | 3. Confirmez avec le PIN'
                                                        : currentLang === 'pt'
                                                            ? '1. Disque o código acima | 2. Digite o valor | 3. Confirme com PIN'
                                                            : currentLang === 'de'
                                                                ? '1. Geben Sie den Code ein | 2. Geben Sie Betrag ein | 3. Mit PIN bestätigen'
                                                                : currentLang === 'zh'
                                                                    ? '1. 拨打上面的代码 | 2. 输入金额 | 3. 用PIN确认'
                                                                    : '1. اطلب الكود أعلاه | 2. أدخل المبلغ | 3. أكد برمز PIN'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bank Transfer */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 p-6 rounded-sm">
                                <h4 className="font-semibold text-blue-900 text-lg mb-3">
                                    {currentLang === 'en' ? 'Bank Transfer' : currentLang === 'es' ? 'Transferencia Bancaria' : 'Transferencia Bancaria'}
                                </h4>
                                <p className="text-sm text-blue-800">
                                    {currentLang === 'en'
                                        ? 'Contact us for bank account details'
                                        : currentLang === 'es'
                                            ? 'Contáctenos para obtener los detalles de la cuenta bancaria'
                                            : 'Contactez-nous pour les détails du compte bancaire'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Impact Statement */}
                    <div className="fade-element opacity-0" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-gradient-to-br from-navy via-covenant to-covenant/80 text-white p-8 md:p-10 rounded-sm shadow-editorial">
                            <h4 className="font-serif text-2xl md:text-3xl mb-6 leading-tight">
                                {currentLang === 'en'
                                    ? 'Your Gift Makes a Difference'
                                    : currentLang === 'es'
                                        ? 'Tu Regalo Hace la Diferencia'
                                        : currentLang === 'fr'
                                            ? 'Votre Cadeau Fait la Différence'
                                            : currentLang === 'pt'
                                                ? 'Seu Presente Faz a Diferença'
                                                : currentLang === 'de'
                                                    ? 'Ihre Gabe macht den Unterschied'
                                                    : currentLang === 'zh'
                                                        ? '你的礼物很重要'
                                                        : 'هديتك تحدث فرقاً'}
                            </h4>

                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-gold text-2xl flex-shrink-0">•</span>
                                    <span className="text-white/90">
                                        {currentLang === 'en'
                                            ? 'Funds apostolic teaching and prophetic ministry'
                                            : currentLang === 'es'
                                                ? 'Financia la enseñanza apostólica y el ministerio profético'
                                                : 'Finance l\'enseignement apostolique et le ministère prophétique'}
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-gold text-2xl flex-shrink-0">•</span>
                                    <span className="text-white/90">
                                        {currentLang === 'en'
                                            ? 'Supports global missions and kingdom advancement'
                                            : currentLang === 'es'
                                                ? 'Apoya las misiones globales y el avance del reino'
                                                : 'Soutient les missions mondiales et l\'avancement du royaume'}
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-gold text-2xl flex-shrink-0">•</span>
                                    <span className="text-white/90">
                                        {currentLang === 'en'
                                            ? 'Develops emerging leaders and kingdom workers'
                                            : currentLang === 'es'
                                                ? 'Desarrolla líderes emergentes y obreros del reino'
                                                : 'Développe les leaders émergents et les ouvriers du royaume'}
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-gold text-2xl flex-shrink-0">•</span>
                                    <span className="text-white/90">
                                        {currentLang === 'en'
                                            ? 'Expands worship, prayer, and spiritual empowerment'
                                            : currentLang === 'es'
                                                ? 'Expande la adoración, la oración y el empoderamiento espiritual'
                                                : 'Étend l\'adoration, la prière et l\'autonomisation spirituelle'}
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-8 pt-8 border-t border-white/20">
                                <p className="text-sm text-white/80 italic">
                                    {currentLang === 'en'
                                        ? '"God loves a cheerful giver." - 2 Corinthians 9:7'
                                        : currentLang === 'es'
                                            ? '"Dios ama al dador alegre." - 2 Corintios 9:7'
                                            : '"Dieu aime celui qui donne avec joie." - 2 Corinthiens 9:7'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
