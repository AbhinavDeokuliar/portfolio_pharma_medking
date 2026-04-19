import PageHero from '../components/layout/PageHero';
import { CheckCircle2, Target, Eye, Heart, Award, CheckCircle, Search, Factory, Users, ShieldCheck } from 'lucide-react';
import Stats from '../components/home/Stats';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CTABanner from '../components/home/CTABanner';
import LucideIcon from '../components/common/LucideIcon';
import SEOHead from '../components/common/SEOHead';

const certs = [
  { name: 'ISO 9001:2015', desc: 'International quality management system standard', icon: Award, color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
  { name: 'GMP Certified', desc: 'Good Manufacturing Practices for pharmaceutical production', icon: CheckCircle, color: 'bg-teal-50 border-teal-200 text-teal-700' },
  { name: 'GLP Certified', desc: 'Good Laboratory Practices for research & quality control', icon: Search, color: 'bg-blue-50 border-blue-200 text-blue-700' },
];

const specialties = [
  { name: 'Antibiotics', icon: 'ShieldAlert' },
  { name: 'Orthopedic', icon: 'Stethoscope' },
  { name: 'Gynaecology', icon: 'Flower2' },
  { name: 'Cardio-Vascular', icon: 'HeartPulse' },
  { name: 'Gastro Intestinal', icon: 'Activity' },
  { name: 'Anti-Inflammatory', icon: 'Flame' },
  { name: 'Neuro & Psychiatric', icon: 'Brain' },
  { name: 'Nutraceuticals', icon: 'Leaf' },
];

const qualityPillars = [
  { title: 'To Manufacture', value: '"Global Standard Pharmaceutical Formulations"', icon: Factory },
  { title: 'To Satisfy', value: '"Needs and Expectations of Consumers/Patients"', icon: Users },
  { title: 'To Ensure', value: '"Commitment to Quality & Safety"', icon: ShieldCheck },
];

export default function AboutPage() {
  const { ref: refStory, visible: visStory } = useScrollAnimation();
  const { ref: refCert, visible: visCert } = useScrollAnimation();
  const { ref: refQuality, visible: visQuality } = useScrollAnimation();
  const { ref: refVision, visible: visVision } = useScrollAnimation();

  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Medking Lifescience — 7+ years of pharmaceutical manufacturing excellence in Kala Amb, HP. ISO 9001:2015, GMP & GLP Certified. Our vision, mission, quality motto, and certifications."
        keywords="about Medking Lifescience, pharma company Himachal Pradesh, pharmaceutical manufacturers Kala Amb, ISO certified pharma India, GMP GLP certified manufacturer, pharmaceutical quality standards"
        canonical="/about"
      />
      <PageHero
        subtitle="Our Story"
        title="About Medking Lifescience"
        breadcrumbs={[{ label: 'About Us' }]}
        description="Three decades of pharmaceutical excellence — built on quality, innovation, and an unwavering commitment to healthcare."
      />

      {/* Company Story */}
      <section className="py-24 bg-white" ref={refStory}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`animate-on-scroll ${visStory ? 'visible' : ''}`}>
              <p className="section-subtitle mb-3">Our Company</p>
              <h2 className="section-title mb-6">Trusted Since <span className="gradient-text">7+ Years</span></h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                MEDKING LIFESCIENCE is one of the most trusted pharmaceutical manufacturing plants in Kala Amb Industrial Area (Himachal Pradesh). Under the leadership of our director with 7 years of industry experience, we are committed to delivering superior quality medicines.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                We have a highly experienced team in all areas — Production, QC, QA, and Operations — maintaining the best quality across all product ranges, as per international pharmaceutical norms.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our integrated production facility (ISO 9001:2015, GMP & GLP Certified) assures high-quality products from the latest ultra-modern machinery in Non β-Lactam (Biological & Non-Biological) sections — covering Tablets, Capsules, Oral Liquids, External preparations and Nutraceuticals.
              </p>
            </div>
            <div className={`grid grid-cols-2 gap-4 animate-on-scroll delay-200 ${visStory ? 'visible' : ''}`}>
              {specialties.map(({ name, icon }) => (
                <div key={name} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <div className="text-teal-600">
                    <LucideIcon name={icon} size={24} />
                  </div>
                  <span className="font-medium text-slate-700 text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Certifications */}
      <section className="py-24 bg-slate-50" ref={refCert}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 animate-on-scroll ${visCert ? 'visible' : ''}`}>
            <p className="section-subtitle mb-3">Accreditations</p>
            <h2 className="section-title mb-4">Our Certifications</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Certified to the highest international standards, ensuring every product we manufacture meets rigorous quality benchmarks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certs.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={c.name} className={`card p-8 text-center animate-on-scroll delay-${i * 100} ${visCert ? 'visible' : ''}`}>
                  <div className="flex justify-center mb-5 text-teal-600">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold border mb-4 ${c.color}`}>{c.name}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Motto */}
      <section className="py-24 bg-white" ref={refQuality}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 animate-on-scroll ${visQuality ? 'visible' : ''}`}>
            <p className="section-subtitle mb-3">Our Philosophy</p>
            <h2 className="section-title mb-4">Our Quality Motto</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualityPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={`bg-gradient-to-br from-navy-900 to-teal-900 rounded-2xl p-8 text-white text-center animate-on-scroll delay-${i * 100} ${visQuality ? 'visible' : ''}`}>
                  <div className="flex justify-center mb-5 text-teal-300">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-teal-300">{p.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed italic">{p.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50" ref={refVision}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 animate-on-scroll ${visVision ? 'visible' : ''}`}>
            <p className="section-subtitle mb-3">Our Purpose</p>
            <h2 className="section-title">Vision, Mission & Objective</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Objective', icon: Target, color: 'border-teal-400 bg-teal-50', iconColor: 'text-teal-600', desc: 'To ensure high-quality medicines at affordable prices for all segments of society.' },
              { title: 'Vision', icon: Eye, color: 'border-navy-400 bg-blue-50', iconColor: 'text-navy-700', desc: 'To be a trusted leader in the production of safe, effective, and high-quality medications that contribute to the improvement of global health.' },
              { title: 'Mission', icon: Heart, color: 'border-rose-400 bg-rose-50', iconColor: 'text-rose-600', desc: 'To continuously invest in quality, technology, and people — ensuring that every patient who uses our medicines experiences the best possible health outcomes.' },
            ].map(({ title, icon: Icon, color, iconColor, desc }, i) => (
              <div key={title} className={`card border-l-4 ${color} p-8 animate-on-scroll delay-${i * 100} ${visVision ? 'visible' : ''}`}>
                <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm`}>
                  <Icon size={24} className={iconColor} />
                </div>
                <h3 className="font-display font-bold text-navy-900 text-xl mb-4">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
