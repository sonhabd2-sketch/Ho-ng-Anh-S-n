import React from 'react';
import { Wifi, Smartphone, Briefcase, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Internet FiberVNN",
    desc: "Mesh Wifi 6 tốc độ cao, xuyên tường mạnh mẽ cho nhà phố & chung cư.",
    features: ["Băng thông 1Gbps+", "Mesh Wifi miễn phí", "Miễn phí lắp đặt"],
    color: "bg-blue-50 text-blue-600",
    linkText: "Xem gói cước HCM"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "VinaPhone 5G",
    desc: "Phủ sóng rộng khắp TP.HCM. SIM số đẹp, gói cước Data không giới hạn.",
    features: ["Tốc độ 1.5Gbps", "Social Media Free", "eSIM nhanh chóng"],
    color: "bg-emerald-50 text-emerald-600",
    linkText: "Chọn số ngay"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Giải pháp Số DX",
    desc: "Chữ ký số SmartCA, Hóa đơn điện tử Invoice-POS cho Doanh nghiệp.",
    features: ["Chuẩn Cục Thuế HCM", "Khai Thuế/BHXH", "Bảo mật tuyệt đối"],
    color: "bg-orange-50 text-orange-600",
    linkText: "Tư vấn doanh nghiệp"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Smart Education",
    desc: "Học tập thông minh & Trợ lý AI dành riêng cho Giáo viên, Học sinh HCMC.",
    features: ["Trợ lý bài tập AI", "Quản lý trường học", "Ưu đãi giáo dục"],
    color: "bg-purple-50 text-purple-600",
    linkText: "Tham gia Smart Edu"
  }
];

export const ServiceGrid: React.FC = () => {
  return (
    <section id="services" className="py-12">
      <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-[10px] font-bold text-[#0070c0] uppercase tracking-[0.2em]">Hệ sinh thái dịch vụ 2026</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Dành riêng cho <span className="text-[#0070c0]">TP. Hồ Chí Minh</span></h2>
        </div>
        <p className="text-sm text-gray-500 max-w-sm text-right">
          Ưu tiên lắp đặt thần tốc cho khu cư dân và hỗ trợ đặc biệt cho Startup tại các Quận trung tâm.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white p-6 rounded-3xl border border-gray-100 hover:border-[#0070c0] hover:shadow-2xl hover:shadow-blue-50 transition-all duration-300 flex flex-col"
          >
            <div className={`p-3 rounded-2xl w-fit mb-4 transition-transform group-hover:scale-110 ${service.color}`}>
              {service.icon}
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-6 flex-1">{service.desc}</p>
            
            <ul className="space-y-2 mb-6">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-medium text-gray-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-gray-50 text-[#0070c0] text-sm font-bold group-hover:bg-[#0070c0] group-hover:text-white transition-all">
              <span>{service.linkText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
