import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Quels types d'études BANI réalise-t-il ?",
      answer: "BANI réalise une gamme complète d'études techniques et environnementales : études de faisabilité en génie civil et rural, évaluations environnementales stratégiques, études d'impact environnemental et social, audits environnementaux, ainsi que du conseil et de l'expertise technique spécialisée."
    },
    {
      question: "BANI est-il certifié et agréé par les autorités compétentes ?",
      answer: "Oui, BANI dispose de tous les agréments nécessaires : agréé par la Chambre Nationale des Ingénieurs Conseils et Experts de Génie Civil (CHANIE) depuis mai 2014, agréé par l'Agence Nationale De l'Environnement (ANDE) pour les études environnementales, et certifié ISO 9001:2015 pour le management de la qualité."
    },
    {
      question: "Comment collaborer avec BANI sur un projet ?",
      answer: "Pour collaborer avec BANI, contactez-nous par email à info@bani-ci.net ou par téléphone au +225 27 23 48 52 01. Nous étudierons ensemble vos besoins, définirons le cahier des charges et vous proposerons une solution adaptée avec un devis détaillé. Notre équipe vous accompagne de la conception à la réalisation."
    },
    {
      question: "Dans quels secteurs BANI intervient-il ?",
      answer: "BANI intervient dans de nombreux secteurs : infrastructures publiques et privées, aménagement rural et urbain, projets industriels, secteur agricole, mines et carrières, énergies renouvelables, gestion des ressources en eau, et tous projets nécessitant des études d'impact environnemental."
    },
    {
      question: "Comment obtenir un devis ?",
      answer: "Pour obtenir un devis, contactez-nous en précisant la nature de votre projet, sa localisation, ses objectifs et le délai souhaité. Nous vous proposerons rapidement une offre technique et financière adaptée à vos besoins spécifiques. Nos devis sont gratuits et sans engagement."
    },
    {
      question: "Quels sont les délais de réalisation des études ?",
      answer: "Les délais varient selon la complexité et l'ampleur du projet. Une étude d'impact peut prendre de 2 à 6 mois, tandis qu'une expertise technique peut être réalisée en quelques semaines. Nous nous engageons toujours sur des délais réalistes et respectons scrupuleusement nos engagements."
    },
    {
      question: "BANI accompagne-t-il ses clients après la livraison des études ?",
      answer: "Absolument. Notre démarche qualité ISO 9001:2015 inclut un suivi post-livraison. Nous restons disponibles pour toute clarification, accompagnons nos clients dans les démarches administratives et proposons des services de suivi et de monitoring des mesures environnementales recommandées."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Questions fréquentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquemment posées 
            sur nos services et notre expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'shadow-professional border-primary/30' 
                    : 'shadow-card-hover hover:shadow-professional'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className={`mt-1 p-1 rounded-full ${
                          openIndex === index 
                            ? 'bg-primary text-white' 
                            : 'bg-accent text-primary'
                        }`}>
                          <HelpCircle size={16} />
                        </div>
                        <h3 className={`text-lg font-semibold ${
                          openIndex === index ? 'text-primary' : 'text-foreground'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`ml-4 transition-transform duration-300 ${
                        openIndex === index ? 'text-primary' : 'text-muted-foreground'
                      }`}>
                        {openIndex === index ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </div>
                    </div>
                    
                    {openIndex === index && (
                      <div className="mt-4 pl-8 animate-in slide-in-from-top-1 duration-300">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </button>
              </Card>
            ))}
          </div>

          {/* Additional help section */}
          <Card className="mt-12 bg-gradient-section border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Vous avez d'autres questions ?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
                et vous accompagner dans vos projets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@bani-ci.net" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-hero text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Nous écrire
                </a>
                <a 
                  href="tel:+22527234852 01" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Nous appeler
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;