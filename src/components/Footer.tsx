import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">BANI</h3>
                <p className="text-sm opacity-75">Bureau d'Études</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Expert en génie civil, rural et environnemental depuis 2010. 
              Dirigé par M. Jean-Jacques Dewellet KOUAKOU, ingénieur diplômé de l'EIER.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Calendar size={16} />
              <span>Créé le 9 février 2010</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@bani-ci.net"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>info@bani-ci.net</span>
              </a>
              <a 
                href="tel:+22527234852 01"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>+225 27 23 48 52 01</span>
              </a>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin size={18} />
                <span>Côte d'Ivoire</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Certifications & Agréments</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 px-3 py-2 rounded">
                <div className="font-medium">ISO 9001:2015</div>
                <div className="text-white/70">Management qualité</div>
              </div>
              <div className="bg-white/10 px-3 py-2 rounded">
                <div className="font-medium">CHANIE</div>
                <div className="text-white/70">Agréé depuis mai 2014</div>
              </div>
              <div className="bg-white/10 px-3 py-2 rounded">
                <div className="font-medium">ANDE</div>
                <div className="text-white/70">Études environnementales</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/70 mb-4 md:mb-0">
            © {currentYear} BANI - Bureau d'Études. Tous droits réservés.
          </div>
          <div className="text-sm text-white/70">
            Expertise et innovation au service du développement durable
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;