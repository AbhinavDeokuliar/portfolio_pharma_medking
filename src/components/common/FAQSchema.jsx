import { Helmet } from 'react-helmet-async';

const pharmaFAQs = [
  {
    question: "What certifications does Medking Lifescience have?",
    answer: "Medking Lifescience holds ISO 9001:2015, GMP (Good Manufacturing Practices), and GLP (Good Laboratory Practices) certifications for pharmaceutical manufacturing excellence."
  },
  {
    question: "Does Medking offer third-party manufacturing?",
    answer: "Yes, Medking Lifescience provides third-party manufacturing services for pharmaceutical companies. We specialize in tablets, capsules, oral liquids, ointments, veterinary products, and nutraceuticals."
  },
  {
    question: "What is your minimum order quantity?",
    answer: "Minimum order quantities vary based on product type and formulation. Contact our sales team at +91-70043-69887 or medkinglifecare@gmail.com for specific requirements."
  },
  {
    question: "Where is your manufacturing facility located?",
    answer: "Our state-of-the-art manufacturing plant is located in Kala Amb Industrial Area, Himachal Pradesh, India - a WHO-approved pharmaceutical manufacturing hub."
  },
  {
    question: "What therapeutic categories do you manufacture?",
    answer: "We manufacture products across 11 therapeutic categories including antibiotics, anti-inflammatory, orthopedic, gastrointestinal, cardiovascular, neurological, respiratory, nutraceuticals, and more."
  },
  {
    question: "Do you provide regulatory support for exports?",
    answer: "Yes, we have expertise in WHO-GMP compliance and can provide regulatory documentation support for international markets. Contact our operations team for details."
  }
];

export default function FAQSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": pharmaFAQs.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      })}</script>
    </Helmet>
  );
}
