import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+22507671564696';
    const message = encodeURIComponent('Bonjour 👋, merci de contacter BANI. Comment pouvons-nous vous aider aujourd\'hui ?');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20B858] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-pulse" />
    </button>
  );
};

export default WhatsAppButton;