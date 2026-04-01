import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-right">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">تقنيتي</h3>
            <p className="text-sm">حلول رقمية متكاملة: استضافة سحابية، بوتات ذكية، وتطوير مواقع ومتاجر إلكترونية بجودة احترافية.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">خدمات سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hosting" className="hover:text-indigo-400 transition">استضافة ودومين</Link></li>
              <li><Link to="/bots" className="hover:text-indigo-400 transition">بوتات واتساب وتليجرام</Link></li>
              <li><Link to="/custom-dev" className="hover:text-indigo-400 transition">تصميم مواقع ومتاجر</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">روابط مهمة</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-indigo-400 transition">الخدمات</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition">اتصل بنا</Link></li>
              <li><a href="mailto:support@teqnyty.com" className="hover:text-indigo-400 transition">سياسة الخصوصية</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">تابعنا</h4>
            <div className="flex gap-4 justify-end">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition"><FaFacebookF /></a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} تقنيتي - جميع الحقوق محفوظة. تصميم وبرمجة بخبرة عربية.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
