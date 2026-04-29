import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { chatWithConsultant } from '../services/vnptService';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Dạ, VNPT TP.HCM xin chào! Em là trợ lý số, chuyên trách khu vực Hồ Chí Minh. Anh/Chị đang quan tâm đến lắp đặt Internet FiberVNN, VinaPhone 5G hay các giải pháp số cho doanh nghiệp ạ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages = [...messages, { role: 'user' as const, content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await chatWithConsultant(newMessages);
      setMessages([...newMessages, { role: 'model', content: response || 'Dạ, em xin lỗi, có chút gián đoạn kết nối. Anh/Chị có thể nhắc lại câu hỏi được không ạ?' }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: 'model', content: 'Hệ thống đang bận một chút, Anh/Chị nhấn "Làm mới" để em hỗ trợ tiếp nhé!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="ai-chat" className="flex flex-col h-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-[#0070c0] p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-md">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm">Chuyên gia Tư vấn VNPT</h3>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] opacity-80 uppercase tracking-tighter">Đang trực tuyến • TP.HCM</span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setMessages([{ role: 'model', content: 'Dạ, VNPT TP.HCM nghe đây ạ! Em có thể giúp gì cho Anh/Chị?' }])}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          title="Làm mới hội thoại"
        >
          <RefreshCcw className="w-4 h-4" />
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-gray-200' : 'bg-[#0070c0] text-white'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-white text-gray-800 rounded-tr-none border border-gray-100' 
                  : 'bg-[#0070c0] text-white rounded-tl-none'
                }`}>
                  <div className="prose prose-sm prose-invert max-w-none">
                    <ReactMarkdown>
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex gap-3 items-center text-gray-400 text-xs ml-11 italic">
                <Loader2 className="w-3 h-3 animate-spin" />
                Đang tìm giải pháp tối ưu cho Anh/Chị...
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ví dụ: Gói cước Fiber Quận 7..."
            className="w-full pl-4 pr-12 py-3 bg-gray-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#0070c0] outline-none transition-all"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#0070c0] hover:bg-white rounded-lg transition-colors disabled:opacity-30"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="mt-2 text-[10px] text-gray-400 text-center uppercase tracking-widest font-medium">Hỗ trợ 24/7 trực tiếp từ VNPT TP.HCM</p>
      </div>
    </div>
  );
};
