'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
const imgLeoAiLogo = "/images/logo.png";

export default function ChatbotLeo() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[360px] bg-[#161616] dark:bg-[#161616] light:bg-white rounded-2xl shadow-2xl border border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] overflow-hidden animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1c6aff] to-[#1c6aff] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2">
                <img 
                  src={imgLeoAiLogo} 
                  alt="Leo AI" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-white">Leo AI Platform</div>
                <div className="text-white/80 text-xs flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-lg p-1.5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 h-[400px] overflow-y-auto bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#F9FAFB]">
            {/* Bot Welcome Message */}
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 bg-[#1c6aff] rounded-full flex items-center justify-center flex-shrink-0 p-1.5">
                <img 
                  src={imgLeoAiLogo} 
                  alt="Leo AI" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-[#161616] dark:bg-[#161616] light:bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[80%] border border-[#222222] dark:border-[#222222] light:border-[#E5E7EB]">
                <p className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] text-sm mb-2">
                  👋 Hi, I'm Leo — your Smart Agent 🤖
                </p>
                <p className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] text-sm">
                  How can I assist you today?
                </p>
              </div>
            </div>

            {/* Sample User Message */}
            <div className="flex gap-3 mb-4 justify-end">
              <div className="bg-[#70BEFA] rounded-2xl rounded-tr-none p-4 shadow-sm max-w-[80%]">
                <p className="text-white text-sm">
                  Tell me about your AI agents
                </p>
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#222222] text-xs flex-shrink-0">
                U
              </div>
            </div>

            {/* Bot Response */}
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 bg-[#1c6aff] rounded-full flex items-center justify-center flex-shrink-0 p-1.5">
                <img 
                  src={imgLeoAiLogo} 
                  alt="Leo AI" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-[#161616] dark:bg-[#161616] light:bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[80%] border border-[#222222] dark:border-[#222222] light:border-[#E5E7EB]">
                <p className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] text-sm mb-3">
                  Great question! 🎯
                </p>
                <p className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] text-sm mb-3">
                  Leo AI Platform offers <span className="text-[#70BEFA]">9 specialized AI agents</span> including:
                </p>
                <ul className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] text-sm space-y-1 mb-3 pl-4">
                  <li className="flex items-start">
                    <span className="text-[#70BEFA] mr-2">•</span>
                    <span>Customer Support AI Agent (24/7)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#70BEFA] mr-2">•</span>
                    <span>Voice AI Agent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#70BEFA] mr-2">•</span>
                    <span>Sales AI Agent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#70BEFA] mr-2">•</span>
                    <span>Omnichannel AI Agent</span>
                  </li>
                </ul>
                <p className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] text-sm">
                  Would you like to know more about a specific agent? 🚀
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#F9FAFB]">
            <form className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-[#161616] dark:bg-[#161616] light:bg-white border border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] rounded-lg px-4 py-2 text-sm text-white dark:text-white light:text-[#0A0A0A] placeholder:text-[#6E7681] dark:placeholder:text-[#6E7681] light:placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#70BEFA]"
              />
              <button
                type="submit"
                className="bg-[#70BEFA] hover:bg-[#5AA8E8] text-white p-2.5 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-[#1c6aff] to-[#70BEFA] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            {/* Pulse Animation */}
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
          </>
        )}
      </button>
    </div>
  );
}
