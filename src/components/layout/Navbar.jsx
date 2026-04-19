import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { divisions } from '../../data/divisions';
import LucideIcon from '../common/LucideIcon';
import logo from '../../assets/logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Divisions', to: '/divisions', hasMega: true },
  { label: 'Manufacturing', to: '/manufacturing' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divOpen, setDivOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50' : 'bg-transparent'
      }`}>
      {/* Top bar */}
      <div className={`border-b transition-all duration-300 ${scrolled ? 'border-slate-100' : 'border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-end items-center gap-6 py-1.5 text-xs font-medium transition-colors duration-300 ${scrolled ? 'text-slate-500' : 'text-white/80'
            }`}>
            <a href="tel:+917004369887" className="flex items-center gap-1.5 hover:text-teal-500 transition-colors">
              <Phone size={12} />+91-70043-69887
            </a>
            <span className="hidden sm:block">|</span>
            <a href="mailto:medkinglifescience@gmail.com" className="hidden sm:block hover:text-teal-500 transition-colors">
              medkinglifescience@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group gap-2">
            <div className={`bg-white p-2 rounded-xl shadow-sm border border-slate-100 transition-all duration-300 group-hover:shadow-md ${scrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-sm'
              }`}>
              <img
                src={logo}
                alt="Medking Lifescience logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <div className={`font-display font-bold text-lg transition-colors duration-300 ${scrolled ? 'text-navy-900' : 'text-white'
                }`}>Medking</div>
              <div className={`text-xs font-medium tracking-widest transition-colors duration-300 ${scrolled ? 'text-teal-600' : 'text-teal-300'
                }`}>Lifescience</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div key={link.label} className="relative" onMouseEnter={() => setDivOpen(true)} onMouseLeave={() => setDivOpen(false)}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                        ? scrolled ? 'bg-teal-50 text-teal-700' : 'bg-white/15 text-white'
                        : scrolled ? 'text-slate-600 hover:bg-slate-50 hover:text-teal-600' : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${divOpen ? 'rotate-180' : ''}`} />
                  </NavLink>
                  {/* Dropdown */}
                  <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${divOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-3 w-56">
                      {divisions.map((d) => (
                        <Link
                          key={d.slug}
                          to={`/divisions/${d.slug}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-teal-50 text-slate-700 hover:text-teal-700 text-sm font-medium transition-all duration-150 group"
                        >
                          <div className="text-teal-600 group-hover:scale-110 transition-transform duration-200">
                            <LucideIcon name={d.icon} size={18} />
                          </div>
                          <span>{d.name}</span>
                        </Link>
                      ))}
                      <div className="border-t border-slate-100 mt-2 pt-2">
                        <Link to="/divisions" className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors">
                          View All Divisions
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                      ? scrolled ? 'bg-teal-50 text-teal-700' : 'bg-white/15 text-white'
                      : scrolled ? 'text-slate-600 hover:bg-slate-50 hover:text-teal-600' : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
            <Link to="/contact" className="ml-2 btn-primary text-sm px-5 py-2.5">
              Get Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-slate-100 mt-2">
            <p className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Our Divisions</p>
            {divisions.map((d) => (
              <NavLink
                key={d.slug}
                to={`/divisions/${d.slug}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors"
              >
                <div className="text-teal-600">
                  <LucideIcon name={d.icon} size={18} />
                </div>
                <span>{d.name}</span>
              </NavLink>
            ))}
          </div>
          <div className="mt-4 px-4">
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center text-sm py-4">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
