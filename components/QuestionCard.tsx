
import React from 'react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: boolean) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber, totalQuestions, onAnswer }) => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border-4 border-purple-300 w-full animate-fade-in">
        <div className="text-center mb-6">
            <div className="bg-purple-100 text-purple-700 font-bold py-2 px-4 rounded-full inline-block mb-4 text-lg">
                {question.category}
            </div>
            <p className="text-xl md:text-2xl text-slate-600">
                السؤال {questionNumber} من {totalQuestions}
            </p>
        </div>
      
        <p className="text-3xl md:text-5xl font-bold text-center text-slate-800 mb-10 min-h-[100px] md:min-h-[150px] flex items-center justify-center">
            {question.text}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <button
            onClick={() => onAnswer(true)}
            className="flex items-center justify-center gap-4 bg-green-500 text-white font-bold text-3xl md:text-4xl py-6 rounded-2xl shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transform hover:scale-105 transition-transform duration-300"
            >
            <span className="text-4xl">✅</span> نعم
            </button>
            <button
            onClick={() => onAnswer(false)}
            className="flex items-center justify-center gap-4 bg-red-500 text-white font-bold text-3xl md:text-4xl py-6 rounded-2xl shadow-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transform hover:scale-105 transition-transform duration-300"
            >
            <span className="text-4xl">❌</span> لا
            </button>
        </div>
        <style>{`
            @keyframes fade-in {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fade-in 0.5s ease-out forwards;
            }
        `}</style>
    </div>
  );
};

export default QuestionCard;
