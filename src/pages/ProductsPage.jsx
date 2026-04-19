import PageHero from '../components/layout/PageHero';
import { therapeuticCategories, formulationTypes } from '../data/products';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CTABanner from '../components/home/CTABanner';
import LucideIcon from '../components/common/LucideIcon';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';

export default function ProductsPage() {
  const { ref, visible } = useScrollAnimation();
  const { ref: refForm, visible: visForm } = useScrollAnimation();

  return (
    <>
      <SEOHead
        title="Pharmaceutical Products"
        description="Browse Medking Lifescience's complete pharmaceutical product range — antibiotics, anti-inflammatory, orthopedic, gastrointestinal, neurological, cardiovascular, gynaecology, nutraceuticals & more. 500+ SKUs across 11 therapeutic categories."
        keywords="pharmaceutical products India, antibiotic tablets India, anti-inflammatory medicines, nutraceutical products, cardiovascular drugs manufacturer, gynaecology medicines, orthopedic formulations, gastrointestinal medicines India"
        canonical="/products"
      />
      <PageHero
        subtitle="Our Portfolio"
        title="Product Range"
        breadcrumbs={[{ label: 'Products' }]}
        description="Explore our comprehensive therapeutic portfolio. We manufacture high-quality formulations across multiple clinical categories from our specialized divisions."
      />

      {/* Formulation Types */}
      <section className="py-16 bg-slate-50" ref={refForm}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-10 animate-on-scroll ${visForm ? 'visible' : ''}`}>
            <p className="section-subtitle mb-3">Dosage Forms</p>
            <h2 className="section-title">Formulation Types</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {formulationTypes.map(({ name, icon, count, description }, i) => (
              <div key={name} className={`card p-5 text-center card-hover animate-on-scroll delay-${i * 50} ${visForm ? 'visible' : ''}`}>
                <div className="flex justify-center mb-3 text-teal-600">
                  <LucideIcon name={icon} size={32} strokeWidth={1.5} />
                </div>
                <div className="font-display font-bold text-teal-600 text-xl mb-1">{count}</div>
                <div className="font-semibold text-navy-900 text-sm mb-1">{name}</div>
                <div className="text-slate-400 text-xs leading-tight">{description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Categories */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 animate-on-scroll ${visible ? 'visible' : ''}`}>
            <p className="section-subtitle mb-3">Therapeutic Areas</p>
            <h2 className="section-title mb-4">Product Categories</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Select a therapeutic category to view our complete range of pharmaceutical formulations and SKU details.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapeuticCategories.map((cat, i) => (
              <Link
                key={cat.id}
                to={`/products/${cat.slug}`}
                className="group card overflow-hidden card-hover block shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Card header */}
                <div className={`bg-gradient-to-br ${cat.color} p-8 flex flex-col items-center text-center gap-4 h-full min-h-[300px] justify-center relative overflow-hidden`}>
                  {/* Background decoration */}
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />

                  <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner mb-2 group-hover:rotate-12 transition-transform duration-500">
                    <LucideIcon name={cat.icon} size={40} />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-white text-2xl mb-3">{cat.name}</h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-[240px] mx-auto">{cat.description}</p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    View Catalogue <LucideIcon name="ArrowRight" size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
