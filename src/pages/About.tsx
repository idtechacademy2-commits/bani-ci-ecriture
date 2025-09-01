import { useLanguage } from '@/hooks/useLanguage';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Calendar, Award, Target, Eye, Heart, Mail, ArrowRight, Leaf } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BANI",
    "foundingDate": "2010-02-09",
    "founder": {
      "@type": "Person",
      "name": "Jean-Jacques Dewellet KOUAKOU"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CI",
      "addressRegion": "Abidjan"
    },
    "description": language === 'fr' ? 
      "Bureau d'études ivoirien spécialisé en génie civil, rural et environnement depuis 2010." :
      "Ivorian engineering office specialized in civil, rural and environmental studies since 2010."
  };

  const timeline = [
    {
      year: '2010',
      title: language === 'fr' ? 'Création de BANI' : 'BANI Foundation',
      description: language === 'fr' ? 
        'Création du bureau d\'études par M. Jean-Jacques Dewellet KOUAKOU, ingénieur diplômé de l\'EIER.' :
        'Engineering office founded by Mr. Jean-Jacques Dewellet KOUAKOU, EIER graduate engineer.'
    },
    {
      year: '2014',
      title: language === 'fr' ? 'Agrément CHA.N.I.E' : 'CHA.N.I.E Accreditation',
      description: language === 'fr' ? 
        'Obtention de l\'agrément de la Chambre Nationale des Ingénieurs Conseils et Experts de Génie Civil.' :
        'Obtained accreditation from the National Chamber of Engineering Consultants and Civil Engineering Experts.'
    },
    {
      year: '2015',
      title: language === 'fr' ? 'Certification ISO 9001' : 'ISO 9001 Certification',
      description: language === 'fr' ? 
        'Certification ISO 9001:2015 pour la qualité de nos processus et services.' :
        'ISO 9001:2015 certification for the quality of our processes and services.'
    },
    {
      year: '2020',
      title: language === 'fr' ? 'Agrément ANDE' : 'ANDE Accreditation',
      description: language === 'fr' ? 
        'Agrément de l\'Agence Nationale De l\'Environnement pour les études environnementales.' :
        'National Environmental Agency accreditation for environmental studies.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: language === 'fr' ? 'Rigueur' : 'Rigor',
      description: language === 'fr' ? 
        'Méthodologie rigoureuse et respect des normes techniques et réglementaires.' :
        'Rigorous methodology and compliance with technical and regulatory standards.'
    },
    {
      icon: Award,
      title: language === 'fr' ? 'Innovation' : 'Innovation',
      description: language === 'fr' ? 
        'Solutions innovantes adaptées aux défis contemporains de l\'ingénierie.' :
        'Innovative solutions adapted to contemporary engineering challenges.'
    },
    {
      icon: Leaf,
      title: language === 'fr' ? 'Développement durable' : 'Sustainable Development',
      description: language === 'fr' ? 
        'Intégration systématique des enjeux environnementaux dans nos études.' :
        'Systematic integration of environmental issues in our studies.'
    },
    {
      icon: User,
      title: language === 'fr' ? 'Professionnalisme' : 'Professionalism',
      description: language === 'fr' ? 
        'Excellence technique et relationnel de qualité avec nos clients.' :
        'Technical excellence and quality relationships with our clients.'
    }
  ];

  return (
    <>
      <SEO
        title={language === 'fr' ? 
          'À propos – Bureau d\'Étude BANI Côte d\'Ivoire' :
          'About BANI – Engineering & Environmental Experts Côte d\'Ivoire'
        }
        description={language === 'fr' ? 
          'Découvrez l\'histoire et les valeurs de BANI, acteur majeur en ingénierie et environnement en Afrique de l\'Ouest.' :
          'Learn about BANI, ISO-certified engineering office with 10+ years of expertise in civil, rural, and environmental studies.'
        }
        keywords={language === 'fr' ? 
          'BANI, bureau études, histoire, Jean-Jacques KOUAKOU, EIER, Côte d\'Ivoire' :
          'BANI, engineering office, history, Jean-Jacques KOUAKOU, EIER, Côte d\'Ivoire'
        }
        canonical={language === 'fr' ? 'https://www.bani-ci.net/a-propos' : 'https://www.bani-ci.net/en/about'}
        hrefLangFr="https://www.bani-ci.net/a-propos"
        hrefLangEn="https://www.bani-ci.net/en/about"
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
                  {language === 'fr' ? 'À propos' : 'About Us'}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {language === 'fr' ? 'À propos de BANI' : 'About BANI Engineering Office'}
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  {language === 'fr' ? 
                    'Plus de 10 ans d\'expertise en ingénierie et environnement au service du développement durable en Afrique de l\'Ouest.' :
                    'Over 10 years of engineering and environmental expertise serving sustainable development in West Africa.'
                  }
                </p>
              </div>
            </div>
          </section>

          {/* Founder Section */}
          <section className="py-20 bg-gradient-section">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                      {language === 'fr' ? 'Notre Fondateur' : 'Our Founder'}
                    </h2>
                    <Card className="hover:shadow-professional transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-primary">
                              Jean-Jacques Dewellet KOUAKOU
                            </CardTitle>
                            <p className="text-muted-foreground">
                              {language === 'fr' ? 'Directeur & Fondateur' : 'Director & Founder'}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {language === 'fr' ? 
                            'Ingénieur du Génie Rural diplômé de la prestigieuse École Inter États d\'Ingénieurs de l\'Équipement Rural (EIER) de Ouagadougou, Burkina Faso.' :
                            'Rural Engineering graduate from the prestigious Inter-State School of Rural Equipment Engineers (EIER) in Ouagadougou, Burkina Faso.'
                          }
                        </p>
                        <div className="flex items-center gap-2 text-sm text-secondary">
                          <Calendar className="h-4 w-4" />
                          <span>{language === 'fr' ? 'Fondateur depuis 2010' : 'Founder since 2010'}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary">
                      {language === 'fr' ? 'Mission & Vision' : 'Mission & Vision'}
                    </h3>
                    <div className="space-y-6">
                      <Card className="border-l-4 border-l-primary">
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Target className="h-5 w-5 text-primary" />
                            {language === 'fr' ? 'Mission' : 'Mission'}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            {language === 'fr' ? 
                              'Apporter des solutions d\'ingénierie fiables, innovantes et durables dans les domaines du génie civil, du génie rural et de l\'environnement.' :
                              'Provide reliable, innovative and sustainable engineering solutions in civil engineering, rural engineering and environmental fields.'
                            }
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-l-4 border-l-secondary">
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Eye className="h-5 w-5 text-secondary" />
                            {language === 'fr' ? 'Vision' : 'Vision'}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            {language === 'fr' ? 
                              'Devenir un acteur de référence en Côte d\'Ivoire et en Afrique de l\'Ouest dans les études techniques et environnementales.' :
                              'Become a reference player in Côte d\'Ivoire and West Africa in technical and environmental studies.'
                            }
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
                  {language === 'fr' ? 'Notre Histoire' : 'Our History'}
                </h2>
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                          {item.year.slice(-2)}
                        </div>
                      </div>
                      <Card className="flex-1 hover:shadow-card-hover transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-primary border-primary">
                              {item.year}
                            </Badge>
                            <CardTitle className="text-primary">{item.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20 bg-gradient-section">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                    {language === 'fr' ? 'Nos Valeurs' : 'Our Values'}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {language === 'fr' ? 
                      'Les principes qui guident notre action quotidienne et notre engagement envers nos clients.' :
                      'The principles that guide our daily action and our commitment to our clients.'
                    }
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <Card key={index} className="text-center hover:shadow-professional transition-all duration-300 group">
                        <CardHeader>
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <CardTitle className="text-xl font-bold text-primary">
                            {value.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm">
                            {value.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {language === 'fr' ? 'Prêt à travailler avec BANI ?' : 'Ready to work with BANI?'}
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  {language === 'fr' ? 
                    'Rejoignez nos nombreux clients satisfaits et bénéficiez de notre expertise reconnue en ingénierie.' :
                    'Join our many satisfied clients and benefit from our recognized engineering expertise.'
                  }
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <a href="mailto:info@bani-ci.net" className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    {language === 'fr' ? 'Travailler avec BANI' : 'Work With Us'}
                    <ArrowRight className="ml-2 h-5 w-5" />
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

export default About;