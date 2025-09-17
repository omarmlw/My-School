import React from 'react';
import type { UserInfo } from '../types';

interface HeaderProps {
  userInfo: UserInfo;
}

const Header: React.FC<HeaderProps> = ({ userInfo }) => {
  return (
    <header className="w-full max-w-4xl bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border-2 border-purple-200 mb-6 text-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-center md:text-right text-lg md:text-xl">
        <div className="font-bold">
          <span className="text-purple-600">المدرسة:</span> {userInfo.school}
        </div>
        <div className="font-bold">
          <span className="text-purple-600">الولاية:</span> {userInfo.stateName}
        </div>
        <div className="font-bold">
          <span className="text-purple-600">التلميذ(ة):</span> {userInfo.firstName} {userInfo.lastName}
        </div>
        <div className="font-bold">
          <span className="text-purple-600">المستوى:</span> {userInfo.grade}
        </div>
      </div>
    </header>
  );
};

export default Header;
