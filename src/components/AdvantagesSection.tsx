import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle2, 
  Star,
  Target,
  Zap
} from 'lucide-react';
import teamImage from '@/assets/team-expertise.jpg';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <Award className="text-secondary" size={24} />,
      title: "Certification ISO 9001:2015",
      description: "Management de la qualité et amélioration continue certifiés"
    },
    {
      icon: <Shield className="text-primary" size={24} />,
      title: "Agréments officiels",
      description: "Reconnu par CHANIE et ANDE pour garantir la conformité"
    },
    {
      icon: <Users className="text-secondary" size={24} />,
      title: "Équipe d'experts",
      description: "Ingénieurs qualifiés et expérimentés dans leurs domaines"
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      title: "13+ années d'expérience",
      description: "Plus d'une décennie au service de l'ingénierie ivoirienne"
    },
    {
      icon: <Target className="text-secondary" size={24} />,
      title: "Approche sur-mesure",
      description: "Solutions adaptées aux spécificités de chaque projet"
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      title: "Réactivité",
      description: "Délais respectés et disponibilité pour vos urgences"
    }
  ];

  return (
    <section id="atouts" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Nos atouts
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Pourquoi choisir BANI ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre expertise reconnue, nos certifications et notre engagement qualité 
            font de BANI votre partenaire de confiance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image et certifications */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-professional">
              <img 
                src={teamImage} 
                alt="Équipe d'experts BANI"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              
              {/* Certification badges overlaid on image */}
              <div className="absolute bottom-6 left-6 space-y-3">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Award className="text-secondary" size={20} />
                    <span className="font-semibold text-primary">ISO 9001:2015</span>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="text-primary" size={20} />
                    <span className="font-semibold text-primary">Agréé CHANIE</span>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="text-secondary" size={20} />
                    <span className="font-semibold text-primary">Agréé ANDE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Avantages grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="shadow-card-hover hover:shadow-professional transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="bg-accent/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="font-bold text-primary mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="text-center shadow-card-hover">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">13+</div>
              <div className="text-muted-foreground">Années d'expérience</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card-hover">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">3</div>
              <div className="text-muted-foreground">Agréments officiels</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card-hover">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projets réalisés</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card-hover">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-muted-foreground">Clients satisfaits</div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial section */}
        <Card className="mt-16 bg-gradient-hero text-white shadow-professional">
          <CardContent className="p-8 text-center">
            <Star className="mx-auto mb-4 text-yellow-300" size={48} />
            <blockquote className="text-xl lg:text-2xl italic mb-6 max-w-4xl mx-auto">
              "La qualité de nos prestations et notre engagement envers l'excellence 
              font de BANI un partenaire de choix pour tous vos projets d'ingénierie 
              et d'études environnementales."
            </blockquote>
            <cite className="text-lg font-semibold">
              M. Jean-Jacques Dewellet KOUAKOU
              <span className="block text-sm opacity-75 mt-1">
                Directeur BANI • Ingénieur du Génie Rural EIER
              </span>
            </cite>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AdvantagesSection;