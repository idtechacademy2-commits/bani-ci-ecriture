import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-engineering.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Bureau d'études BANI - Expertise en génie civil et environnement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 min-h-screen flex items-center">
        <div className="max-w-4xl text-white">
          <div className="mb-6">
            <span className="inline-block bg-secondary/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Depuis 2010 • Certifié ISO 9001:2015
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Expertise et innovation au service du 
            <span className="text-secondary-light"> développement durable</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90 max-w-3xl">
            BANI, votre partenaire de confiance pour vos projets d'ingénierie civile, rurale et environnementale en Côte d'Ivoire. 
            Dirigé par M. Jean-Jacques Dewellet KOUAKOU, diplômé de l'EIER.
          </p>

          {/* Key certifications */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Shield className="text-secondary-light" size={20} />
              <span className="text-sm font-medium">Agréé CHANIE</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Award className="text-secondary-light" size={20} />
              <span className="text-sm font-medium">Agréé ANDE</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <CheckCircle className="text-secondary-light" size={20} />
              <span className="text-sm font-medium">ISO 9001:2015</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('services')}
              size="lg"
              className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 text-lg font-semibold group"
            >
              Découvrir nos services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-75">Découvrir</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;