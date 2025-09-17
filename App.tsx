
import React, { useState, useCallback } from 'react';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import ResultsScreen from './components/ResultsScreen';
import { QUESTIONS, TOTAL_QUESTIONS } from './constants';
import type { Question } from './types';
import { QuizState } from './types';

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>(QuizState.START);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [yesAnswers, setYesAnswers] = useState<number>(0);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const startQuiz = useCallback(() => {
    const shuffledQuestions = shuffleArray(QUESTIONS).slice(0, TOTAL_QUESTIONS);
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setYesAnswers(0);
    setQuizState(QuizState.IN_PROGRESS);
  }, []);

  const handleAnswer = useCallback((answer: boolean) => {
    if (answer) {
      setYesAnswers(prev => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizState(QuizState.FINISHED);
    }
  }, [currentQuestionIndex, questions.length]);

  const renderContent = () => {
    switch (quizState) {
      case QuizState.IN_PROGRESS:
        return (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        );
      case QuizState.FINISHED:
        return (
          <ResultsScreen
            score={yesAnswers}
            totalQuestions={questions.length}
            onRestart={startQuiz}
          />
        );
      case QuizState.START:
      default:
        return <StartScreen onStart={startQuiz} />;
    }
  };

  return (
    <div className="bg-amber-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
