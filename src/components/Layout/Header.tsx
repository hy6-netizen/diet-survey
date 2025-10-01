import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-md mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-point">현우한의원</span>
        </Link>
        <div className="flex gap-2">
          <a
            href="#"
            className="bg-point hover:bg-point-hover text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
          >
            오시는 길
          </a>
          <a
            href="https://open.kakao.com/o/sr7E9LUh"
            className="bg-point hover:bg-point-hover text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            카톡 상담
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;