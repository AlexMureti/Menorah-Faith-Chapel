import { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle, Send, Check, Calendar, Clock } from 'lucide-react';

interface ContactProps {
  currentLang: string;
  onOpenBooking?: () => void;
}

const content = {
  sectionLabel: {
    en: 'Contact & Booking',
    es: 'Contacto y Reservas',
    fr: 'Contact et Réservation',
    pt: 'Contato e Reservas',
    de: 'Kontakt und Buchung',
    zh: '联系与预约',
    ar: 'الاتصال والحجز',
  },
  headline: {
    en: 'Get in Touch',
    es: 'Ponte en Contacto',
    fr: 'Prenez Contact',
    pt: 'Entre em Contato',
    de: 'Kontakt Aufnehmen',
    zh: '联系我们',
    ar: 'تواصل معنا',
  },
  subtext: {
    en: 'We welcome your inquiries regarding ministry invitations, prayer requests, counseling appointments, and general information.',
    es: 'Damos la bienvenida a sus consultas sobre invitaciones ministeriales, peticiones de oración, citas de consejería e información general.',
    fr: 'Nous accueillons vos demandes concernant les invitations ministérielles, les demandes de prière, les rendez-vous de counseling et les informations générales.',
    pt: 'Damos as boas-vindas às suas consultas sobre convites ministeriais, pedidos de oração, consultas de aconselhamento e informações gerais.',
    de: 'Wir begrüßen Ihre Anfragen bezüglich Dienst-Einladungen, Gebetsanliegen, Beratungsterminen und allgemeinen Informationen.',
    zh: '欢迎您就事工邀请、祷告请求、辅导预约和一般信息提出咨询。',
    ar: 'نرحب باستفساراتكم بخصوص دعوات الخدمة، طلبات الصلاة، مواعيد الاستشارة، والمعلومات العامة.',
  },
  quickContact: {
    en: 'Quick Contact',
    es: 'Contacto Rápido',
    fr: 'Contact Rapide',
    pt: 'Contato Rápido',
    de: 'Schneller Kontakt',
    zh: '快速联系',
    ar: 'اتصال سريع',
  },
  appointment: {
    title: {
      en: 'Book an Appointment',
      es: 'Reservar una Cita',
      fr: 'Réserver un Rendez-vous',
      pt: 'Agendar uma Consulta',
      de: 'Termin Buchen',
      zh: '预约',
      ar: 'حجز موعد',
    },
    subtitle: {
      en: 'Schedule a meeting with Apostle Isaac for ministry consultation, prayer, or prophetic guidance.',
      es: 'Programar una reunión con el Apóstol Isaac para consulta ministerial, oración o guía profética.',
      fr: 'Planifier une réunion avec l\'Apôtre Isaac pour consultation ministérielle, prière ou guidance prophétique.',
      pt: 'Agendar uma reunião com o Apóstolo Isaac para consulta ministerial, oração ou orientação profética.',
      de: 'Ein Treffen mit Apostel Isaac für Ministeriumsberatung, Gebet oder prophetische Führung planen.',
      zh: '预约与以撒使徒会面，进行事工咨询、祷告或先知性引导。',
      ar: 'جدولة اجتماع مع الرسول إسحاق للاستشارة الوزارية أو الصلاة أو التوجيه النبوي.',
    },
    button: {
      en: 'Book Appointment Now',
      es: 'Reservar Cita Ahora',
      fr: 'Réserver Maintenant',
      pt: 'Agendar Agora',
      de: 'Jetzt Buchen',
      zh: '立即预约',
      ar: 'احجز الآن',
    },
  },
  whatsapp: {
    en: 'WhatsApp',
    es: 'WhatsApp',
    fr: 'WhatsApp',
    pt: 'WhatsApp',
    de: 'WhatsApp',
    zh: 'WhatsApp',
    ar: 'واتساب',
  },
  phone: {
    en: 'Phone',
    es: 'Teléfono',
    fr: 'Téléphone',
    pt: 'Telefone',
    de: 'Telefon',
    zh: '电话',
    ar: 'الهاتف',
  },
  form: {
    en: 'Send a Message',
    es: 'Enviar un Mensaje',
    fr: 'Envoyer un Message',
    pt: 'Enviar uma Mensagem',
    de: 'Nachricht Senden',
    zh: '发送信息',
    ar: 'إرسال رسالة',
  },
  name: {
    en: 'Full Name',
    es: 'Nombre Completo',
    fr: 'Nom Complet',
    pt: 'Nome Completo',
    de: 'Vollständiger Name',
    zh: '全名',
    ar: 'الاسم الكامل',
  },
  country: {
    en: 'Country',
    es: 'País',
    fr: 'Pays',
    pt: 'País',
    de: 'Land',
    zh: '国家',
    ar: 'البلد',
  },
  purpose: {
    en: 'Purpose of Contact',
    es: 'Propósito del Contacto',
    fr: 'But du Contact',
    pt: 'Propósito do Contato',
    de: 'Kontaktzweck',
    zh: '联系目的',
    ar: 'غرض الاتصال',
  },
  purposes: {
    en: ['Prayer Request', 'Counseling Appointment', 'Ministry Invitation', 'General Inquiry'],
    es: ['Petición de Oración', 'Cita de Consejería', 'Invitación Ministerial', 'Consulta General'],
    fr: ['Demande de Prière', 'Rendez-vous de Counseling', 'Invitation Ministériel', 'Demande Générale'],
    pt: ['Pedido de Oração', 'Consulta de Aconselhamento', 'Convite Ministerial', 'Consulta Geral'],
    de: ['Gebetsanliegen', 'Beratungstermin', 'Dienst-Einladung', 'Allgemeine Anfrage'],
    zh: ['祷告请求', '辅导预约', '事工邀请', '一般咨询'],
    ar: ['طلب صلاة', 'موعد استشارة', 'دعوة خدمة', 'استفسار عام'],
  },
  message: {
    en: 'Message',
    es: 'Mensaje',
    fr: 'Message',
    pt: 'Mensagem',
    de: 'Nachricht',
    zh: '信息',
    ar: 'الرسالة',
  },
  send: {
    en: 'Send Message',
    es: 'Enviar Mensaje',
    fr: 'Envoyer le Message',
    pt: 'Enviar Mensagem',
    de: 'Nachricht Senden',
    zh: '发送信息',
    ar: 'إرسال الرسالة',
  },
  success: {
    en: 'Message sent successfully!',
    es: '¡Mensaje enviado con éxito!',
    fr: 'Message envoyé avec succès!',
    pt: 'Mensagem enviada com sucesso!',
    de: 'Nachricht erfolgreich gesendet!',
    zh: '信息发送成功！',
    ar: 'تم إرسال الرسالة بنجاح!',
  },
  officeHours: {
    en: 'Office Hours',
    es: 'Horario de Oficina',
    fr: 'Heures de Bureau',
    pt: 'Horário de Escritório',
    de: 'Bürozeiten',
    zh: '办公时间',
    ar: 'ساعات العمل',
  },
  hours: {
    en: 'Mon - Fri: 9:00 AM - 5:00 PM',
    es: 'Lun - Vie: 9:00 AM - 5:00 PM',
    fr: 'Lun - Ven: 9:00 AM - 5:00 PM',
    pt: 'Seg - Sex: 9:00 AM - 5:00 PM',
    de: 'Mo - Fr: 9:00 AM - 5:00 PM',
    zh: '周一至周五：上午9点 - 下午5点',
    ar: 'الاثنين - الجمعة: ٩:٠٠ ص - ٥:٠٠ م',
  },
};

export default function Contact({ currentLang, onOpenBooking }: ContactProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    purpose: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', country: '', purpose: '', message: '' });
  };

  const purposes = content.purposes[currentLang as keyof typeof content.purposes] || content.purposes.en;

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-br from-secondary/30 to-secondary/10">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 fade-element opacity-0">
          <span className="w-12 h-px bg-gold" />
          <span className="section-label">
            {content.sectionLabel[currentLang as keyof typeof content.sectionLabel] || content.sectionLabel.en}
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left - Appointment Booking (Featured) */}
          <div className="lg:col-span-1 fade-element opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="bg-navy text-white p-6 md:p-8 rounded-sm h-full flex flex-col">
              <div className="w-14 h-14 flex items-center justify-center bg-gold/20 rounded-sm mb-6">
                <Calendar className="w-7 h-7 text-gold" />
              </div>
              
              <h3 className="font-serif text-xl mb-3">
                {content.appointment.title[currentLang as keyof typeof content.appointment.title] || content.appointment.title.en}
              </h3>
              
              <p className="text-sm text-white/80 mb-6 leading-relaxed">
                {content.appointment.subtitle[currentLang as keyof typeof content.appointment.subtitle] || content.appointment.subtitle.en}
              </p>
              
              {onOpenBooking && (
                <button
                  onClick={onOpenBooking}
                  className="mt-auto w-full bg-gold text-navy py-3 px-6 text-sm font-medium hover:bg-gold-dark transition-colors rounded-sm"
                >
                  {content.appointment.button[currentLang as keyof typeof content.appointment.button] || content.appointment.button.en}
                </button>
              )}
            </div>
          </div>

          {/* Middle - Quick Contact */}
          <div className="fade-element opacity-0" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-serif text-xl text-navy mb-6">
              {content.quickContact[currentLang as keyof typeof content.quickContact] || content.quickContact.en}
            </h3>

            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/254723947514"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-sm border border-border/50 hover:shadow-editorial transition-shadow group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-sm">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/60">
                    {content.whatsapp[currentLang as keyof typeof content.whatsapp] || content.whatsapp.en}
                  </p>
                  <p className="font-medium text-navy group-hover:text-covenant transition-colors">
                    +254 723 947514
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+254723947514"
                className="flex items-center gap-4 p-4 bg-white rounded-sm border border-border/50 hover:shadow-editorial transition-shadow group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-navy/5 rounded-sm">
                  <Phone className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/60">
                    {content.phone[currentLang as keyof typeof content.phone] || content.phone.en}
                  </p>
                  <p className="font-medium text-navy group-hover:text-covenant transition-colors">
                    +254 723 947514
                  </p>
                </div>
              </a>

              {/* Office Hours */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-sm border border-border/50">
                <div className="w-12 h-12 flex items-center justify-center bg-navy/5 rounded-sm">
                  <Clock className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/60 mb-1">
                    {content.officeHours[currentLang as keyof typeof content.officeHours] || content.officeHours.en}
                  </p>
                  <p className="font-medium text-navy">
                    {content.hours[currentLang as keyof typeof content.hours] || content.hours.en}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="fade-element opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white p-6 md:p-8 rounded-sm border border-border/50">
              <h3 className="font-serif text-xl text-navy mb-6">
                {content.form[currentLang as keyof typeof content.form] || content.form.en}
              </h3>

              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-lg text-foreground">
                    {content.success[currentLang as keyof typeof content.success] || content.success.en}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-foreground/70 mb-2">
                      {content.name[currentLang as keyof typeof content.name] || content.name.en}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                      required
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm text-foreground/70 mb-2">
                      {content.country[currentLang as keyof typeof content.country] || content.country.en}
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                      required
                    />
                  </div>

                  {/* Purpose */}
                  <div>
                    <label className="block text-sm text-foreground/70 mb-2">
                      {content.purpose[currentLang as keyof typeof content.purpose] || content.purpose.en}
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
                      required
                    >
                      <option value="">{currentLang === 'en' ? 'Select purpose' : ''}</option>
                      {purposes.map((purpose, index) => (
                        <option key={index} value={purpose}>
                          {purpose}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm text-foreground/70 mb-2">
                      {content.message[currentLang as keyof typeof content.message] || content.message.en}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-none"
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {content.send[currentLang as keyof typeof content.send] || content.send.en}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
