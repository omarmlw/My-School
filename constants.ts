
import type { Question } from './types';
import { Category } from './types';

export const TOTAL_QUESTIONS: number = 6;

export const QUESTIONS: Question[] = [
  // Religious
  { text: 'هل صليت الفجر مع والديك؟', category: Category.RELIGIOUS },
  { text: 'هل تقول بسم الله قبل الأكل؟', category: Category.RELIGIOUS },
  { text: 'هل قرأت سورة قصيرة اليوم؟', category: Category.RELIGIOUS },
  { text: 'هل دعوت الله اليوم؟', category: Category.RELIGIOUS },
  
  // Health
  { text: 'هل غسلت أسنانك هذا الصباح؟', category: Category.HEALTH },
  { text: 'هل غسلت يديك قبل الأكل؟', category: Category.HEALTH },
  { text: 'هل أكلت فطورك كاملًا؟', category: Category.HEALTH },
  { text: 'هل شربت ماء كافي اليوم؟', category: Category.HEALTH },

  // Academic
  { text: 'هل راجعت دروسك؟', category: Category.ACADEMIC },
  { text: 'هل قمت بواجباتك؟', category: Category.ACADEMIC },
  { text: 'هل حضرت حقيبتك المدرسية؟', category: Category.ACADEMIC },
  { text: 'هل قرأت قصة قصيرة؟', category: Category.ACADEMIC },

  // Home Behavior
  { text: 'هل رتبت ألعابك بعد اللعب؟', category: Category.HOME_BEHAVIOR },
  { text: 'هل رتبت سريرك بعد الاستيقاظ؟', category: Category.HOME_BEHAVIOR },
  { text: 'هل ساعدت والدتك أو والدك؟', category: Category.HOME_BEHAVIOR },
  { text: 'هل كنت مطيعًا اليوم لوالديك؟', category: Category.HOME_BEHAVIOR },

  // Social Behavior
  { text: 'هل سلمت على معلمك أو جارك بابتسامة؟', category: Category.SOCIAL_BEHAVIOR },
  { text: 'هل شكرت من ساعدك؟', category: Category.SOCIAL_BEHAVIOR },
  { text: 'هل شاركت لعبتك مع صديقك؟', category: Category.SOCIAL_BEHAVIOR },
  { text: 'هل اعتذرت عندما أخطأت؟', category: Category.SOCIAL_BEHAVIOR },
];

export const getResultMessage = (score: number): string => {
    if (score >= 5) {
        return "رائع! ممتاز 👏";
    }
    if (score >= 3) {
        return "أحسنت! جيد جدًا";
    }
    if (score >= 2) {
        return "حسن، اجتهد أكثر 💪";
    }
    return "متوسط، حاول مرة أخرى 😊";
};
