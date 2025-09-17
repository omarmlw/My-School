import React, { useState, useCallback } from 'react';
import UserInfoForm from './components/UserInfoForm';
import QuestionCard from './components/QuestionCard';
import ResultsScreen from './components/ResultsScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import { QUESTIONS, TOTAL_QUESTIONS } from './constants';
import type { Question, UserInfo } from './types';
import { QuizState } from './types';

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>(QuizState.USER_INFO);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
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

  const startQuiz = useCallback((newUserInfo: UserInfo) => {
    setUserInfo(newUserInfo);
    const shuffledQuestions = shuffleArray(QUESTIONS).slice(0, TOTAL_QUESTIONS);
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setYesAnswers(0);
    setQuizState(QuizState.IN_PROGRESS);
  }, []);

  const playAgain = useCallback(() => {
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
        if (!userInfo) return null; // Should not happen
        return (
          <ResultsScreen
            score={yesAnswers}
            totalQuestions={questions.length}
            onRestart={playAgain}
            userInfo={userInfo}
          />
        );
      case QuizState.USER_INFO:
      default:
        return <UserInfoForm onStart={startQuiz} />;
    }
  };

  return (
    <div className="bg-amber-100 min-h-screen flex flex-col items-center justify-start p-4 pt-6">
      {userInfo && <Header userInfo={userInfo} />}
      <main className="w-full max-w-2xl mx-auto flex-grow flex items-center justify-center">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
