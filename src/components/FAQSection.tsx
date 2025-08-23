import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Lightbulb, Sparkles, Target, Users, Award, Rocket } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      icon: Lightbulb,
      question: "Quels types d'études BANI réalise-t-il ?",
      answer: "BANI réalise une gamme complète d'études techniques et environnementales : études de faisabilité en génie civil et rural, évaluations environnementales stratégiques, études d'impact environnemental et social, audits environnementaux, ainsi que du conseil et de l'expertise technique spécialisée.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Award,
      question: "BANI est-il certifié et agréé par les autorités compétentes ?",
      answer: "Oui, BANI dispose de tous les agréments nécessaires : agréé par la Chambre Nationale des Ingénieurs Conseils et Experts de Génie Civil (CHANIE) depuis mai 2014, agréé par l'Agence Nationale De l'Environnement (ANDE) pour les études environnementales, et certifié ISO 9001:2015 pour le management de la qualité.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: Users,
      question: "Comment collaborer avec BANI sur un projet ?",
      answer: "Pour collaborer avec BANI, contactez-nous par email à info@bani-ci.net ou par téléphone au +225 27 23 48 52 01. Nous étudierons ensemble vos besoins, définirons le cahier des charges et vous proposerons une solution adaptée avec un devis détaillé. Notre équipe vous accompagne de la conception à la réalisation.",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Target,
      question: "Dans quels secteurs BANI intervient-il ?",
      answer: "BANI intervient dans de nombreux secteurs : infrastructures publiques et privées, aménagement rural et urbain, projets industriels, secteur agricole, mines et carrières, énergies renouvelables, gestion des ressources en eau, et tous projets nécessitant des études d'impact environnemental.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Sparkles,
      question: "Comment obtenir un devis ?",
      answer: "Pour obtenir un devis, contactez-nous en précisant la nature de votre projet, sa localisation, ses objectifs et le délai souhaité. Nous vous proposerons rapidement une offre technique et financière adaptée à vos besoins spécifiques. Nos devis sont gratuits et sans engagement.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Rocket,
      question: "Quels sont les délais de réalisation des études ?",
      answer: "Les délais varient selon la complexité et l'ampleur du projet. Une étude d'impact peut prendre de 2 à 6 mois, tandis qu'une expertise technique peut être réalisée en quelques semaines. Nous nous engageons toujours sur des délais réalistes et respectons scrupuleusement nos engagements.",
      color: "from-rose-400 to-red-500"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-background via-accent/10 to-secondary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in shadow-lg">
            <Sparkles size={18} className="animate-pulse" />
            Questions fréquentes
            <Sparkles size={18} className="animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Des réponses qui
            </span>
            <br />
            <span className="text-primary animate-bounce inline-block">
              inspirent l'avenir ! 
            </span>
            <Rocket className="inline-block ml-4 text-secondary animate-bounce" size={60} />
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in">
            🌟 Découvrez comment BANI transforme les idées en réalité ! 
            Chaque question ouvre la porte à de nouvelles possibilités pour 
            <span className="font-semibold text-primary"> votre avenir professionnel</span> et celui de vos enfants.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 md:gap-8">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <Card 
                  key={index} 
                  className={`group overflow-hidden transition-all duration-500 hover-scale cursor-pointer ${
                    openIndex === index 
                      ? 'shadow-2xl border-2 border-primary/40 bg-gradient-to-r from-primary/5 to-secondary/5' 
                      : 'shadow-xl hover:shadow-2xl border border-primary/20 hover:border-primary/40'
                  } backdrop-blur-sm`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left"
                  >
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className={`relative p-3 rounded-2xl transition-all duration-500 ${
                            openIndex === index 
                              ? `bg-gradient-to-br ${faq.color} text-white shadow-lg scale-110` 
                              : 'bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:scale-105'
                          }`}>
                            <IconComponent size={24} className={openIndex === index ? 'animate-pulse' : ''} />
                            {openIndex === index && (
                              <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-2xl animate-pulse"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-xl font-bold transition-colors duration-300 ${
                              openIndex === index ? 'text-primary' : 'text-foreground group-hover:text-primary'
                            }`}>
                              {faq.question}
                            </h3>
                            {openIndex === index && (
                              <div className="mt-4 animate-fade-in">
                                <div className="w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mb-4 animate-pulse"></div>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={`ml-4 transition-all duration-500 p-2 rounded-full ${
                          openIndex === index 
                            ? 'text-primary bg-primary/10 rotate-180 scale-110' 
                            : 'text-muted-foreground group-hover:text-primary group-hover:bg-primary/5'
                        }`}>
                          <ChevronDown size={24} className="transition-transform duration-500" />
                        </div>
                      </div>
                    </CardContent>
                  </button>
                </Card>
              );
            })}
          </div>

          {/* Inspirational CTA section */}
          <Card className="mt-16 bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"></div>
            
            <CardContent className="p-12 text-center relative z-10">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-2">
                  <Sparkles className="text-yellow-300 animate-pulse" size={40} />
                  <Rocket className="text-white animate-bounce" size={40} />
                  <Sparkles className="text-yellow-300 animate-pulse" size={40} />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
                🚀 Prêt à bâtir l'avenir ensemble ?
              </h3>
              <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                💡 <strong>Inspirez vos enfants</strong> en leur montrant que chaque grand projet commence par une question. 
                Chez BANI, nous transformons les rêves en réalité grâce à notre expertise et notre passion pour l'innovation !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="mailto:info@bani-ci.net" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <Sparkles className="mr-2 group-hover:animate-pulse" size={20} />
                  Lancez votre projet
                </a>
                <a 
                  href="tel:+22527234852 01" 
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  <Target className="mr-2 group-hover:animate-spin" size={20} />
                  Parlons ensemble
                </a>
              </div>
              
              <div className="mt-8 text-white/80 text-sm">
                ⭐ Plus de 10 ans d'expérience • 🏆 Certifié ISO 9001:2015 • 🌱 Innovation durable
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;