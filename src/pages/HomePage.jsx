import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import AboutPreview from '../components/home/AboutPreview';
import DivisionsPreview from '../components/home/DivisionsPreview';
import ManufacturingHighlight from '../components/home/ManufacturingHighlight';
import CTABanner from '../components/home/CTABanner';
import SEOHead from '../components/common/SEOHead';
import FAQSchema from '../components/common/FAQSchema';

export default function HomePage() {
  return (
    <>
      <SEOHead
        description="Medking Lifescience — one of India's trusted pharmaceutical manufacturing plants in Kala Amb, Himachal Pradesh. ISO 9001:2015, GMP & GLP Certified. 7+ years manufacturing tablets, capsules, injectables & nutraceuticals."
        keywords="pharmaceutical manufacturing India, Medking Lifescience, contract pharma manufacturing, GMP certified plant, ISO 9001 pharma, Kala Amb pharma, Himachal Pradesh pharmaceutical, third party manufacturing pharma"
        canonical="/"
      />
      <FAQSchema />
      <Hero />
      <Stats />
      <AboutPreview />
      <DivisionsPreview />
      <ManufacturingHighlight />
      <CTABanner />
    </>
  );
}
