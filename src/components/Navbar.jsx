import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaServer } from 'react-icons/fa';

const Navbar = () => {
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
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <FaServer className="text-indigo-600 text-2xl" />
            <span className="font-bold text-xl bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
              تقنيتي
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
                      ? 'text-indigo-700 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-medium shadow-md transition cursor-pointer"
            >
              اطلب خدمة
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="فتح أو إغلاق القائمة"
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
                      ? 'text-indigo-700 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
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
