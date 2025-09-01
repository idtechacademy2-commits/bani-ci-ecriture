import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex border rounded-md overflow-hidden">
        <Button
          variant={language === 'fr' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('fr')}
          className="rounded-none border-0 h-8 px-3 text-xs"
        >
          🇫🇷 FR
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="rounded-none border-0 h-8 px-3 text-xs"
        >
          🇬🇧 EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;