import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaClock,
  FaRegCheckCircle,
} from 'react-icons/fa';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || 'hosting';
  const initialPlan = searchParams.get('plan') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: initialService,
    budget: '',
    timeline: '',
    contactMethod: 'whatsapp',
    message: initialPlan ? `مهتم بهذه الباقة: ${initialPlan}` : '',
  });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus('error');
      setFeedback('يرجى تعبئة الحقول الأساسية: الاسم، البريد، الجوال، وتفاصيل الطلب.');
      return;
    }

    setStatus('submitting');
    setFeedback('');

    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Lead submitted:', formData);

    setStatus('success');
    setFeedback('تم استلام طلبك بنجاح. سيقوم فريقنا بالتواصل معك خلال أقل من ساعة عمل.');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: initialService,
      budget: '',
      timeline: '',
      contactMethod: 'whatsapp',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-slate-100">اتصل بنا</h2>
          <div className="accent-divider mx-auto mt-4"></div>
          <p className="mt-4 text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">يسعدنا مساعدتك في اختيار الخدمة المناسبة، تواصل معنا الآن للحصول على عرض سعر مجاني</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-md border border-indigo-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-6">قنوات التواصل المباشر</h3>
            <div className="space-y-4">
              <a href="mailto:support@futalix.com" className="flex items-center gap-3 justify-end bg-white dark:bg-slate-900 p-3 rounded-xl border border-indigo-100 dark:border-slate-700 hover:border-indigo-300 transition">
                <FaEnvelope className="text-indigo-600 text-xl" />
                <span>support@futalix.com</span>
              </a>
              <a href="tel:+966500000000" className="flex items-center gap-3 justify-end bg-white dark:bg-slate-900 p-3 rounded-xl border border-indigo-100 dark:border-slate-700 hover:border-indigo-300 transition">
                <FaPhoneAlt className="text-indigo-600 text-xl" />
                <span dir="ltr">+966 50 000 0000</span>
              </a>
              <a href="https://wa.me/966500000000" target="_blank" rel="noreferrer" className="flex items-center gap-3 justify-end bg-white dark:bg-slate-900 p-3 rounded-xl border border-indigo-100 dark:border-slate-700 hover:border-indigo-300 transition">
                <FaWhatsapp className="text-green-600 text-xl" />
                <span dir="ltr">WhatsApp Business</span>
              </a>
              <div className="flex items-center gap-3 justify-end bg-white dark:bg-slate-900 p-3 rounded-xl border border-indigo-100 dark:border-slate-700">
                <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white dark:bg-slate-900 rounded-xl border border-indigo-100 dark:border-slate-700">
              <p className="font-semibold flex items-center gap-2 justify-end">
                <FaClock className="text-indigo-600" /> ساعات العمل
              </p>
              <p>الأحد - الخميس: 9 صباحاً - 8 مساءً</p>
              <p>الجمعة والسبت: دعم فني فقط عبر البريد</p>
            </div>

            <div className="mt-6 p-4 bg-indigo-600 text-white rounded-xl">
              <p className="font-bold flex items-center gap-2 justify-end">
                <FaRegCheckCircle /> وعدنا لك
              </p>
              <p className="text-sm mt-1">تقييم مجاني للمتطلبات + خطة تنفيذ مبدئية + تسعير واضح بدون رسوم مخفية.</p>
            </div>
          </div>

          <div className="lg:col-span-3 card-base p-8">
            {status === 'success' && (
              <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center">
                {feedback}
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center">
                {feedback}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-slate-200 mb-1">الاسم الكامل</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="أدخل اسمك" />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-slate-200 mb-1">اسم الشركة (اختياري)</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="اسم شركتك" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-slate-200 mb-1">البريد الإلكتروني</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="example@domain.com" />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-slate-200 mb-1">رقم الجوال</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="05XXXXXXXX" />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-slate-200 mb-1">نوع الخدمة</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500">
                  <option value="hosting">استضافة + دومين</option>
                  <option value="bots">بوت تليجرام / واتساب</option>
                  <option value="website">موقع مخصص / متجر إلكتروني</option>
                  <option value="other">خدمة أخرى</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-slate-200 mb-1">الميزانية التقديرية</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500">
                    <option value="">حدد الميزانية</option>
                    <option value="lt-200">أقل من 200$</option>
                    <option value="200-700">من 200$ إلى 700$</option>
                    <option value="700-2000">من 700$ إلى 2000$</option>
                    <option value="gt-2000">أكثر من 2000$</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-slate-200 mb-1">الإطار الزمني</label>
                  <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500">
                    <option value="">اختر المدة المتوقعة</option>
                    <option value="urgent">عاجل (خلال أسبوع)</option>
                    <option value="2-4-weeks">2 - 4 أسابيع</option>
                    <option value="1-2-months">1 - 2 شهر</option>
                    <option value="flexible">مرن</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-slate-200 mb-1">طريقة التواصل المفضلة</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className="border border-gray-300 dark:border-slate-600 rounded-lg p-3 cursor-pointer hover:border-indigo-500 transition dark:text-slate-200">
                    <input type="radio" className="ml-2" name="contactMethod" value="whatsapp" checked={formData.contactMethod === 'whatsapp'} onChange={handleChange} />
                    واتساب
                  </label>
                  <label className="border border-gray-300 dark:border-slate-600 rounded-lg p-3 cursor-pointer hover:border-indigo-500 transition dark:text-slate-200">
                    <input type="radio" className="ml-2" name="contactMethod" value="phone" checked={formData.contactMethod === 'phone'} onChange={handleChange} />
                    مكالمة
                  </label>
                  <label className="border border-gray-300 dark:border-slate-600 rounded-lg p-3 cursor-pointer hover:border-indigo-500 transition dark:text-slate-200">
                    <input type="radio" className="ml-2" name="contactMethod" value="email" checked={formData.contactMethod === 'email'} onChange={handleChange} />
                    بريد إلكتروني
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-slate-200 mb-1">تفاصيل الطلب</label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500" placeholder="اكتب متطلبات مشروعك، الأهداف، وأي ملاحظات مهمة..."></textarea>
              </div>

              <button type="submit" disabled={status === 'submitting'} className="w-full btn-primary disabled:bg-indigo-400 rounded-lg">
                <FaPaperPlane /> {status === 'submitting' ? 'جارٍ إرسال الطلب...' : 'إرسال الطلب'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
