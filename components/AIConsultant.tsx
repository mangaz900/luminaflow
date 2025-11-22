import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { Message } from '../types';
import { sendChatMessage } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: 'Hej! Jag är din personliga hårexpert. Berätta lite om din situation (t.ex. stress, klimakteriet, eller tunna vikar) så rekommenderar jag den behandlingskur som passar dig bäst.',
      timestamp: new Date()
    }
  ]);
  
  const historyRef = useRef<{role: string, parts: {text: string}[]}[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setIsLoading(true);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    try {
      const responseText = await sendChatMessage(historyRef.current, userText);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

      historyRef.current.push(
          { role: 'user', parts: [{ text: userText }] },
          { role: 'model', parts: [{ text: responseText }] }
      );

    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Förlåt, jag tappade tråden lite. Kan du försöka igen?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-expert" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-medical-900 mb-4">Få en personlig behandlingsplan</h2>
          <p className="text-gray-600">
            Chatta med vår AI-trikolog. Den analyserar dina behov och rekommenderar rätt paket för just ditt hår.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-medical-100 overflow-hidden flex flex-col h-[600px]">
          
          {/* Chat Header */}
          <div className="bg-medical-900 p-4 flex items-center gap-3">
            <div className="bg-medical-500 p-2 rounded-full">
              <Bot className="text-white w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-medium">Lumina Expert</h3>
              <p className="text-medical-200 text-xs">Specialist på hårväxt</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[80%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-gray-200' : 'bg-medical-100'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} className="text-medical-700" />}
                  </div>
                  
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-medical-900 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                 <div className="flex gap-3 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-medical-100">
                        <Bot size={16} className="text-medical-700" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 flex items-center">
                         <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Beskriv ditt hår (t.ex. 'tappar hår efter graviditet')..."
                className="flex-1 bg-gray-100 border-0 rounded-full px-6 py-3 focus:ring-2 focus:ring-medical-400 focus:outline-none text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-medical-900 text-white p-3 rounded-full hover:bg-medical-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIConsultant;