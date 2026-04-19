import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Microscope, Handshake, ClipboardCheck } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const highlights = [
  'ISO 9001:2015 certified manufacturing plant',
  'Experienced team across Production, QC, QA & Operations',
  'International pharmaceutical standards compliance',
  'Integrated Non β-Lactam production facility',
  'State-of-the-art machinery and ultra-modern processes',
  'Wide range of Human & Veterinary formulations',
];

export default function AboutPreview() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className={`animate-on-scroll ${visible ? 'visible' : ''}`}>
            <p className="section-subtitle mb-3">Who We Are</p>
            <h2 className="section-title mb-6">
              A Legacy of{' '}
              <span className="gradient-text">Pharmaceutical</span>{' '}
              Excellence
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              MEDKING LIFESCIENCE is one of the most trusted pharmaceutical manufacturing plants in Kala Amb Industrial Area, Himachal Pradesh. With a highly experienced team in Production, QC, QA, and operations, we maintain the highest quality standards as per international pharmaceutical norms.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our integrated production facility produces Tablets, Capsules, Oral Liquids, and External preparations in both Human and Veterinary divisions — with dedicated Nutraceutical sections and extensive formulation capabilities.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-outline">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: Cards */}
          <div className={`grid grid-cols-2 gap-4 animate-on-scroll delay-200 ${visible ? 'visible' : ''}`}>
            {[
              { title: 'Quality First', desc: 'Every product meets rigorous ISO & GMP standards before reaching customers.', icon: Award, bg: 'bg-teal-600' },
              { title: 'Innovation', desc: 'Continuously adopting cutting-edge technology for superior formulations.', icon: Microscope, bg: 'bg-navy-800' },
              { title: 'Reliability', desc: '7+ years of consistent quality and on-time delivery to 500+ clients.', icon: Handshake, bg: 'bg-navy-800' },
              { title: 'Compliance', desc: 'Strict adherence to GMP, GLP, and all national & international standards.', icon: ClipboardCheck, bg: 'bg-teal-600' },
            ].map(({ title, desc, icon: Icon, bg }) => (
              <div key={title} className={`${bg} rounded-2xl p-6 text-white group`}>
                <div className="mb-4 text-white/90 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
