import { useState } from 'react';
import { MessageSquare, X, Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel de BANI. Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  const quickReplies = [
    {
      question: "Quels services proposez-vous ?",
      answer: "BANI propose plusieurs services :\n• Études techniques en génie civil et rural\n• Évaluations environnementales stratégiques\n• Études d'impact environnemental et social\n• Audits environnementaux\n• Conseil et expertise"
    },
    {
      question: "Comment obtenir un devis ?",
      answer: "Pour obtenir un devis, vous pouvez :\n• Nous contacter par email : info@bani-ci.net\n• Nous appeler au +225 27 23 48 52 01\n• Utiliser notre formulaire de contact sur le site\n\nNous vous fournirons un devis personnalisé dans les meilleurs délais."
    },
    {
      question: "Êtes-vous certifiés/agréés ?",
      answer: "Oui, BANI dispose de plusieurs certifications :\n• Agréé CHA.N.I.E depuis mai 2014\n• Agréé ANDE pour les études environnementales\n• Certifié ISO 9001:2015\n\nCes agréments garantissent la qualité de nos services."
    },
    {
      question: "Comment vous contacter ?",
      answer: "Vous pouvez nous contacter :\n• Email : info@bani-ci.net\n• Téléphone : +225 27 23 48 52 01\n• Via WhatsApp en cliquant sur le bouton vert\n• Depuis notre formulaire de contact"
    }
  ];

  const addMessage = (text: string, isBot: boolean = false) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleQuickReply = (reply: typeof quickReplies[0]) => {
    addMessage(reply.question, false);
    setTimeout(() => {
      addMessage(reply.answer, true);
    }, 500);
  };

  const handleWhatsAppTransfer = () => {
    const phoneNumber = '+22507671564696';
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
              </div>
            </ScrollArea>

            {/* Quick Replies */}
            <div className="p-4 border-t bg-accent/10">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground mb-2">Questions fréquentes :</p>
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start text-xs h-auto py-2"
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply.question}
                  </Button>
                ))}
                <Button
                  onClick={handleWhatsAppTransfer}
                  className="w-full mt-2 bg-[#25D366] hover:bg-[#20B858] text-white"
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