import { useState, useRef } from 'react';
import { MessageSquare, X, Send, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel de BANI. Posez-moi toutes vos questions sur nos services d'ingénierie et d'études environnementales !",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const BANI_CONTEXT = `
Tu es l'assistant virtuel de BANI, un bureau d'étude ivoirien spécialisé en génie civil, génie rural et environnement.

INFORMATIONS SUR BANI :
- Nom : Bureau d'Étude BANI
- Fondé : 09 février 2010
- Directeur : M. Jean-Jacques Dewellet KOUAKOU, Ingénieur du Génie Rural diplômé de l'EIER
- Mission : Solutions d'ingénierie fiables, innovantes et durables
- Vision : Devenir un acteur de référence en Côte d'Ivoire et en Afrique de l'Ouest

AGRÉMENTS ET CERTIFICATIONS :
- Agréé CHA.N.I.E depuis mai 2014
- Agréé ANDE pour études environnementales
- Certifié ISO 9001:2015

SERVICES :
- Études techniques en génie civil et rural
- Évaluations environnementales stratégiques
- Études d'impact environnemental et social
- Audits environnementaux
- Conseil et expertise

CONTACT :
- Email : info@bani-ci.net
- Téléphone : +225 27 23 48 52 01
- WhatsApp : +225 07 67 15 64 96

Réponds de manière professionnelle, précise et bienveillante. Utilise tes connaissances sur BANI pour donner des réponses pertinentes.
`;

  const sendToAI = async (message: string) => {
    if (!apiKey) {
      setShowApiKeyInput(true);
      toast.error("Veuillez configurer votre clé API OpenAI pour activer la conversation IA");
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-5-mini-2025-08-07',
          messages: [
            {
              role: 'system',
              content: BANI_CONTEXT
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 429) {
          addMessage("⚠️ Votre quota API OpenAI est dépassé. Veuillez vérifier votre plan de facturation sur OpenAI ou renouveler votre quota. En attendant, n'hésitez pas à nous contacter directement via WhatsApp.", true);
          toast.error("Quota API dépassé");
          return;
        }
        throw new Error(`Erreur API OpenAI: ${errorData.error?.message || 'Erreur inconnue'}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || "Désolé, je n'ai pas pu traiter votre demande.";
      
      addMessage(aiResponse, true);
    } catch (error) {
      console.error('Erreur lors de l\'appel à l\'API:', error);
      addMessage("Désolé, je rencontre des difficultés techniques. Veuillez réessayer ou nous contacter directement.", true);
      toast.error("Erreur de connexion avec l'IA");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!currentInput.trim()) return;
    
    const userMessage = currentInput.trim();
    setCurrentInput('');
    addMessage(userMessage, false);
    
    await sendToAI(userMessage);
    setTimeout(scrollToBottom, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };


  const addMessage = (text: string, isBot: boolean = false) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };


  const handleWhatsAppTransfer = () => {
    const phoneNumber = '+2250767156496';
    const message = encodeURIComponent('Bonjour, je viens du chatbot du site BANI et j\'aimerais obtenir plus d\'informations.');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-primary hover:bg-primary-light text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Ouvrir le chatbot"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-24 left-6 z-40 w-80 h-96 shadow-2xl border border-primary/20">
          <CardHeader className="bg-primary text-white rounded-t-lg">
            <CardTitle className="text-lg">Assistant BANI</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-80">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-muted text-foreground'
                          : 'bg-primary text-white'
                      }`}
                    >
                      <div className="whitespace-pre-line">{message.text}</div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground p-3 rounded-lg text-sm flex items-center">
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      En cours de réponse...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* API Key Input */}
            {showApiKeyInput && (
              <div className="p-4 border-t bg-yellow-50 dark:bg-yellow-900/20">
                <p className="text-xs text-muted-foreground mb-2">Clé API OpenAI :</p>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    placeholder="sk-..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="text-xs"
                  />
                  <Button
                    size="sm"
                    onClick={() => {
                      if (apiKey) {
                        setShowApiKeyInput(false);
                        toast.success("Clé API configurée !");
                      }
                    }}
                  >
                    OK
                  </Button>
                </div>
              </div>
            )}

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  disabled={isLoading}
                  className="text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !currentInput.trim()}
                  size="sm"
                >
                  <Send size={16} />
                </Button>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-3">
                <Button
                  onClick={handleWhatsAppTransfer}
                  className="w-full bg-[#25D366] hover:bg-[#20B858] text-white"
                  size="sm"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Continuer sur WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;