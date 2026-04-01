import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700">404</h1>
        <p className="mt-4 text-gray-600">الصفحة غير موجودة.</p>
        <Link
          to="/"
          className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold"
        >
          العودة للرئيسية
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
