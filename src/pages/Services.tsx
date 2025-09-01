import { useLanguage } from '@/hooks/useLanguage';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Leaf, Users, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const Services = () => {
  const { language, t } = useLanguage();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": language === 'fr' ? "Services BANI - Études techniques & environnementales" : "BANI Services - Technical & Environmental Studies",
    "provider": {
      "@type": "Organization",
      "name": "BANI",
      "url": "https://www.bani-ci.net"
    },
    "serviceType": language === 'fr' ? "Études d'ingénierie et environnementales" : "Engineering and Environmental Studies",
    "areaServed": "Côte d'Ivoire"
  };

  const services = [
    {
      icon: Building2,
      title: language === 'fr' ? 'Génie Civil & Rural' : 'Civil & Rural Engineering',
      description: language === 'fr' ? 
        'Conception d\'infrastructures robustes et projets agricoles innovants.' :
        'Design of robust infrastructures and innovative agricultural projects.',
      features: language === 'fr' ? [
        'Conception d\'infrastructures',
        'Projets agricoles',
        'Études de faisabilité',
        'Dimensionnement technique'
      ] : [
        'Infrastructure design',
        'Agricultural projects', 
        'Feasibility studies',
        'Technical sizing'
      ],
      color: 'primary'
    },
    {
      icon: Leaf,
      title: language === 'fr' ? 'Études Environnementales' : 'Environmental Studies',
      description: language === 'fr' ? 
        'Évaluations complètes pour des projets durables et conformes.' :
        'Comprehensive assessments for sustainable and compliant projects.',
      features: language === 'fr' ? [
        'Évaluation environnementale stratégique (EES)',
        'Études d\'impact environnemental et social (EIES)', 
        'Audits environnementaux',
        'Conformité réglementaire'
      ] : [
        'Strategic Environmental Assessment (SEA)',
        'Environmental & Social Impact Assessment (ESIA)',
        'Environmental audits',
        'Regulatory compliance'
      ],
      color: 'secondary'
    },
    {
      icon: Users,
      title: language === 'fr' ? 'Conseil & Expertise' : 'Advisory & Expertise',
      description: language === 'fr' ? 
        'Accompagnement technique et réglementaire personnalisé.' :
        'Personalized technical and regulatory support.',
      features: language === 'fr' ? [
        'Accompagnement technique',
        'Suivi de projets',
        'Expertise indépendante',
        'Support réglementaire'
      ] : [
        'Technical support',
        'Project monitoring',
        'Independent expertise',
        'Regulatory support'
      ],
      color: 'accent'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title={language === 'fr' ? 
          'Services – Études techniques & environnementales | BANI' :
          'Services – Engineering & Environmental Studies | BANI'
        }
        description={language === 'fr' ? 
          'Études techniques, EIES, audits, expertise indépendante en Côte d\'Ivoire et Afrique de l\'Ouest.' :
          'Civil and rural engineering, ESIA, audits, advisory services in Côte d\'Ivoire and West Africa.'
        }
        keywords={language === 'fr' ? 
          'études techniques, EIES, audit environnemental, génie civil, expertise, Côte d\'Ivoire' :
          'technical studies, ESIA, environmental audit, civil engineering, expertise, Côte d\'Ivoire'
        }
        canonical={language === 'fr' ? 'https://www.bani-ci.net/services' : 'https://www.bani-ci.net/en/services'}
        hrefLangFr="https://www.bani-ci.net/services"
        hrefLangEn="https://www.bani-ci.net/en/services"
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
                  {language === 'fr' ? 'Nos Services' : 'Our Services'}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {language === 'fr' ? 'Nos services et expertises' : 'Our Services and Expertise'}
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  {language === 'fr' ? 
                    'Des solutions d\'ingénierie complètes pour vos projets les plus ambitieux en Côte d\'Ivoire et Afrique de l\'Ouest.' :
                    'Complete engineering solutions for your most ambitious projects in Côte d\'Ivoire and West Africa.'
                  }
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => scrollToSection('contact-cta')}
                  className="text-lg px-8 py-3"
                >
                  {language === 'fr' ? 'Obtenir une consultation gratuite' : 'Get a Free Consultation'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-gradient-section">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card key={index} className="h-full hover:shadow-professional transition-all duration-300 group">
                      <CardHeader className="text-center pb-4">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors`}>
                          <Icon className={`h-8 w-8 text-${service.color}`} />
                        </div>
                        <CardTitle className="text-2xl font-bold text-primary">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground mb-6 text-center">
                          {service.description}
                        </p>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact-cta" className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {language === 'fr' ? 
                    'Prêt à démarrer votre projet ?' :
                    'Ready to start your project?'
                  }
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  {language === 'fr' ? 
                    'Contactez nos experts pour une consultation personnalisée et un devis adapté à vos besoins.' :
                    'Contact our experts for personalized consultation and a quote tailored to your needs.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <a href="mailto:info@bani-ci.net" className="flex items-center">
                      <Mail className="mr-2 h-5 w-5" />
                      {language === 'fr' ? 'Envoyer une demande' : 'Send a Request'}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <a href="tel:+22527234854201" className="flex items-center">
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

export default Services;