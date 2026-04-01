import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-l from-indigo-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-right animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                حلول تقنية متكاملة
              </span>
              <br />
              استضافة • بوتات • تطوير
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto md:mx-0">
              نقدم لك خدمات الاستضافة الموثوقة مع دومين مخصص، وإنشاء بوتات تليجرام وواتساب احترافية،
              بالإضافة إلى تصميم وبرمجة مواقع ومتاجر إلكترونية حسب طلبك بأحدث التقنيات.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="btn-primary"
              >
                اطلب عرض سعر
              </Link>
              <Link
                to="/services"
                className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950 px-8 py-3 rounded-full font-bold transition cursor-pointer"
              >
                اكتشف خدماتنا
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-500 dark:text-slate-400">
              <div className="flex items-center gap-1"><FaCheckCircle className="text-green-500" /> دعم فني 24/7</div>
              <div className="flex items-center gap-1"><FaCheckCircle className="text-green-500" /> ضمان استرجاع 30 يوم</div>
              <div className="flex items-center gap-1"><FaCheckCircle className="text-green-500" /> سرعة فائقة</div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <FaRocket className="text-7xl text-indigo-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
