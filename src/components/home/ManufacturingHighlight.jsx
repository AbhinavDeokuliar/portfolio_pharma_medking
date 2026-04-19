import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Factory } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const capabilities = [
  'Tablets (Plain, Film-Coated, Enteric-Coated, SR)',
  'Hard & Soft Gelatin Capsules',
  'Oral Liquids (Syrups & Suspensions)',
  'External Preparations (Ointments & Gels)',
  'Veterinary Formulations',
  'Nutraceutical Products',
];

export default function ManufacturingHighlight() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className={`relative animate-on-scroll ${visible ? 'visible' : ''}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/20">
              <img
                src="/assets/mfg.png"
                alt="Medking Lifescience Manufacturing Plant in Kala Amb, Himachal Pradesh - State-of-the-Art Pharmaceutical Facility"
                loading="lazy"
                width={1200}
                height={630}
                className="w-full h-[420px] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-[420px] bg-gradient-to-br from-teal-800 to-navy-900 items-center justify-center">
                <div className="text-center text-white">
                  <div className="mb-4 flex justify-center text-white/50">
                    <Factory size={80} strokeWidth={1} />
                  </div>
                  <p className="font-display font-bold text-xl">State-of-the-Art Facility</p>
                </div>
              </div>

              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0">
                      <Factory size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Kala Amb, Himachal Pradesh</div>
                      <div className="text-white/70 text-xs">VILL- OGLI, SUKETI ROAD, 173 030</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification badges */}
            <div className="absolute -top-4 -right-4 flex flex-col gap-2">
              {['ISO 9001:2015', 'GMP', 'GLP'].map((cert) => (
                <div key={cert} className="bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className={`animate-on-scroll delay-200 ${visible ? 'visible' : ''}`}>
            <p className="section-subtitle mb-3">Our Facility</p>
            <h2 className="section-title mb-6">
              World-Class{' '}
              <span className="gradient-text">Manufacturing</span>{' '}
              Unit
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our state-of-the-art manufacturing plant in Kala Amb Industrial Area is equipped with ultra-modern machinery for Non β-Lactam (Biological & Non-Biological) production sections. The facility operates under strict GMP guidelines with a dedicated quality control infrastructure.
            </p>

            <div className="mb-8">
              <h4 className="font-display font-semibold text-navy-800 mb-4">Production Capabilities</h4>
              <ul className="space-y-2.5">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-teal-600 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/manufacturing" className="btn-primary">
              Explore Our Plant <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
