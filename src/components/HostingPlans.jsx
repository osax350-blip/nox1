import React from 'react';
import { FaCheck, FaServer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const plans = [
  { name: 'الباقة الأساسية', price: '59', domain: 'دومين .com مجاني', storage: '10 جيجابايت', bandwidth: 'غير محدود', databases: '5 قواعد', support: 'دعم عادي', popular: false },
  { name: 'باقة الأعمال', price: '129', domain: 'دومين مميز مجاني', storage: '50 جيجابايت', bandwidth: 'غير محدود', databases: '25 قاعدة', support: 'أولوية الدعم', popular: true },
  { name: 'الباقة الاحترافية', price: '249', domain: 'دومين احترافي + SSL', storage: '200 جيجابايت', bandwidth: 'غير محدود', databases: 'غير محدود', support: 'دعم VIP 24/7', popular: false },
];

const HostingPlans = () => {
  return (
    <section id="hosting" className="py-20 bg-gradient-to-b from-gray-50 to-indigo-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">باقات الاستضافة مع دومين مخصص</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">اختر الباقة المناسبة لمشروعك واستمتع بأداء عالي وأمان متكامل</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl relative ${plan.popular ? 'border-2 border-indigo-500 scale-105 md:scale-105 z-10' : 'border border-gray-200'}`}>
              {plan.popular && <div className="bg-indigo-600 text-white text-center py-1 text-sm font-bold">الأكثر طلباً</div>}
              <div className="p-6 text-right">
                <div className="flex justify-between items-center">
                  <FaServer className="text-indigo-500 text-3xl" />
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                <div className="mt-4 flex items-baseline justify-end">
                  <span className="text-3xl font-extrabold">$ {plan.price}</span>
                  <span className="text-gray-500 mr-1">/ شهرياً</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 justify-end"><FaCheck className="text-green-500" /> {plan.domain}</li>
                  <li className="flex items-center gap-2 justify-end"><FaCheck className="text-green-500" /> مساحة {plan.storage}</li>
                  <li className="flex items-center gap-2 justify-end"><FaCheck className="text-green-500" /> {plan.bandwidth} ترافيك</li>
                  <li className="flex items-center gap-2 justify-end"><FaCheck className="text-green-500" /> {plan.databases} قاعدة بيانات</li>
                  <li className="flex items-center gap-2 justify-end"><FaCheck className="text-green-500" /> {plan.support}</li>
                </ul>
                <div className="mt-8">
                  <Link to={`/contact?service=hosting&plan=${encodeURIComponent(plan.name)}`} className={`block text-center py-2 rounded-full font-semibold transition cursor-pointer ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-indigo-600 hover:bg-indigo-50'}`}>
                    اختر الباقة
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;
