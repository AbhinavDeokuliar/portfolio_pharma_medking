import { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/layout/PageHero';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEOHead from '../components/common/SEOHead';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Plant Address',
    lines: [
      'VILL- OGLI, SUKETI ROAD, KALA AMB,',
      'Dist.: Sirmour, Himachal Pradesh',
      '– 173 030, INDIA',
    ],
    color: 'bg-teal-50 text-teal-700',
    iconBg: 'bg-teal-600',
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91-70043-69887'],
    href: 'tel:+917004369887',
    color: 'bg-blue-50 text-blue-700',
    iconBg: 'bg-blue-600',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['medkinglifescience@gmail.com'],
    href: 'mailto:medkinglifescience@gmail.com',
    color: 'bg-emerald-50 text-emerald-700',
    iconBg: 'bg-emerald-600',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
    color: 'bg-amber-50 text-amber-700',
    iconBg: 'bg-amber-600',
  },
];

const initialForm = { name: '', email: '', phone: '', company: '', subject: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');
  const { ref, visible } = useScrollAnimation();
  const contactEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactEndpoint) {
      setStatus('error');
      setError('Form submission is temporarily unavailable. Please contact us by phone or email.');
      return;
    }

    setStatus('loading');
    setError('');
    try {
      await axios.post(contactEndpoint, form, {
        headers: { 'Content-Type': 'application/json' },
      });
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
      setError('Unable to send your message right now. Please try again or use phone/email.');
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Medking Lifescience for pharmaceutical manufacturing enquiries, third-party manufacturing partnerships, or product information. Located in Kala Amb, Himachal Pradesh, India."
        keywords="contact Medking Lifescience, pharma manufacturing enquiry, third party manufacturing contact, pharmaceutical partnership India, Kala Amb pharma contact, medkinglifescience@gmail.com"
        canonical="/contact"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.medkinglifescience.in/contact",
          "name": "Medking Lifescience",
          "image": "https://www.medkinglifescience.in/logo.png",
          "description": "Pharmaceutical Manufacturing Plant - Contact & Business Inquiries",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vill- Ogli, Suketi Road",
            "addressLocality": "Kala Amb",
            "addressRegion": "Himachal Pradesh",
            "postalCode": "173030",
            "addressCountry": "IN"
          },
          "telephone": "+91-70043-69887",
          "email": "medkinglifescience@gmail.com",
          "url": "https://www.medkinglifescience.in/contact",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "00:00",
              "closes": "00:00"
            }
          ]
        })}</script>
      </Helmet>
      <PageHero
        subtitle="Get In Touch"
        title="Contact Us"
        breadcrumbs={[{ label: 'Contact' }]}
        description="Reach out for business enquiries, partnership opportunities, or any questions about our pharmaceutical products and manufacturing services."
      />

      <section className="py-24 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact Info */}
            <div className={`animate-on-scroll ${visible ? 'visible' : ''}`}>
              <p className="section-subtitle mb-3">Reach Us</p>
              <h2 className="section-title mb-6">We'd Love to <span className="gradient-text">Hear From You</span></h2>
              <p className="text-slate-600 leading-relaxed mb-10">
                Whether you're a healthcare professional, business partner, or looking for third-party manufacturing services — our team is ready to assist you.
              </p>

              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, title, lines, href, iconBg }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">{title}</h4>
                      {lines.map((line, i) =>
                        href && i === 0 ? (
                          <a key={i} href={href} className="block text-slate-600 hover:text-teal-600 transition-colors text-sm">
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-slate-600 text-sm">{line}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-slate-200 h-56 bg-slate-100 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <MapPin size={40} className="mx-auto mb-3 text-teal-500" />
                  <p className="font-semibold">Kala Amb Industrial Area</p>
                  <p className="text-sm">Himachal Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`animate-on-scroll delay-200 ${visible ? 'visible' : ''}`}>
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-teal-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-500 mb-8 max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="btn-primary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="card p-8">
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                        <input name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className="input-field" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className="input-field" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="input-field" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Company / Organization</label>
                        <input name="company" value={form.company} onChange={handleChange} placeholder="Your company name" className="input-field" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject *</label>
                      <select name="subject" required value={form.subject} onChange={handleChange} className="input-field">
                        <option value="">Select a subject</option>
                        <option>Third-Party Manufacturing Enquiry</option>
                        <option>Product Information Request</option>
                        <option>Business Partnership</option>
                        <option>Quality & Compliance</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                      <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us how we can help you..." className="input-field resize-none" />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <>Send Message <Send size={16} /></>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
