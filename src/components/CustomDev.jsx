import React from 'react';
import { FaLaptopCode, FaStore, FaPalette, FaDatabase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const customServices = [
  { icon: <FaLaptopCode />, title: 'مواقع مخصصة', desc: 'تصميم وبرمجة مواقع شركات، منصات تعليمية، أنظمة إدارة المحتوى وفق أحدث التقنيات.' },
  { icon: <FaStore />, title: 'متاجر إلكترونية', desc: 'متاجر متكاملة مع سلة مشتريات، بوابات دفع (مدى، باي بال، سترايب)، وإدارة طلبات.' },
  { icon: <FaPalette />, title: 'UI/UX احترافي', desc: 'واجهات مستخدم جذابة وتجربة مستخدم سلسة تناسب هوية علامتك التجارية.' },
  { icon: <FaDatabase />, title: 'لوحات تحكم', desc: 'أنظمة إدارة متطورة تمكنك من التحكم الكامل في المحتوى والمنتجات والعملاء.' },
];

const CustomDev = () => {
  return (
    <section id="custom" className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">إنشاء مواقع ومتاجر حسب الطلب</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">نفهم رؤيتك ونحولها إلى مشروع رقمي ناجح، من الفكرة إلى الإطلاق والدعم المستمر</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customServices.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center transition hover:shadow-xl">
              <div className="text-indigo-600 text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl w-full text-center border border-indigo-100">
            <h3 className="text-2xl font-bold text-indigo-800">نفذ فكرتك مع فريق متخصص</h3>
            <p className="mt-2 text-gray-600">نقدم لك استشارة مجانية لتحديد احتياجات مشروعك بالضبط، مع جدول زمني وأسعار تنافسية.</p>
            <Link to="/contact?service=website" className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-indigo-700 transition cursor-pointer">
              تواصل مع خبير
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDev;
