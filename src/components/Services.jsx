import React from 'react';
import { FaGlobe, FaRobot, FaShoppingCart, FaServer } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaServer className="text-4xl" />,
    title: 'استضافة مواقع مع دومين مخصص',
    desc: 'استضافة سحابية فائقة السرعة، شهادات SSL مجانية، دعم PHP و MySQL، مع دومين احترافي مجاني للسنة الأولى.',
  },
  {
    icon: <FaRobot className="text-4xl" />,
    title: 'إنشاء بوتات تليجرام وواتساب',
    desc: 'بوتات ذكية للرد الآلي، إدارة المجموعات، تسويق، حجوزات، واستقبال الطلبات مع واجهة تحكم كاملة.',
  },
  {
    icon: <FaShoppingCart className="text-4xl" />,
    title: 'إنشاء متاجر إلكترونية',
    desc: 'متاجر احترافية (WooCommerce، Shopify، أو مخصصة) مع بوابات دفع محلية ودولية وإدارة منتجات متطورة.',
  },
  {
    icon: <FaGlobe className="text-4xl" />,
    title: 'مواقع حسب الطلب',
    desc: 'تصميم مواقع شركات، مدونات، منصات تعليمية، أو أنظمة مخصصة باستخدام React, Node.js, Laravel.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">خدماتنا المتكاملة</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">نقدم حلولاً تقنية مبتكرة تناسب جميع أحجام الأعمال، من الأفراد إلى المؤسسات</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-right group">
              <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
