import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
        <a href="https://hanclinic.site" className="text-dark-brown font-bold text-lg">
          로고
        </a>
        <div className="flex gap-3 text-sm">
          <a href="#" className="text-dark-brown hover:text-point transition-colors">
            오시는 길
          </a>
          <a
            href="https://open.kakao.com/o/sr7E9LUh"
            className="text-dark-brown hover:text-point transition-colors"
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