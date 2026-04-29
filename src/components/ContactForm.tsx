import React, { useState } from 'react';
import { MapPin, Phone, Send, Calendar, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-blue-50 text-[#0070c0] rounded-full flex items-center justify-center mb-4">
          <Calendar className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Đã ghi nhận yêu cầu</h3>
        <p className="text-gray-500 max-w-xs mx-auto">Chuyên viên kỹ thuật sẽ liên hệ Anh/Chị trong vòng 45p để xác nhận lịch khảo sát hạ tầng.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[#0070c0] font-bold text-sm hover:underline"
        >
          Gửi thêm yêu cầu mới
        </button>
      </div>
    );
  }

  return (
    <div id="survey" className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <MapPin className="w-32 h-32" />
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900">Đặt lịch khảo sát <span className="text-[#0070c0]">siêu tốc</span></h3>
        <p className="text-sm text-gray-500 mt-1">Cam kết triển khai trong 24h tại các điểm có hạ tầng sẵn.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 flex items-center gap-1">
              HỌ VÀ TÊN <span className="text-red-500">*</span>
            </label>
            <input 
              required
              type="text" 
              placeholder="Nguyễn Văn A"
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#0070c0] transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 flex items-center gap-1">
              SỐ ĐIỆN THOẠI <span className="text-red-500">*</span>
            </label>
            <input 
              required
              type="tel" 
              placeholder="091 xxx xxxx"
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#0070c0] transition-all"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-500 flex items-center gap-1">
            ĐỊA CHỈ LẮP ĐẶT (QUẬN/HUYỆN & SỐ NHÀ) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              required
              type="text" 
              placeholder="Số 121, Đường Nguyễn Huệ, Quận 1..."
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#0070c0] transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 flex items-center gap-1">
              LOẠI DỊCH VỤ
            </label>
            <select className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#0070c0] transition-all appearance-none cursor-pointer">
              <option>Internet FiberVNN</option>
              <option>VinaPhone 5G</option>
              <option>Giải pháp Doanh nghiệp</option>
              <option>Học tập Thông minh</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 flex items-center gap-1">
              THỜI GIAN LIÊN HỆ TỐT NHẤT
            </label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#0070c0] transition-all appearance-none cursor-pointer">
                <option>Ngay lập tức (45p)</option>
                <option>Giờ hành chính</option>
                <option>Sau 18h00</option>
                <option>Cuối tuần</option>
              </select>
            </div>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#0070c0] hover:bg-[#005fa3] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-100 hover:shadow-blue-200 mt-4 outline-none"
        >
          <Send className="w-5 h-5" />
          CHỐT LỊCH KHẢO SÁT NGAY
        </button>

        <p className="text-[10px] text-gray-400 text-center uppercase tracking-wide font-medium italic mt-4">
          * Thông tin được bảo mật và xử lý trực tiếp bởi VNPT TP.HCM
        </p>
      </form>
    </div>
  );
};
