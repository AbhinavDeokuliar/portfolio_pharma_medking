import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { divisions } from '../data/divisions';
import CTABanner from '../components/home/CTABanner';
import LucideIcon from '../components/common/LucideIcon';
import SEOHead from '../components/common/SEOHead';

export default function DivisionDetailPage() {
  const { slug } = useParams();
  const division = divisions.find((d) => d.slug === slug);

  if (!division) return <Navigate to="/divisions" replace />;

  const currentIndex = divisions.findIndex((d) => d.slug === slug);
  const prev = divisions[currentIndex - 1];
  const next = divisions[currentIndex + 1];
  const hasProducts = division.isDataAvailable && division.products.length > 0;

  return (
    <>
      <SEOHead
        title={division.name}
        description={`${division.name} — ${division.tagline}. ${division.description.slice(0, 110)}. A product division of Medking Lifescience, Kala Amb, Himachal Pradesh.`}
        keywords={`${division.name}, ${division.specialties.slice(0,5).join(', ')}, pharmaceutical division India, Medking Lifescience`}
        canonical={`/divisions/${division.slug}`}
      />
      <Helmet>
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
              "name": "Divisions",
              "item": "https://www.medkinglifescience.com/divisions"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": division.name,
              "item": `https://www.medkinglifescience.com/divisions/${division.slug}`
            }
          ]
        })}</script>
      </Helmet>
      {/* Custom hero for division */}
      <section className={`relative bg-gradient-to-br ${division.color} text-white py-28 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)', backgroundSize: '50px 50px' }}
        />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-black/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/divisions" className="hover:text-white transition-colors">Divisions</Link>
            <span>/</span>
            <span className="text-white">{division.name}</span>
          </nav>

          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl border border-white/30 flex-shrink-0 text-white">
              <LucideIcon name={division.icon} size={40} />
            </div>
            <div>
              <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-2">Product Division</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">{division.name}</h1>
              <p className="text-white/80 text-xl">{division.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* Main Content */}
            <div className="w-full lg:col-span-2 space-y-10">
              {/* Overview */}
              <div className="animate-fade-in">
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">Division Overview</h2>
                <p className="text-slate-600 leading-relaxed text-base">{division.description}</p>
              </div>

              {/* Product Range Cards */}
              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-8">Product Portfolio</h2>

                {!hasProducts ? (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                    <h3 className="font-display text-xl font-bold text-amber-800 mb-2">Product Details</h3>
                    <p className="text-amber-700 text-sm leading-relaxed mb-4">
                      To get details for this, contact us.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:gap-3 transition-all">
                      Contact Us <ArrowRight size={14} />
                    </Link>
                  </div>
                ) : (
                  <>
                    {Object.entries(
                      division.products.reduce((acc, product) => {
                        const category = product.category || 'General';
                        if (!acc[category]) acc[category] = [];
                        acc[category].push(product);
                        return acc;
                      }, {})
                    ).map(([category, categoryProducts]) => {
                  const getCategoryTheme = (cat) => {
                    const c = cat.toLowerCase();
                    if (c.includes('tablet')) return { bg: 'bg-blue-50', border: 'border-blue-100', accent: 'text-blue-700', dot: 'bg-blue-500' };
                    if (c.includes('capsule')) return { bg: 'bg-purple-50', border: 'border-purple-100', accent: 'text-purple-700', dot: 'bg-purple-500' };
                    if (c.includes('syrup') || c.includes('susp')) return { bg: 'bg-amber-50', border: 'border-amber-100', accent: 'text-amber-700', dot: 'bg-amber-500' };
                    if (c.includes('injection')) return { bg: 'bg-rose-50', border: 'border-rose-100', accent: 'text-rose-700', dot: 'bg-rose-500' };
                    if (c.includes('supplement')) return { bg: 'bg-emerald-50', border: 'border-emerald-100', accent: 'text-emerald-600', dot: 'bg-emerald-500' };
                    if (c.includes('ointment')) return { bg: 'bg-indigo-50', border: 'border-indigo-100', accent: 'text-indigo-700', dot: 'bg-indigo-500' };
                    if (c.includes('personal') || c.includes('soap') || c.includes('care')) return { bg: 'bg-teal-50', border: 'border-teal-100', accent: 'text-teal-700', dot: 'bg-teal-500' };
                    return { bg: 'bg-slate-50', border: 'border-slate-100', accent: 'text-slate-700', dot: 'bg-slate-500' };
                  };

                  const theme = getCategoryTheme(category);

                  return (
                    <div key={category} className="mb-12 last:mb-0 w-full overflow-hidden">
                      <div className="flex items-center gap-4 mb-5">
                        <div className={`h-8 w-1.5 rounded-full bg-gradient-to-b ${division.color}`} />
                        <h3 className="font-display text-xl font-bold text-slate-800">{category}</h3>
                        <div className="h-px flex-grow bg-slate-100" />
                        <span className="bg-slate-50 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">{categoryProducts.length} Items</span>
                      </div>

                      {/* Mobile/Tablet View (Cards) - Shown up to lg screens */}
                      <div className="lg:hidden w-full space-y-3">
                        {categoryProducts.map((p, i) => (
                          <div key={i} className={`rounded-2xl border ${theme.border} ${theme.bg} shadow-sm overflow-hidden`}>
                            <div className={`h-1 w-full bg-gradient-to-r ${division.color}`} />
                            <div className="p-4 sm:p-5">
                              <div className="flex justify-between items-start gap-3 mb-3">
                                <div className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight tracking-tight">
                                  {p.name}
                                </div>
                                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest whitespace-nowrap ${theme.bg} ${theme.accent} border-2 ${theme.border}`}>
                                  {p.form}
                                </span>
                              </div>

                              <div className="grid grid-cols-1 gap-3 text-[11px] uppercase tracking-wider font-bold mb-3">
                                <div className="rounded-lg border border-white/70 bg-white/70 px-3 py-2">
                                  <span className="text-slate-400">Packaging</span>
                                  <div className="text-slate-700 text-xs mt-1 break-words normal-case tracking-normal font-semibold">
                                    {p.packaging || '-'}
                                  </div>
                                </div>
                              </div>

                              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-white/70">
                                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Composition</p>
                                <p className="text-sm text-slate-700 leading-relaxed italic font-medium">
                                  {p.composition || 'Composition details available on request.'}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Desktop View (Table) - Hidden on mobile/tablet */}
                      <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-200">
                        <div className="custom-scrollbar">
                          <table className="w-full table-fixed text-sm text-left border-separate border-spacing-0">
                            <thead>
                              <tr className={`${theme.bg} ${theme.accent} border-b ${theme.border}`}>
                                <th className={`w-[28%] px-5 py-4 font-bold uppercase tracking-wider text-[12px] border-b ${theme.border} ${theme.bg}`}>
                                  Product Name
                                </th>
                                <th className={`w-[38%] px-5 py-4 font-bold uppercase tracking-wider text-[12px] border-b ${theme.border}`}>Composition</th>
                                <th className={`w-[20%] px-5 py-4 font-bold uppercase tracking-wider text-[12px] border-b ${theme.border}`}>Packaging</th>
                                <th className={`w-[14%] px-5 py-4 font-bold uppercase tracking-wider text-[12px] border-b ${theme.border}`}>Form</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {categoryProducts.map((p, i) => (
                                <tr key={i} className="group hover:bg-slate-50/80 transition-all duration-200">
                                  <td className="px-5 py-4 align-top bg-white group-hover:bg-slate-50 transition-colors break-words">
                                    <div className="flex items-center gap-3">
                                      <div className={`w-2 h-2 rounded-full ${theme.dot} opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300`} />
                                      <span className="font-extrabold text-slate-900 group-hover:text-teal-600 transition-colors leading-tight tracking-tight">
                                        {p.name}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="px-5 py-4 align-top text-slate-700 font-medium leading-relaxed italic break-words">
                                    <div>{p.composition || 'Composition details available on request.'}</div>
                                  </td>
                                  <td className="px-5 py-4 align-top font-bold text-slate-600 break-words">
                                    {p.packaging || '-'}
                                  </td>
                                  <td className="px-5 py-4 align-top">
                                    <span className={`inline-flex px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-widest ${theme.bg} ${theme.accent} border-2 ${theme.border} shadow-sm`}>
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
                      );
                    })}

                    <p className="text-slate-400 text-xs mt-8 italic text-center p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                      * This is a partial list of our {division.name} portfolio. Please download our complete catalogue for full details.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Specialties */}
              <div className="card p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-display font-bold text-navy-900 text-lg mb-4">Key Specialties</h3>
                <ul className="space-y-3">
                  {division.specialties.map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-teal-600 flex-shrink-0" />
                      <span className="text-slate-700 text-sm font-medium">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className="bg-gradient-to-br from-navy-900 to-teal-900 rounded-2xl p-6 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-display font-bold text-lg mb-4">Certifications</h3>
                <div className="space-y-3">
                  {['ISO 9001:2015', 'GMP Certified', 'GLP Certified'].map((c) => (
                    <div key={c} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0"><CheckCircle2 size={14} className="text-white" /></div>
                      <span className="text-white/90 text-sm">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA card */}
              <div className="card p-6 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${division.color} mx-auto flex items-center justify-center mb-4 shadow-lg text-white`}>
                  <LucideIcon name={division.icon} size={28} />
                </div>
                <h3 className="font-display font-bold text-navy-900 mb-2">Business Enquiry</h3>
                <p className="text-slate-500 text-sm mb-5">Interested in {division.name} products? Contact us for pricing and availability.</p>
                <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Division navigation */}
          <div className="flex items-center justify-between mt-14 pt-10 border-t border-slate-100">
            {prev ? (
              <Link to={`/divisions/${prev.slug}`} className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors group">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs text-slate-400">Previous</div>
                  <div className="font-semibold">{prev.name}</div>
                </div>
              </Link>
            ) : <div />}
            <Link to="/divisions" className="btn-outline text-sm px-5 py-2.5">
              All Divisions
            </Link>
            {next ? (
              <Link to={`/divisions/${next.slug}`} className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors group text-right">
                <div>
                  <div className="text-xs text-slate-400">Next</div>
                  <div className="font-semibold">{next.name}</div>
                </div>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
