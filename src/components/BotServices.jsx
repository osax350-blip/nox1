import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTelegramPlane, FaChartLine, FaCogs } from 'react-icons/fa';

const botFeatures = [
  { icon: <FaWhatsapp className="text-3xl" />, title: 'بوتات واتساب', desc: 'إرسال رسائل تلقائية، ردود ذكية، ربط مع CRM، وأنظمة الحجوزات عبر واتساب.' },
  { icon: <FaTelegramPlane className="text-3xl" />, title: 'بوتات تليجرام', desc: 'بوتات تفاعلية، قنوات أوتوماتيكية، ألعاب، استطلاعات، وأتمتة كاملة للمجموعات.' },
  { icon: <FaChartLine className="text-3xl" />, title: 'تحليلات متقدمة', desc: 'تتبع أداء البوتات، تقارير تفاعل المستخدمين، وإحصائيات دقيقة.' },
  { icon: <FaCogs className="text-3xl" />, title: 'تكامل مخصص', desc: 'ربط البوتات بقواعد البيانات، بوابات الدفع، وخدمات خارجية حسب متطلبات عملك.' },
];

const BotServices = () => {
  return (
    <section id="bots" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">بوتات واتساب وتليجرام احترافية</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">أتمتة التواصل مع عملائك وزيادة المبيعات عبر بوتات ذكية تعمل على مدار الساعة</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {botFeatures.map((item, idx) => (
            <div key={idx} className="bg-indigo-50/40 rounded-xl p-6 text-center transition hover:shadow-lg group">
              <div className="flex justify-center mb-4 text-indigo-600 group-hover:scale-110 transition">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact?service=bots" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-bold shadow-md transition cursor-pointer">
            اطلب بوتك الآن
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BotServices;
