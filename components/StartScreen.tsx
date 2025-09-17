
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="bg-white text-center p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-blue-300 transform transition-transform duration-500 hover:scale-105">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">
        أهلاً بك في اختبار الأطفال! ⭐
      </h1>
      <p className="text-lg md:text-2xl text-slate-700 mb-8">
        هل أنت مستعد لبعض الأسئلة الممتعة؟ هيا نرى كم أنت رائع اليوم!
      </p>
      <button
        onClick={onStart}
        className="w-full md:w-auto bg-green-500 text-white font-bold text-2xl md:text-3xl py-4 px-12 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transform hover:-translate-y-1 transition-all duration-300"
      >
        ابدأ الاختبار 🌸
      </button>
    </div>
  );
};

export default StartScreen;
