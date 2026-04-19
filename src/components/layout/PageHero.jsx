import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, subtitle, breadcrumbs = [], description }) {
  return (
    <section className="page-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-900/20 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
            <Link to="/" className="hover:text-teal-300 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-teal-300 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/90">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {subtitle && (
          <p className="section-subtitle text-teal-300 mb-3">{subtitle}</p>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
