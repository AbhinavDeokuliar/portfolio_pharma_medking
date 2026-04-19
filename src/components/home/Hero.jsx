import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Shield, Award, Microscope } from 'lucide-react';
import logo from '../../assets/logo.png';

const badges = [
  { icon: Shield, label: 'ISO 9001:2015' },
  { icon: Award, label: 'GMP Certified' },
  { icon: Microscope, label: 'GLP Certified' },
];

export default function Hero() {
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-mesh">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal-900/30 blur-3xl" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="max-w-3xl">
          <div className="mb-8 scale-110 origin-left animate-fade-in">
            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 inline-flex items-center gap-4">
              <img src={logo} alt="Medking Lifescience logo" className="h-12 w-auto" />
              <div className="hidden sm:block border-l border-white/20 pl-4">
                <div className="font-display font-bold text-xl text-navy-900 leading-tight">Medking</div>
                <div className="text-sm font-semibold text-teal-600 tracking-wide">Lifescience</div>
              </div>
            </div>
          </div>

          {/* Subtitle pill */}
          <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-300 text-sm font-semibold tracking-wide">7+ Years of Pharmaceutical Excellence</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Trusted{' '}
            <span className="gradient-text">Pharma</span>
            <br />Manufacturing
            <br className="hidden md:block" />
            <span className="text-teal-400"> Excellence</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Medking Lifescience is one of India's most trusted pharmaceutical manufacturing plants — ISO 9001:2015, GMP & GLP Certified — producing 500+ formulations for human and veterinary healthcare.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/divisions" className="btn-primary text-base px-8 py-4">
              Explore Divisions <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary text-base px-8 py-4">
              Partner With Us
            </Link>
          </div>

          {/* Certification badges */}
          <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Icon size={14} className="text-teal-400" />
                <span className="text-white/90 text-xs font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating stats card */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 animate-float">
          <div className="glass rounded-2xl p-6 space-y-4 w-56">
            {[
              { value: '7+', label: 'Years Experience' },
              { value: '500+', label: 'Trusted Clients' },
              { value: '500+', label: 'Formulations' },
              { value: '8', label: 'Divisions' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl font-bold text-teal-400">{value}</div>
                <div className="text-white/60 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
