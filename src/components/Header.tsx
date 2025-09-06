import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@bani-ci.net" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
              <Mail size={16} />
              <span>info@bani-ci.net</span>
            </a>
            <a href="tel:+22527234852 01" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
              <Phone size={16} />
              <span>+225 27 23 48 52 01</span>
            </a>
          </div>
          <div className="hidden md:block text-xs">
            Agréé CHANIE | Certifié ISO 9001:2015
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/6a054abb-f103-4c61-b699-52370a13b51b.png" 
              alt="Logo BANI Ingénieur-Conseil" 
              className="w-14 h-14 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">BANI</h1>
              <p className="text-xs text-muted-foreground">Bureau d'Études</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('apropos')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Nos services
            </button>
            <button 
              onClick={() => scrollToSection('atouts')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Nos atouts
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-hero text-white hover:opacity-90 transition-opacity"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Nos services
              </button>
              <button 
                onClick={() => scrollToSection('atouts')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Nos atouts
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-hero text-white hover:opacity-90 transition-opacity"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;