import { useLanguage } from '@/hooks/useLanguage';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Mail, Phone, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": language === 'fr' ? [
      {
        "@type": "Question",
        "name": "Quels types d'études BANI réalise-t-il ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BANI réalise des études techniques en génie civil et rural, des évaluations environnementales stratégiques, des études d'impact environnemental et social ainsi que des audits environnementaux."
        }
      }
    ] : [
      {
        "@type": "Question",
        "name": "What types of studies does BANI conduct?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BANI conducts technical studies in civil and rural engineering, strategic environmental assessments, environmental and social impact studies as well as environmental audits."
        }
      }
    ]
  };

  const faqs = language === 'fr' ? [
    {
      question: "Quels types d'études BANI réalise-t-il ?",
      answer: "BANI réalise des études techniques en génie civil et rural, des évaluations environnementales stratégiques, des études d'impact environnemental et social ainsi que des audits environnementaux."
    },
    {
      question: "BANI est-il certifié et agréé ?",
      answer: "Oui. BANI est agréé par la CHA.N.I.E depuis mai 2014, dispose de l'agrément de l'ANDE et est certifié ISO 9001:2015."
    },
    {
      question: "Comment collaborer avec BANI ?",
      answer: "Vous pouvez nous contacter par email (info@bani-ci.net), par téléphone (+225 27 23 48 52 01) ou via le formulaire de contact du site. Nous analyserons vos besoins et vous proposerons un accompagnement adapté."
    },
    {
      question: "Dans quels secteurs BANI intervient-il ?",
      answer: "BANI intervient dans les infrastructures, l'aménagement du territoire, l'agriculture, l'environnement, le développement durable et les études sociales."
    },
    {
      question: "Comment obtenir un devis ?",
      answer: "Envoyez les détails de votre projet par mail ou via le formulaire du site. Un devis personnalisé vous sera fourni dans les meilleurs délais."
    },
    {
      question: "Quelle est la valeur ajoutée de BANI ?",
      answer: "Une expertise reconnue, des agréments officiels, une certification ISO 9001, une équipe qualifiée et une approche intégrée garantissant rigueur, fiabilité et durabilité."
    }
  ] : [
    {
      question: "What types of studies does BANI conduct?",
      answer: "BANI conducts technical studies in civil and rural engineering, strategic environmental assessments, environmental and social impact studies as well as environmental audits."
    },
    {
      question: "Is BANI certified and accredited?",
      answer: "Yes. BANI is accredited by CHA.N.I.E since May 2014, has ANDE accreditation and is ISO 9001:2015 certified."
    },
    {
      question: "How to collaborate with BANI?",
      answer: "You can contact us by email (info@bani-ci.net), by phone (+225 27 23 48 52 01) or via the contact form on the website. We will analyze your needs and propose appropriate support."
    },
    {
      question: "In which sectors does BANI operate?",
      answer: "BANI operates in infrastructure, territorial planning, agriculture, environment, sustainable development and social studies."
    },
    {
      question: "How to get a quote?",
      answer: "Send the details of your project by email or via the website form. A personalized quote will be provided as soon as possible."
    },
    {
      question: "What is BANI's added value?",
      answer: "Recognized expertise, official accreditations, ISO 9001 certification, qualified team and integrated approach guaranteeing rigor, reliability and sustainability."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title={language === 'fr' ? 
          'FAQ – Bureau d\'Étude BANI Côte d\'Ivoire' :
          'FAQ – BANI Engineering Office Côte d\'Ivoire'
        }
        description={language === 'fr' ? 
          'Réponses aux questions fréquentes : études, devis, certifications, accompagnement.' :
          'Answers about our services, certifications, quotes, and collaboration process.'
        }
        keywords={language === 'fr' ? 
          'FAQ, questions fréquentes, BANI, bureau études, Côte d\'Ivoire' :
          'FAQ, frequently asked questions, BANI, engineering office, Côte d\'Ivoire'
        }
        canonical={language === 'fr' ? 'https://www.bani-ci.net/faq' : 'https://www.bani-ci.net/en/faq'}
        hrefLangFr="https://www.bani-ci.net/faq"
        hrefLangEn="https://www.bani-ci.net/en/faq"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-hero text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-6 text-lg px-4 py-2">
                  FAQ
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {language === 'fr' ? 'FAQ – Questions fréquentes' : 'Frequently Asked Questions'}
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  {language === 'fr' ? 
                    'Trouvez rapidement les réponses à vos questions sur nos services, certifications et processus de collaboration.' :
                    'Quickly find answers to your questions about our services, certifications and collaboration process.'
                  }
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-gradient-section">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="hover:shadow-card-hover transition-shadow">
                      <CardHeader 
                        className="cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <HelpCircle className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg text-left text-primary">
                              {faq.question}
                            </CardTitle>
                          </div>
                          {openIndex === index ? (
                            <ChevronUp className="h-5 w-5 text-primary" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-primary" />
                          )}
                        </div>
                      </CardHeader>
                      {openIndex === index && (
                        <CardContent className="pt-0 animate-in slide-in-from-top-2 duration-200">
                          <div className="ml-13 pl-4 border-l-2 border-primary/20">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {language === 'fr' ? 
                    'Vous ne trouvez pas votre réponse ?' :
                    'Can\'t find your answer?'
                  }
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  {language === 'fr' ? 
                    'Notre équipe d\'experts est là pour répondre à toutes vos questions spécifiques.' :
                    'Our team of experts is here to answer all your specific questions.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <a href="mailto:info@bani-ci.net" className="flex items-center">
                      <Mail className="mr-2 h-5 w-5" />
                      {language === 'fr' ? 'Contactez-nous pour plus d\'informations' : 'Contact Us for More Information'}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <a href="tel:+22527234852701" className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      {language === 'fr' ? 'Appeler maintenant' : 'Call Now'}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FAQ;