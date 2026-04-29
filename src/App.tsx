import React from 'react';
import { Header } from './components/Header';
import { ChatInterface } from './components/ChatInterface';
import { ServiceGrid } from './components/ServiceGrid';
import { ContactForm } from './components/ContactForm';
import { ShieldCheck, Zap, Award, Users, ArrowUpRight, Smartphone, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfdfe] font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#0070c0] rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                <Zap className="w-3 h-3" />
                Dẫn đầu kỷ nguyên số 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6">
                Kết nối <span className="text-[#0070c0]">siêu tốc</span><br />
                Vươn tầm tương lai.
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                VNPT TP.HCM đồng hành cùng sự phát triển của Thành phố, cung cấp giải pháp Internet Mesh 6 và hệ sinh thái Số 5G toàn diện cho cá nhân & doanh nghiệp.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-bold text-gray-700 underline underline-offset-4 decoration-green-100">Bảo mật đa tầng</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-bold text-gray-700 underline underline-offset-4 decoration-yellow-100">Dịch vụ xuất sắc</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-bold text-gray-700 underline underline-offset-4 decoration-blue-100">Tư vấn tận tâm</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <ChatInterface />
            </motion.div>
            
            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24">
          {[
            { label: "Băng thông", val: "10 Gbps", sub: "Khả năng hạ tầng" },
            { label: "Phủ sóng 5G", val: "99.9%", sub: "Khu vực TP.HCM" },
            { label: "Triển khai", val: "< 24 Giờ", sub: "Cam kết lắp đặt" },
            { label: "Digital Apps", val: "500+", sub: "Giải pháp DN/Hộ KD" },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-[#0070c0] mb-1">{stat.val}</p>
              <p className="text-[10px] font-medium text-gray-400">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <ServiceGrid />

        {/* Survey & CTA Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0070c0] rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Khởi đầu hành trình số ngay hôm nay.
            </h2>
            <p className="text-blue-100 mb-8 max-w-md leading-relaxed">
              Dù Anh/Chị ở Quận 1 nhộn nhịp hay Củ Chi thanh bình, đội ngũ VNPT TP.HCM luôn sẵn sàng có mặt để hỗ trợ lắp đặt và tư vấn tận nơi.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="font-bold text-sm">Chăm sóc khách hàng: 1800 1166</p>
                  <p className="text-xs text-blue-200 uppercase tracking-wider">Hỗ trợ 24/7 (Miễn phí cước gọi)</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs text-blue-50 leading-snug">
                  Đặc quyền HCM: Tặng ngay Voucher VinaPhone 5G khi đăng ký combo FiberVNN trong tháng này.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <ContactForm />
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#0070c0] rounded-full flex items-center justify-center">
                  <Globe className="text-white w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">VNPT TP.HCM</h3>
              </div>
              <p className="text-xs text-gray-500 max-w-sm">
                Tòa nhà VNPT TP.HCM, Số 121 Pasteur, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh.
              </p>
            </div>
            
            <div className="flex gap-12">
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Dịch vụ</h4>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li><a href="#" className="hover:text-[#0070c0]">Cá nhân & Gia đình</a></li>
                  <li><a href="#" className="hover:text-[#0070c0]">Doanh nghiệp</a></li>
                  <li><a href="#" className="hover:text-[#0070c0]">Chính quyền số</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Hỗ trợ</h4>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li><a href="#" className="hover:text-[#0070c0]">Tra cứu hóa đơn</a></li>
                  <li><a href="#" className="hover:text-[#0070c0]">Báo hỏng Internet</a></li>
                  <li><a href="#" className="hover:text-[#0070c0]">Điểm giao dịch</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-50 mt-12 pt-8 text-center">
             <p className="text-[10px] text-gray-400 font-medium">© 2026 VIỄN THÔNG TP. HỒ CHÍ MINH. MỌI QUYỀN ĐƯỢC BẢO LƯU.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
