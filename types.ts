export enum Category {
  RELIGIOUS = '🕌 دينية',
  HEALTH = '🍎 صحية',
  ACADEMIC = '📚 دراسية',
  HOME_BEHAVIOR = '🏡 سلوك في البيت',
  SOCIAL_BEHAVIOR = '🤝 سلوك اجتماعي',
}

export interface Question {
  text: string;
  category: Category;
}

export interface UserInfo {
  school: string;
  stateName: string;
  firstName: string;
  lastName: string;
}

export enum QuizState {
  USER_INFO,
  IN_PROGRESS,
  FINISHED,
}