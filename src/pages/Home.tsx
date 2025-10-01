import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-point to-point-hover">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            현우한의원
          </h1>
          <p className="text-xl md:text-2xl text-white mb-4">
            건강한 다이어트의 시작
          </p>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            체계적인 한방 다이어트 프로그램으로<br />
            건강하고 지속 가능한 체중 관리를 경험하세요
          </p>
          <Link
            to="/diet-survey"
            className="inline-block bg-white text-point hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg"
          >
            다이어트 설문 바로가기
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">한방 다이어트</h3>
            <p className="text-gray-600">
              체질에 맞는 맞춤 한방 처방으로 건강하게 체중을 관리합니다
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">체계적인 관리</h3>
            <p className="text-gray-600">
              정기적인 상담과 체성분 분석으로 체계적으로 관리합니다
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">지속 가능한 결과</h3>
            <p className="text-gray-600">
              요요 없는 건강한 다이어트로 지속 가능한 결과를 만듭니다
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            간단한 설문으로 나에게 맞는 다이어트 프로그램을 확인해보세요
          </p>
          <Link
            to="/diet-survey"
            className="inline-block bg-point hover:bg-point-hover text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg"
          >
            설문 시작하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
