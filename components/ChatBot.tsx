import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, ChevronRight, Briefcase, User, Info, Terminal } from 'lucide-react';
import { SERVICES, LEADERSHIP, MOCK_EMPLOYEES, ABOUT_CONTENT } from '../data';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

type ChatContext = 'general' | 'services' | 'leadership' | 'about' | 'bio-gen';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [context, setContext] = useState<ChatContext>('general');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hello! I'm AM-AI. How can I assist you with our tech ecosystem today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  // --- Dynamic Suggestions ---
  const getSuggestions = () => {
    switch (context) {
      case 'services': return [...SERVICES.slice(0, 3).map(s => s.title), "View All Services", "Back to Menu"];
      case 'leadership': return ["Who is the CEO?", "Who is the CTO?", "Leadership Vision", "Back to Menu"];
      case 'about': return ["Company History", "Core Values", "Location", "Back to Menu"];
      default: return ["Services", "Leadership", "About Us"];
    }
  };

  const handleSuggestionClick = (text: string) => {
    if (text === "Back to Menu") {
      setContext('general');
      setMessages(prev => [...prev, { id: Date.now().toString(), text: "Main menu. What's next?", sender: 'bot' }]);
      return;
    }
    // if (text === "Cancel Bio Generation") {
    //   setContext('general');
    //   setMessages(prev => [...prev, { id: Date.now().toString(), text: "Bio generation cancelled.", sender: 'bot' }]);
    //   return;
    // }
    handleSend(text);
  };

  const generateResponse = (text: string): string => {
    const lower = text.toLowerCase();
    // if (context === 'bio-gen') {
    //   setContext('general');
    //   return `Bio Draft:\n\n"${text} is a dedicated professional at AM Tech Hub. Leveraging their expertise, they drive innovation and excellence within their team."`;
    // }
    if (lower.includes('service') || lower.includes('offer')) {
      setContext('services');
      return `We offer: ${SERVICES.map(s => s.title).join(', ')}.`;
    }
    if (lower.includes('leadership') || lower.includes('ceo')) {
      setContext('leadership');
      return `Led by ${LEADERSHIP[0].name}. Ask me more.`;
    }
    if (lower.includes('about') || lower.includes('history')) {
      setContext('about');
      return "AM Tech Hub is built on strong values. Ask about History or Values.";
    }
    // if (lower.includes('generate bio')) {
    //   setContext('bio-gen');
    //   return "Entering Bio Mode. Type employee details.";
    // }

    const foundLeader = LEADERSHIP.find(l => lower.includes(l.name.toLowerCase()));
    if (foundLeader) return `${foundLeader.name}: ${foundLeader.role}. ${foundLeader.bio}`;

    const foundService = SERVICES.find(s => lower.includes(s.title.toLowerCase()));
    if (foundService) return `**${foundService.title}**: ${foundService.description}`;

    if (lower.includes('history')) return ABOUT_CONTENT.history;
    if (lower.includes('values')) return `Values: ${ABOUT_CONTENT.values.map(v => v.title).join(', ')}.`;

    return "I can help with Services, Leadership, or Company Info. Try the suggestions!";
  };

  const handleSend = (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;
    
    const userMsg: Message = { id: Date.now().toString(), text: textToSend, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateResponse(textToSend);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: responseText, sender: 'bot' }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-[0_0_30px_var(--color-accent)] transition-all group ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-accent text-white'}`}
      >
        <MessageSquare size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 h-[600px] max-h-[80vh] glass-card rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="p-5 flex justify-between items-center border-b border-white/10 bg-primary-light/80 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent to-purple-500 flex items-center justify-center text-white shadow-lg">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-text-main text-sm font-display tracking-wide">AM-AI Assistant</h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-accent font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> 
                    Online
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-text-muted hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/10" ref={scrollRef}>
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-2 mt-1 shrink-0">
                      <Sparkles size={14} className="text-accent" />
                    </div>
                  )}
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow-sm backdrop-blur-md ${
                    msg.sender === 'user' 
                      ? 'bg-accent/80 text-white rounded-br-none border border-accent/20' 
                      : 'bg-white/5 text-text-main border border-white/10 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                 <div className="flex justify-start">
                   <div className="bg-white/5 p-4 rounded-2xl rounded-bl-none flex gap-1.5 items-center border border-white/10 ml-10">
                     <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce"></span>
                     <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                     <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                   </div>
                 </div>
              )}
            </div>

            {/* Chips */}
            <div className="px-4 pb-2 bg-black/10 overflow-x-auto whitespace-nowrap custom-scrollbar flex gap-2">
                {getSuggestions().map((s, i) => (
                    <button 
                        key={i} 
                        onClick={() => handleSuggestionClick(s)}
                        className="text-[10px] px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 mb-2 border bg-white/5 border-white/10 hover:border-accent hover:text-accent hover:bg-white/10 text-text-muted"
                    >
                        {context === 'bio-gen' && <Terminal size={10} />}
                        {context === 'services' && <Briefcase size={10} />}
                        {s} <ChevronRight size={10} />
                    </button>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-primary-light/50 border-t border-white/10">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type message..."
                  className="w-full bg-black/20 border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-sm text-text-main outline-none focus:border-accent focus:bg-black/30 transition-all placeholder:text-text-muted/50"
                  autoFocus
                />
                <button 
                  onClick={() => handleSend()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors shadow-lg shadow-accent/20"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;