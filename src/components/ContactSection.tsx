import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto URL with form data
    const subject = `Demande de contact - ${formData.project}`;
    const body = `
Nom: ${formData.name}
Email: ${formData.email}
Société: ${formData.company}
Type de projet: ${formData.project}

Message:
${formData.message}
    `.trim();
    
    const mailtoUrl = `mailto:info@bani-ci.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    
    toast({
      title: "Message préparé",
      description: "Votre client de messagerie va s'ouvrir avec votre message pré-rempli.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      project: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Parlons de votre projet. Notre équipe d'experts est prête à vous accompagner 
            dans la réalisation de vos ambitions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card-hover hover:shadow-professional transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Nos coordonnées
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <a 
                        href="mailto:info@bani-ci.net" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@bani-ci.net
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Phone className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Téléphone</h4>
                      <a 
                        href="tel:+22527234852 01" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +225 27 23 48 52 01
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Localisation</h4>
                      <p className="text-muted-foreground">
                        Côte d'Ivoire
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Clock className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Horaires</h4>
                      <p className="text-muted-foreground">
                        Lundi - Vendredi : 8h00 - 17h00<br />
                        Samedi : 8h00 - 12h00
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why contact us */}
            <Card className="bg-gradient-hero text-white shadow-professional">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Pourquoi nous choisir ?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 size={20} className="text-green-300" />
                    <span>Réponse rapide sous 24h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 size={20} className="text-green-300" />
                    <span>Devis gratuit et détaillé</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 size={20} className="text-green-300" />
                    <span>Expertise certifiée ISO 9001</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 size={20} className="text-green-300" />
                    <span>Accompagnement personnalisé</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-professional">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Décrivez-nous votre projet
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Société / Organisation
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Nom de votre société"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Type de projet *
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    <option value="Étude technique génie civil">Étude technique génie civil</option>
                    <option value="Évaluation environnementale stratégique">Évaluation environnementale stratégique</option>
                    <option value="Étude d'impact environnemental">Étude d'impact environnemental</option>
                    <option value="Audit environnemental">Audit environnemental</option>
                    <option value="Conseil et expertise">Conseil et expertise</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                    placeholder="Décrivez votre projet, vos besoins, vos délais et toute information utile..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-hero text-white hover:opacity-90 transition-opacity py-3 text-lg font-semibold"
                >
                  <Send className="mr-2" size={20} />
                  Envoyer la demande
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;