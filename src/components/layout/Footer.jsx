import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { divisions } from '../../data/divisions';
import LucideIcon from '../common/LucideIcon';
import logo from '../../assets/logo.png';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Divisions', to: '/divisions' },
  { label: 'Manufacturing', to: '/manufacturing' },
  { label: 'Products', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-white">Ready to Partner With Us?</h3>
            <p className="text-teal-100 text-sm mt-1">Explore third-party manufacturing and business opportunities.</p>
          </div>
          <Link to="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors shadow-lg">
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300 w-fit">
                <img src={logo} alt="Medking Lifescience logo" className="h-10 w-auto" />
                <div className="border-l border-slate-200 pl-3">
                  <div className="font-display font-bold text-sm text-navy-900 leading-tight">Medking</div>
                  <div className="text-xs font-semibold text-teal-600 tracking-wide">Lifescience</div>
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              One of the most trusted pharmaceutical manufacturing plants in Kala Amb, Himachal Pradesh. ISO 9001:2015, GMP & GLP Certified.
            </p>
            <div className="flex items-center gap-3">
              {/* Social media links coming soon - create profiles and add URLs here */}
              {/* Example when profiles are active:
              <a href="https://www.facebook.com/medkinglifescience" target="_blank" rel="noopener noreferrer" aria-label="Medking Lifescience on Facebook" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-teal-600 flex items-center justify-center transition-colors duration-200 group">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="flex items-center gap-2 text-slate-400 hover:text-teal-400 text-sm transition-colors group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">Our Divisions</h4>
            <ul className="space-y-2.5">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link to={`/divisions/${d.slug}`} className="flex items-center gap-2 text-slate-400 hover:text-teal-400 text-sm transition-colors group">
                    <div className="text-teal-400 group-hover:scale-110 transition-transform duration-200">
                      <LucideIcon name={d.icon} size={14} />
                    </div>
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  VILL- OGLI, SUKETI ROAD, KALA AMB,<br />
                  Dist.: Sirmour, Himachal Pradesh<br />
                  – 173 030, INDIA
                </span>
              </li>
              <li>
                <a href="tel:+917004369887" className="flex items-center gap-3 text-slate-400 hover:text-teal-400 text-sm transition-colors">
                  <Phone size={16} className="text-teal-400 flex-shrink-0" />
                  +91-70043-69887
                </a>
              </li>
              <li>
                <a href="mailto:medkinglifecare@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-teal-400 text-sm transition-colors break-all">
                  <Mail size={16} className="text-teal-400 flex-shrink-0" />
                  medkinglifecare@gmail.com
                </a>
              </li>
            </ul>
            {/* Certifications */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['ISO 9001:2015', 'GMP', 'GLP'].map((cert) => (
                <span key={cert} className="px-3 py-1 rounded-full bg-teal-900/60 text-teal-300 text-xs font-semibold border border-teal-700">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Medking Lifescience. All rights reserved.</p>
          <p>Kala Amb Industrial Area, Himachal Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
}
