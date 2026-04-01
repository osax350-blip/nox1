import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import BrandLogo from './BrandLogo';

const Navbar = ({ isDark, onToggleDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', to: '/' },
    { name: 'الخدمات', to: '/services' },
    { name: 'باقات الاستضافة', to: '/hosting' },
    { name: 'بوتات واتساب وتليجرام', to: '/bots' },
    { name: 'تطوير مخصص', to: '/custom-dev' },
    { name: 'اتصل بنا', to: '/contact' },
  ];

  return (
    <nav className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <BrandLogo className="w-9 h-9" />
            <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
              futalix
            </span>
          </Link>

          <div className="hidden md:flex space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `cursor-pointer px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                    isActive
                      ? 'text-indigo-700 dark:text-sky-300 bg-indigo-50 dark:bg-slate-800'
                      : 'text-gray-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-sky-300 hover:bg-indigo-50 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onToggleDark}
              className="p-2 rounded-full border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
              aria-label="تبديل الوضع الليلي"
              type="button"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <Link
              to="/contact"
              className="btn-primary text-sm px-5 py-2"
            >
              اطلب خدمة
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onToggleDark}
              className="p-2 rounded-full border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-200"
              aria-label="تبديل الوضع الليلي"
              type="button"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-slate-200 focus:outline-none"
              aria-label="فتح أو إغلاق القائمة"
              type="button"
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 font-medium rounded-lg ${
                    isActive
                      ? 'text-indigo-700 dark:text-sky-300 bg-indigo-50 dark:bg-slate-800'
                      : 'text-gray-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-sky-300 hover:bg-indigo-50 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-full font-medium"
              >
                اطلب خدمة
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
