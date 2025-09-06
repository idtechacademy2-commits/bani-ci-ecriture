import { Card, CardContent } from '@/components/ui/card';
import { Calendar, GraduationCap, Shield, Award, CheckCircle2, Building2 } from 'lucide-react';
const AboutSection = () => {
  return <section id="apropos" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            À propos de BANI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto"> BANI Ingénieur-Conseil est un bureau d’étude ivoirien 
de type privé qui a été créé le 9 février 2010. Il est 
dirigé par M. Jean-Jacques Dewellet KOUAKOU, Ingé
nieur du Génie Rural, diplômé de la prestigieuse Ecole 
Inter Etats d’Ingénieurs de l’Equipement Rural (EIER) 
de Ouagadougou au Burkina Faso.
 BANI est agrée par la Chambre Nationale des 
Ingénieurs Conseils et Expertsn de Génie Civil 
(CHA.N.I.E) depuis le mois de Mai 2014
 Par ailleurs, BANI dispose de l’agrément de l’Agence 
Nationale De l’Environnement (ANDE) lui permettant 
de mener des études d’évaluation environnementale 
stratégique, des études d’impact environnemental et 
social et des audits environnementaux.
 De plus, elle dispose d’un agrément du Ministère de la 
Construction du Logement, de l’Assainissement et de 
l’Urbanisme.
 Et en fin, BANI est inscrit à la chambre du commerce 
et de l’industrie de Côte d’Ivoire
        </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Histoire et Direction */}
          <div className="space-y-8">
            <Card className="shadow-card-hover hover:shadow-professional transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Calendar className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Création et Histoire</h3>
                    <p className="text-muted-foreground">
                      Fondé le <strong>9 février 2010</strong>, BANI s'est imposé comme un acteur majeur 
                      du secteur des études techniques et environnementales en Côte d'Ivoire.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-hover hover:shadow-professional transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <GraduationCap className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Direction Experte</h3>
                    <p className="text-muted-foreground">
                      Dirigé par <strong>M. Jean-Jacques Dewellet KOUAKOU</strong>, 
                      Ingénieur du Génie Rural diplômé de l'EIER (École Inter États d'Ingénieurs 
                      de l'Équipement Rural) de Ouagadougou, Burkina Faso.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications et Agréments */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Agréments & Certifications</h3>
            
            <div className="space-y-4">
              <Card className="bg-accent border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Shield className="text-primary" size={24} />
                    <div>
                      <h4 className="font-semibold text-primary">CHANIE</h4>
                      <p className="text-sm text-muted-foreground">
                        Agréé par la Chambre Nationale des Ingénieurs Conseils 
                        et Experts de Génie Civil depuis mai 2014
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Building2 className="text-secondary" size={24} />
                    <div>
                      <h4 className="font-semibold text-primary">ANDE</h4>
                      <p className="text-sm text-muted-foreground">
                        Agréé par l'Agence Nationale De l'Environnement pour :
                      </p>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• Études d'évaluation environnementale stratégique</li>
                        <li>• Études d'impact environnemental et social</li>
                        <li>• Audits environnementaux</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Award className="text-primary" size={24} />
                    <div>
                      <h4 className="font-semibold text-primary">ISO 9001:2015</h4>
                      <p className="text-sm text-muted-foreground">
                        Certification ISO 9001 version 2015 pour le management 
                        de la qualité et l'amélioration continue
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Building2 className="text-primary" size={24} />
                    <div>
                      <h4 className="font-semibold text-primary">Ministère de la Construction</h4>
                      <p className="text-sm text-muted-foreground">
                        Agrément du Ministère de la Construction, du Logement, 
                        de l'Assainissement et de l'Urbanisme
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="text-secondary" size={24} />
                    <div>
                      <h4 className="font-semibold text-primary">CCI Côte d'Ivoire</h4>
                      <p className="text-sm text-muted-foreground">
                        Inscrit à la Chambre de Commerce et d'Industrie 
                        de Côte d'Ivoire
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Démarche Qualité */}
        <Card className="bg-gradient-green text-white shadow-professional">
          <CardContent className="p-8 text-center">
            <CheckCircle2 className="mx-auto mb-4 text-white" size={48} />
            <h3 className="text-2xl font-bold mb-4">Notre Démarche Qualité</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Chez BANI, nous nous engageons dans une démarche d'amélioration continue, 
              garantissant la qualité de nos prestations grâce à notre certification ISO 9001:2015 
              et notre respect des normes les plus exigeantes du secteur.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default AboutSection;