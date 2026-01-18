import { useState } from 'react';
import { Calendar, Clock, User, MessageSquare, Send, Check, X } from 'lucide-react';

interface AppointmentBookingProps {
  currentLang: string;
  onClose: () => void;
}

const content = {
  title: {
    en: 'Book an Appointment with Apostle Isaac',
    es: 'Reservar una Cita con el Apóstol Isaac',
    fr: 'Réserver un Rendez-vous avec l\'Apôtre Isaac',
    pt: 'Agendar uma Consulta com o Apóstolo Isaac',
    de: 'Termin mit Apostel Isaac Buchen',
    zh: '预约与以撒使徒会面',
    ar: 'حجز موعد مع الرسول إسحاق',
  },
  subtitle: {
    en: 'Select your preferred date and time for ministry consultation, prayer, or counseling.',
    es: 'Seleccione su fecha y hora preferidas para consulta ministerial, oración o consejería.',
    fr: 'Sélectionnez votre date et heure préférées pour la consultation ministérielle, la prière ou le counseling.',
    pt: 'Selecione sua data e hora preferidas para consulta ministerial, oração ou aconselhamento.',
    de: 'Wählen Sie Ihr bevorzugtes Datum und Ihre bevorzugte Uhrzeit für Ministeriumsberatung, Gebet oder Counseling.',
    zh: '选择您喜欢的日期和时间进行事工咨询、祷告或辅导。',
    ar: 'اختر التاريخ والوقت المفضلين للاستشارة الوزارية أو الصلاة أو الاستشارة.',
  },
  name: {
    en: 'Your Name',
    es: 'Su Nombre',
    fr: 'Votre Nom',
    pt: 'Seu Nome',
    de: 'Ihr Name',
    zh: '您的姓名',
    ar: 'اسمك',
  },
  purpose: {
    en: 'Purpose of Appointment',
    es: 'Propósito de la Cita',
    fr: 'But du Rendez-vous',
    pt: 'Propósito da Consulta',
    de: 'Zweck des Termins',
    zh: '预约目的',
    ar: 'غرض الموعد',
  },
  purposes: {
    en: ['Ministry Consultation', 'Prayer & Counseling', 'Prophetic Guidance', 'General Meeting'],
    es: ['Consulta Ministerial', 'Oración y Consejería', 'Guía Profética', 'Reunión General'],
    fr: ['Consultation Ministérielle', 'Prière et Counseling', 'Guidance Prophétique', 'Réunion Générale'],
    pt: ['Consulta Ministerial', 'Oração e Aconselhamento', 'Orientação Profética', 'Reunião Geral'],
    de: ['Ministeriumsberatung', 'Gebet und Counseling', 'Prophetische Führung', 'Allgemeines Treffen'],
    zh: ['事工咨询', '祷告与辅导', '先知性引导', '一般会面'],
    ar: ['استشارة وزارية', 'صلاة واستشارة', 'توجيه نبوي', 'اجتماع عام'],
  },
  date: {
    en: 'Select Date',
    es: 'Seleccionar Fecha',
    fr: 'Sélectionner la Date',
    pt: 'Selecionar Data',
    de: 'Datum Auswählen',
    zh: '选择日期',
    ar: 'اختر التاريخ',
  },
  time: {
    en: 'Select Time',
    es: 'Seleccionar Hora',
    fr: 'Sélectionner l\'Heure',
    pt: 'Selecionar Hora',
    de: 'Uhrzeit Auswählen',
    zh: '选择时间',
    ar: 'اختر الوقت',
  },
  message: {
    en: 'Additional Message (Optional)',
    es: 'Mensaje Adicional (Opcional)',
    fr: 'Message Supplémentaire (Optionnel)',
    pt: 'Mensagem Adicional (Opcional)',
    de: 'Zusätzliche Nachricht (Optional)',
    zh: '附加信息（可选）',
    ar: 'رسالة إضافية (اختياري)',
  },
  book: {
    en: 'Book via WhatsApp',
    es: 'Reservar via WhatsApp',
    fr: 'Réserver via WhatsApp',
    pt: 'Reservar via WhatsApp',
    de: 'Über WhatsApp Buchen',
    zh: '通过 WhatsApp 预约',
    ar: 'حجز عبر واتساب',
  },
  success: {
    en: 'Opening WhatsApp...',
    es: 'Abriendo WhatsApp...',
    fr: 'Ouverture de WhatsApp...',
    pt: 'Abrindo WhatsApp...',
    de: 'WhatsApp wird geöffnet...',
    zh: '正在打开 WhatsApp...',
    ar: 'جاري فتح واتساب...',
  },
};

const availableDates = [
  '2026-01-20', '2026-01-21', '2026-01-22', '2026-01-23', '2026-01-24',
  '2026-01-27', '2026-01-28', '2026-01-29', '2026-01-30', '2026-01-31',
];

const availableTimes = [
  '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

export default function AppointmentBooking({ currentLang, onClose }: AppointmentBookingProps) {
  const [formData, setFormData] = useState({
    name: '',
    purpose: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const purposes = content.purposes[currentLang as keyof typeof content.purposes] || content.purposes.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.date || !formData.time) return;

    setIsSubmitting(true);

    // Format the date
    const dateObj = new Date(formData.date);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Create WhatsApp message
    const whatsappMessage = `Hello Apostle Isaac,\n\n` +
      `I would like to book an appointment with you:\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Purpose:* ${formData.purpose || 'Not specified'}\n` +
      `*Preferred Date:* ${formattedDate}\n` +
      `*Preferred Time:* ${formData.time}\n` +
      `${formData.message ? `*Message:* ${formData.message}` : ''}\n\n` +
      `Thank you and God bless!`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/254723947514?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-sm shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border/50">
          <div>
            <h3 className="font-serif text-lg text-navy">
              {content.title[currentLang as keyof typeof content.title] || content.title.en}
            </h3>
            <p className="text-xs text-foreground/60 mt-1">
              {content.subtitle[currentLang as keyof typeof content.subtitle] || content.subtitle.en}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5 text-foreground/60" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm text-foreground/70 mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              {content.name[currentLang as keyof typeof content.name] || content.name.en}
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
              placeholder={currentLang === 'en' ? 'Enter your name' : ''}
              required
            />
          </div>

          {/* Purpose */}
          <div>
            <label className="block text-sm text-foreground/70 mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              {content.purpose[currentLang as keyof typeof content.purpose] || content.purpose.en}
            </label>
            <select
              value={formData.purpose}
              onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
            >
              <option value="">{currentLang === 'en' ? 'Select purpose' : ''}</option>
              {purposes.map((purpose, index) => (
                <option key={index} value={purpose}>
                  {purpose}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm text-foreground/70 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {content.date[currentLang as keyof typeof content.date] || content.date.en}
            </label>
            <select
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
              required
            >
              <option value="">{currentLang === 'en' ? 'Select date' : ''}</option>
              {availableDates.map((date, index) => {
                const dateObj = new Date(date);
                const formatted = dateObj.toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                });
                return (
                  <option key={index} value={date}>
                    {formatted}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm text-foreground/70 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {content.time[currentLang as keyof typeof content.time] || content.time.en}
            </label>
            <select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
              required
            >
              <option value="">{currentLang === 'en' ? 'Select time' : ''}</option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
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
              rows={3}
              className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-none"
              placeholder={currentLang === 'en' ? 'Any additional details...' : ''}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Check className="w-4 h-4" />
                {content.success[currentLang as keyof typeof content.success] || content.success.en}
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {content.book[currentLang as keyof typeof content.book] || content.book.en}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
