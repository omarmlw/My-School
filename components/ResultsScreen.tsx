
import React from 'react';
import { getResultMessage } from '../constants';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const resultMessage = getResultMessage(score);
  
  return (
    <div className="bg-white text-center p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-yellow-300 animate-pop-in">
      <h2 className="text-4xl md:text-6xl font-bold text-yellow-600 mb-4">
        النتيجة
      </h2>
      <p className="text-2xl md:text-3xl text-slate-700 mb-6">
        أجبت بـ '<span className="font-bold text-green-600">نعم</span>' على 
        <span className="font-bold text-2xl md:text-4xl mx-2 text-yellow-700">{score}</span>
        من أصل 
        <span className="font-bold text-2xl md:text-4xl mx-2 text-yellow-700">{totalQuestions}</span>
        أسئلة!
      </p>
      <p className="text-3xl md:text-5xl font-bold text-blue-600 my-8 bg-blue-100 p-4 rounded-xl">
        {resultMessage}
      </p>
      <button
        onClick={onRestart}
        className="w-full md:w-auto bg-blue-500 text-white font-bold text-2xl md:text-3xl py-4 px-12 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1 transition-all duration-300"
      >
        العب مرة أخرى 😊
      </button>
       <style>{`
            @keyframes pop-in {
                0% { opacity: 0; transform: scale(0.5); }
                100% { opacity: 1; transform: scale(1); }
            }
            .animate-pop-in {
                animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
            }
        `}</style>
    </div>
  );
};

export default ResultsScreen;
