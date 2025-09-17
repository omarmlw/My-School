import type { Question } from './types';
import { Category } from './types';

export const TOTAL_QUESTIONS: number = 6;

export const QUESTIONS: Question[] = [
  // Religious
  { text: 'هل صليت الفجر مع والديك؟', category: Category.RELIGIOUS },
  { text: 'هل تقول بسم الله قبل الأكل؟', category: Category.RELIGIOUS },
  { text: 'هل قرأت سورة قصيرة اليوم؟', category: Category.RELIGIOUS },
  { text: 'هل دعوت الله اليوم؟', category: Category.RELIGIOUS },
  { text: 'هل قلت دعاء الخروج من المنزل؟', category: Category.RELIGIOUS },
  { text: 'هل استمعت للقرآن مع والديك اليوم؟', category: Category.RELIGIOUS },
  { text: 'هل صليت العشاء في وقتها؟', category: Category.RELIGIOUS },
  { text: 'هل ساعدت أحدًا في معرفة دعاء أو سورة؟', category: Category.RELIGIOUS },
  { text: 'هل شكرت الله على نعمة الصحة؟', category: Category.RELIGIOUS },
  
  // Health
  { text: 'هل غسلت أسنانك هذا الصباح؟', category: Category.HEALTH },
  { text: 'هل غسلت يديك قبل الأكل؟', category: Category.HEALTH },
  { text: 'هل أكلت فطورك كاملًا؟', category: Category.HEALTH },
  { text: 'هل شربت ماء كافي اليوم؟', category: Category.HEALTH },
  { text: 'هل غسلت وجهك بعد الاستيقاظ؟', category: Category.HEALTH },
  { text: 'هل أكلت خضار أو فاكهة اليوم؟', category: Category.HEALTH },
  { text: 'هل قمت برياضة أو لعبت في الخارج؟', category: Category.HEALTH },
  { text: 'هل شربت الحليب اليوم؟', category: Category.HEALTH },
  { text: 'هل ارتحت بالنوم الكافي؟', category: Category.HEALTH },

  // Academic
  { text: 'هل راجعت دروسك؟', category: Category.ACADEMIC },
  { text: 'هل قمت بواجباتك؟', category: Category.ACADEMIC },
  { text: 'هل حضرت حقيبتك المدرسية؟', category: Category.ACADEMIC },
  { text: 'هل قرأت قصة قصيرة؟', category: Category.ACADEMIC },
  { text: 'هل كتبت واجباتك بخط مرتب؟', category: Category.ACADEMIC },
  { text: 'هل حفظت درسًا جديدًا اليوم؟', category: Category.ACADEMIC },
  { text: 'هل سألت معلمك عن شيء لم تفهمه؟', category: Category.ACADEMIC },
  { text: 'هل ساعدت زميلك في حل تمرين؟', category: Category.ACADEMIC },
  { text: 'هل قرأت كتابًا مفيدًا أو قصة قصيرة؟', category: Category.ACADEMIC },

  // Home Behavior
  { text: 'هل رتبت ألعابك بعد اللعب؟', category: Category.HOME_BEHAVIOR },
  { text: 'هل رتبت سريرك بعد الاستيقاظ؟', category: Category.HOME_BEHAVIOR },
  { text: 'هل ساعدت والدتك أو والدك؟', category: Category.HOME_BEHAVIOR },
  { text: 'هل كنت مطيعًا اليوم لوالديك؟', category: Category.HOME_BEHAVIOR },
  { text: 'هل ساعدت في ترتيب المائدة؟', category: Category.HOME_BEHAVIOR },
  { text: 'هل أطفأت الأنوار عند مغادرة الغرفة؟', category: Category.HOME_BEHAVIOR },
  { text: 'هل ألقيت القمامة في مكانها؟', category: Category.HOME_BEHAVIOR },
  { text: 'هل رتبت غرفتك قبل النوم؟', category: Category.HOME_BEHAVIOR },
  { text: 'هل ساعدت أخاك أو أختك في شيء؟', category: Category.HOME_BEHAVIOR },

  // Social Behavior
  { text: 'هل سلمت على معلمك أو جارك بابتسامة؟', category: Category.SOCIAL_BEHAVIOR },
  { text: 'هل شكرت من ساعدك؟', category: Category.SOCIAL_BEHAVIOR },
  { text: 'هل شاركت لعبتك مع صديقك؟', category: Category.SOCIAL_BEHAVIOR },
  { text: 'هل اعتذرت عندما أخطأت؟', category: Category.SOCIAL_BEHAVIOR },
  { text: 'هل قلت "السلام عليكم" عند دخولك على الآخرين؟', category: Category.SOCIAL_BEHAVIOR },
  { text: 'هل أعطيت مقعدك لشخص أكبر منك؟', category: Category.SOCIAL_BEHAVIOR },
  { text: 'هل التزمت بدورك في اللعب؟', category: Category.SOCIAL_BEHAVIOR },
  { text: 'هل شكرت معلمك في القسم؟', category: Category.SOCIAL_BEHAVIOR },
  { text: 'هل قلت "عفوًا" عندما أخطأت؟', category: Category.SOCIAL_BEHAVIOR },
];

export const getResultMessage = (score: number, name?: string): string => {
    const studentName = name ? ` يا ${name}` : '';
    if (score >= 5) {
        return `رائع${studentName}! ممتاز 👏`;
    }
    if (score >= 3) {
        return `أحسنت${studentName}! جيد جدًا`;
    }
    if (score === 2) {
        return `حسن${studentName}، اجتهد أكثر 💪`;
    }
    return `متوسط${studentName}، حاول مرة أخرى 😊`;
};