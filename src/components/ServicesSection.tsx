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
      icon: <Construction className="text-primary" size={32} />,
      title: "Bâtiments",
      description: "Conception, dimensionnement et suivi de projets de bâtiments avec expertise technique complète.",
      features: [
        "Conception d'ouvrages d'art (pont, dalot, passerelles)",
        "Conception de bâtiments",
        "Études de réhabilitation de bâtiments",
        "Dimensionnement de structures",
        "Suivi et Contrôle des travaux de bâtiment"
      ],
      image: civilEngineeringImage,
      color: "primary"
    },
    {
      icon: <Hammer className="text-secondary" size={32} />,
      title: "Assainissement – Épuration des eaux",
      description: "Solutions complètes pour la gestion des eaux usées et pluviales avec des systèmes d'épuration adaptés.",
      features: [
        "Collecte et rejet des eaux pluviales",
        "Collecte et rejet des eaux usées",
        "Gestion des déchets solides",
        "Réseaux et ouvrages d'assainissement",
        "Épuration des eaux vannes par lagunage",
        "Récupération des terres inondées",
        "Assainissement individuel/collectif"
      ],
      image: environmentalImage,
      color: "secondary"
    },
    {
      icon: <ClipboardCheck className="text-primary" size={32} />,
      title: "Infrastructures Routières",
      description: "Études et réalisation d'infrastructures routières avec expertise en voirie et réseaux divers.",
      features: [
        "Voirie et Réseaux Divers (VRD)",
        "Étude et Conception de chaussées neuves",
        "Études et Réhabilitation des routes en terre et de pistes",
        "Suivi et Contrôle des travaux de voiries",
        "Topographiques"
      ],
      image: civilEngineeringImage,
      color: "primary"
    },
    {
      icon: <Leaf className="text-secondary" size={32} />,
      title: "Alimentation en Eau Potable",
      description: "Solutions d'approvisionnement en eau potable pour les zones urbaines et rurales.",
      features: [
        "Hydraulique urbaine",
        "Hydraulique villageoise",
        "Dessablage des eaux de consommation"
      ],
      image: environmentalImage,
      color: "secondary"
    },
    {
      icon: <TreePine className="text-primary" size={32} />,
      title: "Développement Rural",
      description: "Aménagement et développement des zones rurales avec approche intégrée et durable.",
      features: [
        "Barrages hydro-agricoles",
        "Irrigation / hydraulique agricole",
        "Aménagement de bas-fond et de plaine",
        "Pisciculture",
        "Drainage et récupération de sols",
        "Création de plantation et espaces protégés",
        "Ouvrages de lutte contre les inondations",
        "Lutte contre l'érosion des sols"
      ],
      image: environmentalImage,
      color: "primary"
    },
    {
      icon: <Search className="text-secondary" size={32} />,
      title: "Environnements et Société",
      description: "Études d'impact environnemental et social avec plans de gestion adaptés.",
      features: [
        "Étude Impact environnemental et social",
        "Constat d'impact environnemental et social",
        "Élaboration d'un plan de gestion environnemental et social",
        "Élaboration d'un plan d'action et réinstallation"
      ],
      image: environmentalImage,
      color: "secondary"
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Assistances aux Maîtres d'Ouvrage",
      description: "Accompagnement technique et conseil pour la maîtrise d'ouvrage et maîtrise d'œuvre.",
      features: [
        "Maîtrise d'œuvre et Maîtrise d'ouvrage déléguée",
        "Direction de projets",
        "Études stratégiques",
        "Appui aux Collectivités Locales"
      ],
      image: civilEngineeringImage,
      color: "primary"
    },
    {
      icon: <FileCheck className="text-secondary" size={32} />,
      title: "Assistances Techniques et Formation",
      description: "Formation et assistance technique dans divers domaines agricoles et ruraux.",
      features: [
        "Formation des collectivités rurales à la lutte anti érosive",
        "Formation des collectivités à la Défense",
        "Formation pratique au machinisme agricole",
        "Formation pratique au pilotage de l'irrigation",
        "Formation pratique au métier de l'agriculteur",
        "Formation pratique aux techniques culturales",
        "Formation aux techniques d'aménagement des terres et restauration des sols"
      ],
      image: environmentalImage,
      color: "secondary"
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