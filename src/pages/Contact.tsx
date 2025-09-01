import { useLanguage } from '@/hooks/useLanguage';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Building2, Leaf, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "BANI",
      "email": "info@bani-ci.net",
      "telephone": "+225 27 23 48 52 01",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CI",
        "addressRegion": "Abidjan"
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: language === 'fr' ? 'Email' : 'Email',
      value: 'info@bani-ci.net',
      link: 'mailto:info@bani-ci.net'
    },
    {
      icon: Phone,
      title: language === 'fr' ? 'Téléphone' : 'Phone',
      value: '+225 27 23 48 52 01',
      link: 'tel:+22527234852701'
    },
    {
      icon: MapPin,
      title: language === 'fr' ? 'Localisation' : 'Location',
      value: 'Abidjan – Côte d\'Ivoire',
      link: null
    },
    {
      icon: Clock,
      title: language === 'fr' ? 'Horaires' : 'Hours',
      value: language === 'fr' ? 'Lun-Ven: 8h-17h' : 'Mon-Fri: 8am-5pm',
      link: null
    }
  ];

  const projectTypes = language === 'fr' ? [
    'Génie Civil',
    'Génie Rural', 
    'Étude d\'Impact Environnemental (EIES)',
    'Audit Environnemental',
    'Conseil & Expertise',
    'Autre'
  ] : [
    'Civil Engineering',
    'Rural Engineering',
    'Environmental Impact Assessment (ESIA)',
    'Environmental Audit',
    'Advisory & Expertise',
    'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = language === 'fr' ? 
      `Demande de devis - ${formData.project || 'Projet'}` :
      `Quote Request - ${formData.project || 'Project'}`;
    
    const body = language === 'fr' ? 
      `Nom: ${formData.name}
Email: ${formData.email}
Société: ${formData.company}
Type de projet: ${formData.project}

Message:
${formData.message}` :
      `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.project}

Message:
${formData.message}`;

    const mailtoLink = `mailto:info@bani-ci.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: language === 'fr' ? "Demande envoyée" : "Request Sent",
      description: language === 'fr' ? 
        "Votre client email va s'ouvrir avec votre demande pré-remplie." :
        "Your email client will open with your pre-filled request."
    });
  };

  return (
    <>
      <SEO
        title={language === 'fr' ? 
          'Contact – Bureau d\'Étude BANI Côte d\'Ivoire' :
          'Contact – BANI Engineering Office Côte d\'Ivoire'
        }
        description={language === 'fr' ? 
          'Contactez BANI par mail ou téléphone pour vos projets d\'ingénierie et d\'environnement en Afrique de l\'Ouest.' :
          'Get in touch with BANI for engineering and environmental projects in West Africa.'
        }
        keywords={language === 'fr' ? 
          'contact BANI, bureau études Côte d\'Ivoire, devis, consultation' :
          'contact BANI, engineering office Côte d\'Ivoire, quote, consultation'
        }
        canonical={language === 'fr' ? 'https://www.bani-ci.net/contact' : 'https://www.bani-ci.net/en/contact'}
        hrefLangFr="https://www.bani-ci.net/contact"
        hrefLangEn="https://www.bani-ci.net/en/contact"
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
                  {language === 'fr' ? 'Contact' : 'Contact'}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {language === 'fr' ? 'Contactez-nous' : 'Contact BANI'}
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  {language === 'fr' ? 
                    'Prêt à démarrer votre projet ? Contactez nos experts pour une consultation personnalisée.' :
                    'Ready to start your project? Contact our experts for personalized consultation.'
                  }
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-gradient-section">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Info */}
                  <div>
                    <h2 className="text-3xl font-bold mb-8 text-primary">
                      {language === 'fr' ? 'Informations de contact' : 'Contact Information'}
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        const content = (
                          <Card className="hover:shadow-card-hover transition-shadow h-full">
                            <CardContent className="p-6 text-center">
                              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                              <p className="text-muted-foreground text-sm">{info.value}</p>
                            </CardContent>
                          </Card>
                        );
                        
                        return info.link ? (
                          <a key={index} href={info.link} className="block">
                            {content}
                          </a>
                        ) : (
                          <div key={index}>
                            {content}
                          </div>
                        );
                      })}
                    </div>

                    {/* Why Choose BANI */}
                    <Card className="bg-primary/5 border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-primary">
                          {language === 'fr' ? 'Pourquoi choisir BANI ?' : 'Why Choose BANI?'}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Building2 className="h-5 w-5 text-secondary mt-1" />
                            <div>
                              <h4 className="font-semibold text-sm">
                                {language === 'fr' ? 'Expertise technique' : 'Technical Expertise'}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {language === 'fr' ? '+10 ans en génie civil et rural' : '10+ years in civil and rural engineering'}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Leaf className="h-5 w-5 text-secondary mt-1" />
                            <div>
                              <h4 className="font-semibold text-sm">
                                {language === 'fr' ? 'Agréments officiels' : 'Official Accreditations'}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {language === 'fr' ? 'ANDE, CHA.N.I.E, ISO 9001:2015' : 'ANDE, CHA.N.I.E, ISO 9001:2015'}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Users className="h-5 w-5 text-secondary mt-1" />
                            <div>
                              <h4 className="font-semibold text-sm">
                                {language === 'fr' ? 'Accompagnement personnalisé' : 'Personalized Support'}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {language === 'fr' ? 'Équipe dédiée à votre projet' : 'Dedicated team for your project'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Contact Form */}
                  <div>
                    <h2 className="text-3xl font-bold mb-8 text-primary">
                      {language === 'fr' ? 'Demande de devis' : 'Request a Quote'}
                    </h2>
                    
                    <Card>
                      <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">
                                {language === 'fr' ? 'Nom complet' : 'Full Name'} *
                              </Label>
                              <Input
                                id="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">
                                {language === 'fr' ? 'Email' : 'Email'} *
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="company">
                              {language === 'fr' ? 'Société/Organisation' : 'Company/Organization'}
                            </Label>
                            <Input
                              id="company"
                              type="text"
                              value={formData.company}
                              onChange={(e) => handleInputChange('company', e.target.value)}
                              placeholder={language === 'fr' ? 'Nom de votre société' : 'Your company name'}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="project">
                              {language === 'fr' ? 'Type de projet' : 'Project Type'} *
                            </Label>
                            <Select onValueChange={(value) => handleInputChange('project', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder={language === 'fr' ? 'Sélectionnez un type' : 'Select a type'} />
                              </SelectTrigger>
                              <SelectContent>
                                {projectTypes.map((type, index) => (
                                  <SelectItem key={index} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="message">
                              {language === 'fr' ? 'Description du projet' : 'Project Description'} *
                            </Label>
                            <Textarea
                              id="message"
                              required
                              value={formData.message}
                              onChange={(e) => handleInputChange('message', e.target.value)}
                              placeholder={language === 'fr' ? 
                                'Décrivez votre projet, vos besoins et vos attentes...' :
                                'Describe your project, needs and expectations...'
                              }
                              rows={6}
                            />
                          </div>
                          
                          <Button type="submit" size="lg" className="w-full">
                            <Send className="mr-2 h-5 w-5" />
                            {language === 'fr' ? 'Envoyer une demande de devis' : 'Send a Request'}
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
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

export default Contact;