import { useLanguage } from '@/hooks/useLanguage';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Shield, CheckCircle, Award, ArrowRight, Mail, FileText } from 'lucide-react';

const Environment = () => {
  const { language } = useLanguage();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": language === 'fr' ? "Études d'impact environnemental et social (EIES)" : "Environmental and Social Impact Assessments (ESIA)",
    "provider": {
      "@type": "Organization",
      "name": "BANI",
      "url": "https://www.bani-ci.net"
    },
    "serviceType": language === 'fr' ? "Études environnementales" : "Environmental Studies",
    "areaServed": "Côte d'Ivoire"
  };

  const environmentalServices = [
    {
      icon: FileText,
      title: language === 'fr' ? 'Évaluation Environnementale Stratégique (EES)' : 'Strategic Environmental Assessment (SEA)',
      description: language === 'fr' ? 
        'Analyse des impacts environnementaux des politiques, plans et programmes.' :
        'Analysis of environmental impacts of policies, plans and programs.',
      features: language === 'fr' ? [
        'Évaluation des politiques publiques',
        'Analyse des plans d\'aménagement',
        'Recommandations stratégiques',
        'Consultation des parties prenantes'
      ] : [
        'Public policy assessment',
        'Development plan analysis',
        'Strategic recommendations',
        'Stakeholder consultation'
      ]
    },
    {
      icon: Leaf,
      title: language === 'fr' ? 'Études d\'Impact Environnemental et Social (EIES)' : 'Environmental & Social Impact Assessment (ESIA)',
      description: language === 'fr' ? 
        'Évaluation complète des impacts environnementaux et sociaux des projets.' :
        'Comprehensive assessment of environmental and social impacts of projects.',
      features: language === 'fr' ? [
        'Analyse des impacts environnementaux',
        'Évaluation des impacts sociaux',
        'Plans de gestion environnementale',
        'Mesures de mitigation'
      ] : [
        'Environmental impact analysis',
        'Social impact assessment',
        'Environmental management plans',
        'Mitigation measures'
      ]
    },
    {
      icon: Shield,
      title: language === 'fr' ? 'Audits Environnementaux' : 'Environmental Audits',
      description: language === 'fr' ? 
        'Vérification de la conformité environnementale et identification des risques.' :
        'Environmental compliance verification and risk identification.',
      features: language === 'fr' ? [
        'Audit de conformité réglementaire',
        'Évaluation des risques environnementaux',
        'Recommandations d\'amélioration',
        'Suivi des performances'
      ] : [
        'Regulatory compliance audit',
        'Environmental risk assessment',
        'Improvement recommendations',
        'Performance monitoring'
      ]
    }
  ];

  const accreditations = [
    {
      name: 'ANDE',
      description: language === 'fr' ? 
        'Agréé par l\'Agence Nationale De l\'Environnement pour les études environnementales' :
        'Accredited by the National Environmental Agency for environmental studies'
    },
    {
      name: 'ISO 9001:2015',
      description: language === 'fr' ? 
        'Certifié pour la qualité de nos processus et la satisfaction client' :
        'Certified for process quality and customer satisfaction'
    }
  ];

  return (
    <>
      <SEO
        title={language === 'fr' ? 
          'Études d\'impact environnemental et social (EIES) – BANI' :
          'Environmental & Social Impact Studies (ESIA) – BANI'
        }
        description={language === 'fr' ? 
          'Agréé ANDE, BANI réalise EIES, audits et évaluations stratégiques pour des projets durables et conformes.' :
          'BANI conducts ESIA, SEA, and audits to guarantee compliance and sustainability for donors and investors.'
        }
        keywords={language === 'fr' ? 
          'EIES, étude impact environnemental, audit environnemental, ANDE, Côte d\'Ivoire' :
          'ESIA, environmental impact study, environmental audit, ANDE, Côte d\'Ivoire'
        }
        canonical={language === 'fr' ? 'https://www.bani-ci.net/environnement' : 'https://www.bani-ci.net/en/environment'}
        hrefLangFr="https://www.bani-ci.net/environnement"
        hrefLangEn="https://www.bani-ci.net/en/environment"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-green text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-6 text-lg px-4 py-2 bg-white/10 text-white border-white/20">
                  {language === 'fr' ? 'Environnement' : 'Environment'}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {language === 'fr' ? 
                    'Études d\'impact environnemental et social (EIES) en Côte d\'Ivoire' :
                    'Environmental and Social Impact Assessments (ESIA)'
                  }
                </h1>
                <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                  {language === 'fr' ? 
                    'Agréé ANDE, nous garantissons la conformité réglementaire et la durabilité de vos projets avec des études environnementales rigoureuses.' :
                    'ANDE accredited, we guarantee regulatory compliance and sustainability of your projects with rigorous environmental studies.'
                  }
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  asChild
                  className="text-lg px-8 py-3"
                >
                  <a href="mailto:info@bani-ci.net?subject=Projet environnemental">
                    {language === 'fr' ? 'Soumettre un projet environnemental' : 'Submit Your Environmental Project'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Accreditations */}
          <section className="py-16 bg-accent/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                  {language === 'fr' ? 'Agréments & Certifications' : 'Accreditations & Certifications'}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {accreditations.map((accreditation, index) => (
                    <Card key={index} className="text-center hover:shadow-card-hover transition-shadow">
                      <CardHeader>
                        <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                        <CardTitle className="text-2xl text-primary">
                          {accreditation.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {accreditation.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Environmental Services */}
          <section className="py-20 bg-gradient-section">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                    {language === 'fr' ? 'Nos Services Environnementaux' : 'Our Environmental Services'}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {language === 'fr' ? 
                      'Une approche méthodique pour garantir la conformité réglementaire et la durabilité environnementale.' :
                      'A methodical approach to guarantee regulatory compliance and environmental sustainability.'
                    }
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {environmentalServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Card key={index} className="h-full hover:shadow-professional transition-all duration-300 group">
                        <CardHeader className="text-center pb-4">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                            <Icon className="h-8 w-8 text-secondary" />
                          </div>
                          <CardTitle className="text-xl font-bold text-primary">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground mb-6 text-center text-sm">
                            {service.description}
                          </p>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-3">
                                <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
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
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {language === 'fr' ? 
                    'Besoin d\'une étude environnementale ?' :
                    'Need an environmental study?'
                  }
                </h2>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                  {language === 'fr' ? 
                    'Nos experts agréés ANDE vous accompagnent pour garantir la conformité et la durabilité de votre projet.' :
                    'Our ANDE-accredited experts support you to guarantee compliance and sustainability of your project.'
                  }
                </p>
                <Button size="lg" variant="secondary" asChild className="bg-white text-secondary hover:bg-white/90">
                  <a href="mailto:info@bani-ci.net?subject=Demande d'étude environnementale" className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    {language === 'fr' ? 'Demander une étude' : 'Request a Study'}
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Environment;