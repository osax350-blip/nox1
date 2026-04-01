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
    <section id="bots" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-slate-100">بوتات واتساب وتليجرام احترافية</h2>
          <div className="accent-divider mx-auto mt-4"></div>
          <p className="mt-4 text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">أتمتة التواصل مع عملائك وزيادة المبيعات عبر بوتات ذكية تعمل على مدار الساعة</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {botFeatures.map((item, idx) => (
            <div key={idx} className="bg-indigo-50/40 dark:bg-slate-800 rounded-xl p-6 text-center transition hover:shadow-lg group border border-transparent dark:border-slate-700">
              <div className="flex justify-center mb-4 text-indigo-600 group-hover:scale-110 transition">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact?service=bots" className="inline-flex items-center gap-2 btn-primary">
            اطلب بوتك الآن
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BotServices;
