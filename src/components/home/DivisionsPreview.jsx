import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { divisions } from '../../data/divisions';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import LucideIcon from '../common/LucideIcon';

export default function DivisionsPreview() {
  const { ref, visible } = useScrollAnimation();
  const liveDivisionCount = divisions.filter((div) => div.isDataAvailable).length;

  return (
    <section className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 animate-on-scroll ${visible ? 'visible' : ''}`}>
          <p className="section-subtitle mb-3">Our Business Units</p>
          <h2 className="section-title mb-4">Product Divisions</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            {liveDivisionCount} divisions currently have live product data. Additional division portfolios are being prepared for publication.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {divisions.map((div, i) => (
            <Link
              key={div.slug}
              to={`/divisions/${div.slug}`}
              className={`card card-hover p-6 flex flex-col group animate-on-scroll delay-${Math.min(i * 100, 500)} ${visible ? 'visible' : ''}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${div.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300 text-white`}>
                <LucideIcon name={div.icon} size={28} />
              </div>

              <h3 className="font-display font-bold text-navy-900 text-base mb-2">{div.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">{div.tagline}</p>

              {!div.isDataAvailable && (
                <p className="mt-3 text-[11px] font-semibold text-amber-700">
                  To get details for this, contact us
                </p>
              )}

              <div className={`mt-4 flex items-center gap-1 text-sm font-semibold ${div.textColor} group-hover:gap-3 transition-all duration-200`}>
                View Division <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 animate-on-scroll delay-300 ${visible ? 'visible' : ''}`}>
          <Link to="/divisions" className="btn-outline">
            View All Divisions <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
