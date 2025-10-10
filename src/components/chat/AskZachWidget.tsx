import React, { useState, useRef } from 'react';
import { MessageCircle, X, Calendar, Shield, ChevronRight, User } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const preloadedQuestions = [
  "What's the difference between term and whole life insurance?",
  "How much life insurance do I need?",
  "What health insurance plan is best for my family?",
  "How does Florida's insurance market compare to other states?",
  "What are the tax benefits of life insurance?",
  "Should I get supplemental insurance?",
];

export default function AskZachWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: '1',
      text: "Hi! I'm Zach Bradford, your licensed insurance broker. I'm here to answer your insurance questions and help you find the right coverage. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messageIdRef = useRef(2);

  // Event handler - not called during render
   
  const sendMessage = (text: string) => {
    const timestamp = new Date();
    const userId = String(messageIdRef.current++);
    const userMessage: ChatMessage = {
      id: userId,
      text,
      isBot: false,
      timestamp
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: String(messageIdRef.current++),
        text: getBotResponse(text),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };
   

  const getBotResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes('term') && lowerText.includes('whole')) {
      return "Great question! Term life insurance provides temporary coverage for a specific period (10, 20, or 30 years) at lower premiums. Whole life insurance provides permanent coverage with a cash value component but higher premiums. For most young families, term life is the better choice. Would you like me to schedule a consultation to discuss your specific needs?";
    }
    
    if (lowerText.includes('how much') && lowerText.includes('life insurance')) {
      return "The general rule is 10-12 times your annual income, but it depends on your debts, dependents, and financial goals. Our Life Insurance Calculator can give you a personalized estimate. Would you like me to help you calculate your specific needs?";
    }
    
    if (lowerText.includes('health insurance') || lowerText.includes('health plan')) {
      return "Health insurance choice depends on your budget, preferred doctors, and medical needs. In Florida, we work with top carriers like Aetna, Cigna, and UnitedHealthcare. I'd recommend a consultation to review your options and find the best plan for your family. Shall I schedule that for you?";
    }
    
    if (lowerText.includes('florida')) {
      return "Florida's insurance market is unique! We have great options but also specific regulations. As a licensed Florida broker (W347851), I know the ins and outs of our state's market. I'd love to share specific insights about your area. Would you like to schedule a free consultation?";
    }
    
    return "That's a great question! Every insurance situation is unique, and I'd love to give you a detailed, personalized answer. The best way to help you is through a brief consultation where I can understand your specific needs. Would you like me to schedule 15 minutes to discuss this properly?";
  };

  const handleQuestionClick = (question: string) => {
    sendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (currentMessage.trim()) {
        sendMessage(currentMessage.trim());
      }
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          {!isOpen && (
            <div className="hidden sm:block">
              <span className="font-medium">Ask Zach</span>
              <div className="text-xs text-emerald-100">Licensed Broker</div>
            </div>
          )}
        </button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[90vw] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Zach Bradford</h3>
                <div className="text-xs text-emerald-100 flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Licensed FL Broker W347851
                </div>
              </div>
            </div>
            <div className="text-xs text-emerald-100 mt-2">
              Licensed Broker Response Guaranteed
            </div>
          </div>

          {/* Chat Area */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-slate-100 text-slate-800'
                      : 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div className={`text-xs mt-1 ${message.isBot ? 'text-slate-500' : 'text-emerald-100'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 text-slate-800 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <p className="text-sm font-medium text-slate-700 mb-3">Popular Questions:</p>
              <div className="space-y-2">
                {preloadedQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(question)}
                    className="w-full text-left text-sm bg-white border border-slate-200 rounded-lg p-3 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about insurance..."
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
              <button
                onClick={() => currentMessage.trim() && sendMessage(currentMessage.trim())}
                disabled={!currentMessage.trim()}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300 flex items-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mt-3 text-center">
              <a
                href="https://calendly.com/bradfordinformedguidance"
                className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-4 h-4" />
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}