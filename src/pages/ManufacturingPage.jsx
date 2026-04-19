import { CheckCircle2, Factory, Pill, Container, TestTube, Droplets, PawPrint, Leaf } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CTABanner from '../components/home/CTABanner';
import LucideIcon from '../components/common/LucideIcon';
import SEOHead from '../components/common/SEOHead';

const capabilities = [
  { name: 'Tablets', icon: 'Pill', desc: 'Plain, film-coated, enteric-coated, sustained & extended-release tablets using advanced compression technology.' },
  { name: 'Capsules', icon: 'Container', desc: 'Hard gelatin and HPMC vegetarian capsules, including soft-gel formulations with precision fill weights.' },
  { name: 'Oral Liquids', icon: 'TestTube', desc: 'Syrups, suspensions, solutions, and oral drops manufactured in dedicated liquid production suites.' },
  { name: 'Ointments & Gels', icon: 'Droplets', desc: 'Topical creams, ointments, gels, and lotions produced in separate external preparation sections.' },
  { name: 'Veterinary Products', icon: 'PawPrint', desc: 'Dedicated veterinary division manufacturing boluses, injections, suspensions, and oral liquids for animal health.' },
  { name: 'Nutraceuticals', icon: 'Leaf', desc: 'Health supplements including softgels, effervescents, sachets, and nutraceutical tablets in a separate clean section.' },
];

const infrastructure = [
  'Separate sections for Non β-Lactam formulations',
  'Dedicated Biological & Non-Biological production areas',
  'State-of-the-art tablet compression machines',
  'Automated capsule filling and banding equipment',
  'High-speed blister packaging lines',
  'In-process quality control laboratories',
  'Environmental monitoring systems',
  'Validated water purification systems (WFI, purified water)',
  'HVAC systems with temperature & humidity control',
  'Dedicated nutraceutical manufacturing section',
];

export default function ManufacturingPage() {
  const { ref: refMain, visible: visMain } = useScrollAnimation();
  const { ref: refCap, visible: visCap } = useScrollAnimation();
  const { ref: refInfra, visible: visInfra } = useScrollAnimation();

  return (
    <>
      <SEOHead
        title="Manufacturing Facility"
        description="World-class pharmaceutical manufacturing plant in Kala Amb, Himachal Pradesh. GMP & ISO 9001:2015 certified facility producing tablets, capsules, oral liquids, ointments, veterinary products & nutraceuticals."
        keywords="pharmaceutical manufacturing plant, GMP certified facility, ISO 9001 pharma plant, tablet manufacturing India, capsule manufacturing, third party pharma manufacturing, contract manufacturing Himachal Pradesh, Kala Amb pharmaceutical plant"
        canonical="/manufacturing"
      />
      <PageHero
        subtitle="Our Facility"
        title="World-Class Manufacturing"
        breadcrumbs={[{ label: 'Manufacturing' }]}
        description="A state-of-the-art pharmaceutical manufacturing plant in Kala Amb, Himachal Pradesh — built for quality, scale, and compliance."
      />

      {/* Plant Overview */}
      <section className="py-24 bg-white" ref={refMain}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`relative animate-on-scroll ${visMain ? 'visible' : ''}`}>
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/20">
                <img
                  src="/assets/mfg.png"
                  alt="Medking Lifescience Manufacturing Plant in Kala Amb, Himachal Pradesh - GMP Certified Pharmaceutical Facility"
                  loading="lazy"
                  width={1200}
                  height={640}
                  className="w-full h-[480px] object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-[480px] bg-gradient-to-br from-teal-800 to-navy-900 items-center justify-center">
                  <div className="text-center text-white/50">
                    <div className="flex justify-center mb-4 text-white/50">
                      <Factory size={100} strokeWidth={1} />
                    </div>
                    <p className="font-display font-bold text-2xl text-white">Medking Manufacturing Facility</p>
                    <p className="text-white/60 mt-2">Kala Amb, Himachal Pradesh</p>
                  </div>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-6 right-6">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: '500+', label: 'Products' },
                    { value: '7+', label: 'Years' },
                    { value: '3', label: 'Certifications' },
                  ].map(({ value, label }) => (
                    <div key={label}>
                      <div className="font-display font-bold text-2xl text-teal-600">{value}</div>
                      <div className="text-slate-500 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`animate-on-scroll delay-200 ${visMain ? 'visible' : ''} mt-8 lg:mt-0`}>
              <p className="section-subtitle mb-3">Our Plant</p>
              <h2 className="section-title mb-6">
                Integrated <span className="gradient-text">Production</span> Facility
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Our manufacturing complex in the Kala Amb Industrial Area, Himachal Pradesh, spans a modern infrastructure designed for high-volume, multi-product pharmaceutical manufacturing. The plant operates with stringent quality standards as required by GMP and ISO 9001:2015.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                The facility includes dedicated production sections for Non β-Lactam formulations in both Biological and Non-Biological categories, with separate sections for Human pharmaceuticals, Veterinary products, and Nutraceuticals — ensuring absolute zero cross-contamination.
              </p>
              <div className="flex flex-wrap gap-3">
                {['ISO 9001:2015', 'GMP Certified', 'GLP Certified', 'Non β-Lactam', 'PAN India Supply'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-teal-50 text-teal-700 border border-teal-200 rounded-full text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-slate-50" ref={refCap}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 animate-on-scroll ${visCap ? 'visible' : ''}`}>
            <p className="section-subtitle mb-3">What We Produce</p>
            <h2 className="section-title mb-4">Production Capabilities</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Comprehensive manufacturing capabilities across all major pharmaceutical dosage forms — human and veterinary.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ name, icon, desc }, i) => (
              <div key={name} className={`card card-hover p-7 animate-on-scroll delay-${Math.min(i * 100, 400)} ${visCap ? 'visible' : ''}`}>
                <div className="w-14 h-14 rounded-2xl bg-teal-600 flex items-center justify-center text-white mb-5 shadow-lg shadow-teal-600/20">
                  <LucideIcon name={icon} size={30} />
                </div>
                <h3 className="font-display font-bold text-navy-900 text-lg mb-2">{name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-teal-900" ref={refInfra}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 animate-on-scroll ${visInfra ? 'visible' : ''}`}>
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Infrastructure</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">State-of-the-Art Facilities</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Ultra-modern machinery and dedicated production sections ensure the highest quality output every time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infrastructure.map((item, i) => (
              <div key={i} className={`flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 animate-on-scroll delay-${Math.min(i * 50, 400)} ${visInfra ? 'visible' : ''}`}>
                <CheckCircle2 size={18} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
