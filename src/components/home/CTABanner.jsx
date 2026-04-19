import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-teal-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-subtitle text-teal-400 mb-4">Business Partnership</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Partner With<br />
          <span className="gradient-text">Medking Lifescience?</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          We offer specialized expertise, flexible production levels, and cost-effective manufacturing solutions. Join 500+ satisfied business partners across India.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Start a Conversation <ArrowRight size={18} />
          </Link>
          <Link to="/manufacturing" className="btn-secondary text-base px-8 py-4">
            View Our Capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
