import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Hammer, 
  Leaf, 
  Search, 
  FileCheck, 
  Users,
  Construction,
  TreePine,
  ClipboardCheck
} from 'lucide-react';
import civilEngineeringImage from '@/assets/civil-engineering.jpg';
import environmentalImage from '@/assets/environmental-studies.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: <Hammer className="text-primary" size={32} />,
      title: "Études techniques en génie civil et rural",
      description: "Conception et dimensionnement d'infrastructures, études de faisabilité, supervision de travaux et expertise technique pour vos projets d'aménagement.",
      features: [
        "Études de faisabilité technique",
        "Conception d'infrastructures",
        "Dimensionnement d'ouvrages",
        "Supervision de travaux",
        "Contrôle qualité"
      ],
      image: civilEngineeringImage,
      color: "primary"
    },
    {
      icon: <Leaf className="text-secondary" size={32} />,
      title: "Évaluations environnementales stratégiques",
      description: "Évaluation des impacts environnementaux des politiques, plans et programmes pour un développement durable et responsable.",
      features: [
        "Évaluation des politiques publiques",
        "Analyse des impacts cumulatifs",
        "Recommandations stratégiques",
        "Suivi environnemental",
        "Consultation publique"
      ],
      image: environmentalImage,
      color: "secondary"
    },
    {
      icon: <Search className="text-primary" size={32} />,
      title: "Études d'impact environnemental et social",
      description: "Analyse complète des impacts environnementaux et sociaux de vos projets avec propositions de mesures d'atténuation adaptées.",
      features: [
        "Analyse de l'état initial",
        "Évaluation des impacts",
        "Mesures d'atténuation",
        "Plan de gestion environnementale",
        "Suivi post-projet"
      ],
      image: environmentalImage,
      color: "secondary"
    },
    {
      icon: <FileCheck className="text-primary" size={32} />,
      title: "Audits environnementaux",
      description: "Vérification de la conformité environnementale de vos installations et activités selon les normes en vigueur.",
      features: [
        "Audit de conformité réglementaire",
        "Évaluation des performances",
        "Identification des non-conformités",
        "Plan d'action corrective",
        "Certification environnementale"
      ],
      image: environmentalImage,
      color: "secondary"
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Conseil et expertise",
      description: "Accompagnement personnalisé et conseil d'expert pour optimiser vos projets et assurer leur réussite.",
      features: [
        "Conseil stratégique",
        "Assistance technique",
        "Formation spécialisée",
        "Expertise judiciaire",
        "Support réglementaire"
      ],
      image: civilEngineeringImage,
      color: "primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Nos services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Expertise complète en ingénierie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BANI vous accompagne dans tous vos projets avec une expertise reconnue 
            et des solutions adaptées à vos besoins spécifiques.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden shadow-card-hover hover:shadow-professional transition-all duration-500 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`lg:flex ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    service.color === 'primary' 
                      ? 'from-primary/70 to-primary/30' 
                      : 'from-secondary/70 to-secondary/30'
                  }`}></div>
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Nos prestations :</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            service.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                          }`}></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-section border-primary/20 shadow-professional">
            <CardContent className="p-8">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Un projet en tête ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé. 
                  Notre équipe d'experts est là pour vous accompagner.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:info@bani-ci.net" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-hero text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Demander un devis
                  </a>
                  <a 
                    href="tel:+22527234852 01" 
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                  >
                    Nous appeler
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;