import { useState, createContext, useContext, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.environment': 'Environnement',
    'nav.about': 'À propos',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Common CTAs
    'cta.discover': 'Découvrir nos services',
    'cta.quote': 'Demander un devis',
    'cta.consultation': 'Obtenir une consultation gratuite',
    'cta.contact': 'Nous contacter',
    
    // Company info
    'company.name': 'Bureau d\'Étude BANI',
    'company.tagline': 'Expertise et innovation au service du développement durable',
    'company.description': 'Depuis 2010, BANI accompagne vos projets en génie civil, rural et environnement.',
    
    // Footer
    'footer.description': 'Bureau d\'études ivoirien spécialisé en génie civil, rural et environnement depuis 2010.',
    'footer.certifications': 'Certifications & Agréments',
    'footer.contact': 'Contact',
    'footer.email': 'Email',
    'footer.phone': 'Téléphone',
    'footer.location': 'Localisation',
    'footer.copyright': 'Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.environment': 'Environment',
    'nav.about': 'About Us',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Common CTAs
    'cta.discover': 'Explore Our Services',
    'cta.quote': 'Request a Quote',
    'cta.consultation': 'Get a Free Consultation',
    'cta.contact': 'Contact Us',
    
    // Company info
    'company.name': 'BANI Engineering Office',
    'company.tagline': 'Expertise and innovation for sustainable development',
    'company.description': 'Since 2010, BANI delivers engineering and environmental expertise.',
    
    // Footer
    'footer.description': 'Ivorian engineering office specialized in civil, rural and environmental studies since 2010.',
    'footer.certifications': 'Certifications & Accreditations',
    'footer.contact': 'Contact',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.location': 'Location',
    'footer.copyright': 'All rights reserved.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};