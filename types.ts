
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

export enum QuizState {
  START,
  IN_PROGRESS,
  FINISHED,
}
