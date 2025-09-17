import React, { useState } from 'react';
import type { UserInfo } from '../types';

interface UserInfoFormProps {
  onStart: (userInfo: UserInfo) => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onStart }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    school: '',
    stateName: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(userInfo).every(field => field.trim() !== '')) {
      onStart(userInfo);
    } else {
      alert('الرجاء ملء جميع الحقول');
    }
  };

  return (
    <div className="bg-white text-center p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-blue-300 w-full">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
        أهلاً بك في اختبار الأطفال! ⭐
      </h1>
      <p className="text-lg md:text-xl text-slate-700 mb-8">
        الرجاء إدخال معلومات التلميذ(ة) لبدء الاختبار.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="school"
            value={userInfo.school}
            onChange={handleChange}
            placeholder="اسم المدرسة"
            className="w-full p-3 text-lg border-2 border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <input
            type="text"
            name="stateName"
            value={userInfo.stateName}
            onChange={handleChange}
            placeholder="الولاية"
            className="w-full p-3 text-lg border-2 border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
            placeholder="الإسم"
            className="w-full p-3 text-lg border-2 border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <input
            type="text"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
            placeholder="اللقب"
            className="w-full p-3 text-lg border-2 border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-auto bg-green-500 text-white font-bold text-2xl md:text-3xl py-4 px-12 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transform hover:-translate-y-1 transition-all duration-300 mt-6"
        >
          ابدأ الاختبار 🌸
        </button>
      </form>
    </div>
  );
};

export default UserInfoForm;