import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import { divisions } from '../data/divisions';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CTABanner from '../components/home/CTABanner';
import LucideIcon from '../components/common/LucideIcon';
import SEOHead from '../components/common/SEOHead';

export default function DivisionsPage() {
  const { ref, visible } = useScrollAnimation();
  const liveDivisionCount = divisions.filter((div) => div.isDataAvailable).length;

  return (
    <>
      <SEOHead
        title="Our Divisions"
        description="Explore Medking Lifescience's pharmaceutical divisions — Devchem Biotech and Medking Pharma. Specializing in antibiotics, cardiology, gynaecology, nutraceuticals, veterinary medicines & more."
        keywords="Devchem Biotech, Medking Pharma, pharmaceutical divisions India, pharma business divisions, antibiotic manufacturer, nutraceutical division, veterinary pharmaceutical manufacturer"
        canonical="/divisions"
      />
      <PageHero
        subtitle="Business Units"
        title="Our Product Divisions"
        breadcrumbs={[{ label: 'Divisions' }]}
        description={`${liveDivisionCount} divisions currently have published product data. Remaining division portfolios are being updated.`}
      />

      <section className="py-24 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {divisions.map((div, i) => (
              <div
                key={div.slug}
                className={`card card-hover p-8 flex gap-6 items-start animate-on-scroll delay-${Math.min(i * 100, 400)} ${visible ? 'visible' : ''}`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${div.color} flex items-center justify-center flex-shrink-0 shadow-lg text-white`}>
                  <LucideIcon name={div.icon} size={32} />
                </div>

                <div className="flex-1">
                  <h3 className="font-display font-bold text-navy-900 text-xl mb-1">{div.name}</h3>
                  <p className={`text-sm font-semibold mb-3 ${div.textColor}`}>{div.tagline}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{div.description}</p>

                  {!div.isDataAvailable && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-4">
                      <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 mt-1 hover:gap-2 transition-all">
                        To get details for this, contact us <ArrowRight size={12} />
                      </Link>
                    </div>
                  )}

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {div.specialties.map((s) => (
                      <span key={s} className={`px-3 py-1 rounded-full text-xs font-semibold border ${div.lightColor} ${div.textColor} ${div.borderColor}`}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/divisions/${div.slug}`}
                    className={`inline-flex items-center gap-2 text-sm font-bold ${div.textColor} hover:gap-4 transition-all duration-200`}
                  >
                    {div.isDataAvailable ? 'View Products' : 'View Details'} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
