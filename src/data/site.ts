/**
 * Single source of truth for Menorah Faith Chapel contact, leader and social
 * details. Edit here; sections read from this. TODO markers = awaiting owner.
 */
export const site = {
  name: 'Menorah Faith Chapel',
  tagline: 'A Light Unto the Nations',

  leader: {
    name: 'Apostle Isaack Muriungi',
    title: 'Senior Pastor & Prophet',
  },

  // Verified
  phone: '+254 723 947514',
  whatsapp: '254723947514',
  location: {
    label: 'Ngong, Embulbul',
    mapUrl: 'https://maps.app.goo.gl/7Y2NasaMrH7YJztm6',
  },

  // TODO(owner): confirm official email + physical address line
  email: 'info@menorahfaith.org',

  socials: {
    facebook: 'https://web.facebook.com/ProphetIsaack/',
    // Room to grow when the owner shares more handles:
    // youtube: '', instagram: '', tiktok: '', whatsappChannel: '',
  },
} as const;

/** wa.me deep link with an optional prefilled message. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
