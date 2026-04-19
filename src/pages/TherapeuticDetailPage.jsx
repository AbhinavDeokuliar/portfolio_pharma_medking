import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/layout/PageHero';
import { therapeuticCategories } from '../data/products';
import LucideIcon from '../components/common/LucideIcon';
import CTABanner from '../components/home/CTABanner';
import SEOHead from '../components/common/SEOHead';

export default function TherapeuticDetailPage() {
  const { slug } = useParams();
  const category = therapeuticCategories.find((c) => c.slug === slug);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const keywords = category.products.map((p) => p.name).slice(0, 6).join(', ');

  return (
    <div className="bg-white">
      <SEOHead
        title={`${category.name} Medicines`}
        description={`${category.description} — ${category.products.length} pharmaceutical formulations from Medking Lifescience including ${category.products.slice(0,3).map(p=>p.name).join(', ')} & more.`}
        keywords={`${category.name.toLowerCase()} medicines India, ${keywords}, pharmaceutical formulations`}
        canonical={`/products/${category.slug}`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": `${category.name} — Medking Lifescience`,
          "description": category.description,
          "numberOfItems": category.products.length,
          "itemListElement": category.products.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": p.name,
            "description": p.composition,
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.medkinglifescience.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Products",
              "item": "https://www.medkinglifescience.com/products"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": category.name,
              "item": `https://www.medkinglifescience.com/products/${category.slug}`
            }
          ]
        })}</script>
      </Helmet>
      <PageHero
        subtitle="Therapeutic Range"
        title={category.name}
        description={category.description}
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: category.name }
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}>
                <LucideIcon name={category.icon} size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-navy-900">{category.name}</h2>
                <div className="flex items-center gap-2 mt-1 text-slate-500 font-medium italic">
                   Professional Grade Formulations
                </div>
              </div>
            </div>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors"
            >
              <LucideIcon name="ArrowLeft" size={20} />
              Back to Categories
            </Link>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className={`h-8 w-1.5 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="font-display text-xl font-bold text-slate-800">Available Products</h3>
                <div className="h-px flex-grow bg-slate-100" />
                <span className="bg-slate-50 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">
                  {category.products.length} SKU Items
                </span>
              </div>

              {/* Mobile View (Cards) */}
              <div className="md:hidden space-y-4">
                {category.products.map((p, i) => (
                  <div key={i} className={`p-5 rounded-2xl border ${category.borderColor} ${category.lightColor} shadow-sm active:scale-[0.98] transition-all`}>
                    <div className="flex justify-between items-start mb-3">
                      <div className="font-black text-slate-900 text-lg leading-tight tracking-tight uppercase">{p.name}</div>
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${category.lightColor} ${category.textColor} border-2 ${category.borderColor}`}>
                        {p.form}
                      </span>
                    </div>
                    
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 mb-3 border border-white/50">
                      <p className="text-sm text-slate-700 leading-relaxed italic font-medium">
                        {p.composition || 'Composition details available on request.'}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5 text-slate-500 font-bold uppercase tracking-wider">
                        <LucideIcon name="Package" size={12} />
                        {p.packaging || '-'}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 font-bold uppercase tracking-wider">
                        <LucideIcon name="Factory" size={12} className={category.textColor} />
                        {p.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View (Table) */}
              <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl ring-1 ring-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-base text-left border-separate border-spacing-0 min-w-[900px]">
                    <thead>
                      <tr className={`${category.lightColor} ${category.textColor} border-b ${category.borderColor}`}>
                        <th className={`sticky left-0 z-20 px-8 py-6 font-bold uppercase tracking-wider text-[12px] whitespace-nowrap border-b ${category.borderColor} ${category.lightColor} shadow-[4px_0_8px_-4px_rgba(0,0,0,0.1)]`}>
                          Product Name
                        </th>
                        <th className={`px-8 py-6 font-bold uppercase tracking-wider text-[12px] whitespace-nowrap border-b ${category.borderColor}`}>Composition</th>
                        <th className={`px-8 py-6 font-bold uppercase tracking-wider text-[12px] whitespace-nowrap border-b ${category.borderColor}`}>Company</th>
                        <th className={`px-8 py-6 font-bold uppercase tracking-wider text-[12px] whitespace-nowrap border-b ${category.borderColor}`}>Packaging</th>
                        <th className={`px-8 py-6 font-bold uppercase tracking-wider text-[12px] whitespace-nowrap border-b ${category.borderColor}`}>Form</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {category.products.map((p, i) => (
                        <tr key={i} className="group hover:bg-slate-50/80 transition-all duration-200">
                          <td className="sticky left-0 z-10 px-8 py-6 bg-white group-hover:bg-slate-50 transition-colors shadow-[4px_0_8px_-4px_rgba(0,0,0,0.15)] border-r border-slate-100">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300`} />
                              <span className="font-extrabold text-navy-900 group-hover:text-teal-600 transition-colors leading-tight tracking-tight text-lg">
                                {p.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-slate-700 font-medium leading-relaxed italic max-w-sm">
                            <div className="line-clamp-2 hover:line-clamp-none transition-all">
                              {p.composition}
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold whitespace-nowrap">
                               <LucideIcon name="Factory" size={12} className={category.textColor} />
                               {p.company}
                            </span>
                          </td>
                          <td className="px-8 py-6 font-bold text-slate-600 whitespace-nowrap">
                            {p.packaging}
                          </td>
                          <td className="px-8 py-6">
                            <span className={`inline-flex px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-widest ${category.lightColor} ${category.textColor} border-2 ${category.borderColor} shadow-sm`}>
                              {p.form}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
