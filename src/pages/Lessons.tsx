
import { useState } from 'react';
import { CheckCircle, Lock, Play, Book, Code, Lightbulb } from 'lucide-react';
import ProgressTracker from '../components/ProgressTracker';
import CodeEditor from '../components/CodeEditor';

const Lessons = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const lessons = [
    {
      id: 1,
      title: 'مقدمة في البرمجة',
      icon: '🌟',
      description: 'تعرف على أساسيات البرمجة وأهميتها في حياتنا اليومية',
      content: `
# مرحباً بك في عالم البرمجة! 🎉

## ما هي البرمجة؟
البرمجة هي لغة التواصل مع الكمبيوتر! تماماً مثلما نتحدث بالعربية أو الإنجليزية، نستخدم لغات البرمجة للتحدث مع الكمبيوتر.

## لماذا نتعلم البرمجة؟
- 🎮 لصنع الألعاب المسلية
- 📱 لتطوير التطبيقات المفيدة  
- 🌐 لبناء المواقع الرائعة
- 🤖 لحل المشاكل بطريقة ذكية

## أول برنامج لك!
دعنا نكتب أول برنامج بسيط:
      `,
      code: 'console.log("مرحباً، أنا مبرمج صغير! 🚀");',
      exercise: 'اكتب برنامجاً يطبع اسمك على الشاشة'
    },
    {
      id: 2,
      title: 'المتغيرات',
      icon: '📦',
      description: 'تعلم كيفية حفظ المعلومات في صناديق خاصة تُسمى المتغيرات',
      content: `
# المتغيرات - صناديق المعلومات 📦

## ما هي المتغيرات؟
المتغيرات مثل الصناديق التي نضع فيها المعلومات:
- صندوق للأسماء
- صندوق للأرقام  
- صندوق للكلمات

## أنواع المتغيرات:
- **النصوص**: للكلمات والجمل
- **الأرقام**: للأعداد والحسابات
- **المنطق**: للقيم الصحيحة أو الخاطئة

## أمثلة عملية:
      `,
      code: `// إنشاء متغيرات مختلفة
let اسمي = "أحمد";
let عمري = 12;
let أحب_البرمجة = true;

console.log("اسمي هو: " + اسمي);
console.log("عمري: " + عمري + " سنة");
console.log("أحب البرمجة: " + أحب_البرمجة);`,
      exercise: 'أنشئ متغيرات لاسمك وعمرك وهوايتك المفضلة'
    },
    {
      id: 3,
      title: 'الشروط',
      icon: '🔀',
      description: 'تعلم كيف يتخذ الكمبيوتر قرارات ذكية باستخدام الشروط',
      content: `
# الشروط - اتخاذ القرارات 🤔

## ما هي الشروط؟
الشروط تساعد البرنامج على اتخاذ قرارات:
- إذا كان الطقس مطيراً، خذ مظلة
- إذا كان عمرك أكبر من 10، يمكنك لعب هذه اللعبة

## أنواع الشروط:
- **if**: إذا كان الشرط صحيحاً
- **else**: وإلا (إذا لم يكن صحيحاً)
- **else if**: أو إذا كان شرط آخر صحيحاً

## مثال عملي:
      `,
      code: `let درجة_الحرارة = 25;

if (درجة_الحرارة > 30) {
    console.log("الطقس حار! 🌞");
} else if (درجة_الحرارة > 20) {
    console.log("الطقس معتدل! 🌤️");
} else {
    console.log("الطقس بارد! ❄️");
}`,
      exercise: 'اكتب برنامجاً يحدد ما إذا كان الرقم زوجي أم فردي'
    },
    {
      id: 4,
      title: 'الحلقات',
      icon: '🔄',
      description: 'اكتشف كيفية تكرار المهام بسهولة باستخدام الحلقات',
      content: `
# الحلقات - تكرار المهام 🔄

## ما هي الحلقات؟
الحلقات تساعدنا على تكرار نفس العمل عدة مرات:
- طباعة الأرقام من 1 إلى 10
- تكرار أغنية مفضلة
- عد النجوم في السماء

## أنواع الحلقات:
- **for**: للتكرار عدد معين من المرات
- **while**: للتكرار طالما الشرط صحيح

## أمثلة عملية:
      `,
      code: `// حلقة for - طباعة الأرقام من 1 إلى 5
for (let i = 1; i <= 5; i++) {
    console.log("الرقم: " + i + " ⭐");
}

// حلقة while - العد التنازلي
let عداد = 3;
while (عداد > 0) {
    console.log("🚀 " + عداد);
    عداد--;
}
console.log("انطلاق! 🎉");`,
      exercise: 'استخدم حلقة لطباعة جدول الضرب للرقم 3'
    },
    {
      id: 5,
      title: 'الدوال',
      icon: '⚙️',
      description: 'تعلم كيفية إنشاء أدوات مفيدة قابلة لإعادة الاستخدام',
      content: `
# الدوال - الأدوات المفيدة ⚙️

## ما هي الدوال؟
الدوال مثل الآلات الصغيرة:
- تأخذ شيئاً (مدخلات)
- تعمل عليه
- تعطيك النتيجة (مخرجات)

## لماذا نستخدم الدوال؟
- لتجنب تكرار الكود
- لتنظيم البرنامج
- لحل مشاكل معقدة خطوة بخطوة

## أمثلة عملية:
      `,
      code: `// دالة للترحيب
function رحب(الاسم) {
    return "مرحباً " + الاسم + "! 👋";
}

// دالة للحساب
function اجمع(رقم1, رقم2) {
    return رقم1 + رقم2;
}

// استخدام الدوال
console.log(رحب("سارة"));
console.log("النتيجة: " + اجمع(5, 3));

// دالة للتحقق من الرقم الزوجي
function هل_زوجي(رقم) {
    if (رقم % 2 === 0) {
        return "زوجي ✅";
    } else {
        return "فردي ❌";
    }
}`,
      exercise: 'أنشئ دالة تحسب مساحة المستطيل (الطول × العرض)'
    },
    {
      id: 6,
      title: 'المشروع التطبيقي',
      icon: '🚀',
      description: 'اجمع كل ما تعلمته في مشروع شامل وممتع',
      content: `
# المشروع التطبيقي - لعبة التخمين 🎯

## وصف المشروع:
سنبني لعبة تخمين الرقم السري!
- الكمبيوتر يختار رقماً سرياً
- المستخدم يحاول تخمينه
- البرنامج يعطي تلميحات

## المفاهيم المستخدمة:
- ✅ المتغيرات: لحفظ الرقم السري والتخمين
- ✅ الشروط: للمقارنة بين الأرقام
- ✅ الحلقات: للسماح بمحاولات متعددة
- ✅ الدوال: لتنظيم الكود

## الكود الكامل:
      `,
      code: `// لعبة تخمين الرقم السري
function لعبة_التخمين() {
    let الرقم_السري = Math.floor(Math.random() * 10) + 1;
    let المحاولات = 3;
    
    console.log("🎯 مرحباً بك في لعبة التخمين!");
    console.log("خمن رقماً بين 1 و 10");
    console.log("لديك " + المحاولات + " محاولات");
    
    // محاكاة تخمين المستخدم
    let تخمينات = [5, 8, 3]; // أمثلة على التخمينات
    
    for (let i = 0; i < تخمينات.length; i++) {
        let التخمين = تخمينات[i];
        console.log("\\nالمحاولة " + (i + 1) + ": " + التخمين);
        
        if (التخمين === الرقم_السري) {
            console.log("🎉 مبروك! فزت!");
            console.log("الرقم السري كان: " + الرقم_السري);
            return;
        } else if (التخمين < الرقم_السري) {
            console.log("📈 الرقم أكبر!");
        } else {
            console.log("📉 الرقم أصغر!");
        }
        
        المحاولات--;
        if (المحاولات > 0) {
            console.log("المحاولات المتبقية: " + المحاولات);
        }
    }
    
    console.log("\\n😔 انتهت المحاولات!");
    console.log("الرقم السري كان: " + الرقم_السري);
    console.log("حاول مرة أخرى! 💪");
}

// تشغيل اللعبة
لعبة_التخمين();`,
      exercise: 'طور اللعبة بإضافة مستويات صعوبة مختلفة'
    }
  ];

  const toggleLessonCompletion = (lessonId: number) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const isLessonUnlocked = (lessonId: number) => {
    if (lessonId === 1) return true;
    return completedLessons.includes(lessonId - 1);
  };

  const currentLesson = lessons.find(lesson => lesson.id === selectedLesson);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            📚 دروس البرمجة
          </h1>
          <p className="text-xl text-gray-600">
            ابدأ رحلتك التعليمية خطوة بخطوة من الأساسيات إلى المشاريع العملية
          </p>
        </div>

        <ProgressTracker 
          completedLessons={completedLessons}
          totalLessons={lessons.length}
          currentLesson={selectedLesson || undefined}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lessons List */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">قائمة الدروس</h2>
            <div className="space-y-4">
              {lessons.map((lesson) => {
                const isCompleted = completedLessons.includes(lesson.id);
                const isUnlocked = isLessonUnlocked(lesson.id);
                const isSelected = selectedLesson === lesson.id;

                return (
                  <div
                    key={lesson.id}
                    onClick={() => isUnlocked && setSelectedLesson(lesson.id)}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : isCompleted
                        ? 'border-green-500 bg-green-50'
                        : isUnlocked
                        ? 'border-gray-200 bg-white hover:border-blue-300'
                        : 'border-gray-200 bg-gray-100 cursor-not-allowed opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="text-2xl">{lesson.icon}</span>
                        <div>
                          <h3 className="font-bold text-lg text-gray-800">
                            {lesson.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {lesson.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        {isCompleted ? (
                          <CheckCircle className="text-green-500" size={24} />
                        ) : isUnlocked ? (
                          <Play className="text-blue-500" size={20} />
                        ) : (
                          <Lock className="text-gray-400" size={20} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lesson Content */}
          <div className="lg:col-span-2">
            {currentLesson ? (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-3xl">{currentLesson.icon}</span>
                    <h2 className="text-3xl font-bold text-gray-800">
                      {currentLesson.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => toggleLessonCompletion(currentLesson.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      completedLessons.includes(currentLesson.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {completedLessons.includes(currentLesson.id) ? '✅ مكتمل' : '✔️ تم الإنجاز'}
                  </button>
                </div>

                {/* Lesson Content */}
                <div className="mb-8">
                  <div className="prose prose-lg max-w-none text-right">
                    {currentLesson.content.split('\n').map((line, index) => {
                      if (line.startsWith('#')) {
                        const level = line.match(/^#+/)?.[0].length || 1;
                        const text = line.replace(/^#+\s*/, '');
                        const Tag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;
                        return (
                          <Tag key={index} className="font-bold text-gray-800 mb-4">
                            {text}
                          </Tag>
                        );
                      } else if (line.startsWith('- ')) {
                        return (
                          <li key={index} className="text-gray-700 mb-2 mr-4">
                            {line.replace(/^-\s*/, '')}
                          </li>
                        );
                      } else if (line.trim()) {
                        return (
                          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                            {line}
                          </p>
                        );
                      }
                      return <br key={index} />;
                    })}
                  </div>
                </div>

                {/* Code Example */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2 rtl:space-x-reverse">
                    <Code className="text-blue-500" />
                    <span>مثال عملي:</span>
                  </h3>
                  <CodeEditor initialCode={currentLesson.code} />
                </div>

                {/* Exercise */}
                <div className="bg-yellow-50 border-r-4 border-yellow-400 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 flex items-center space-x-2 rtl:space-x-reverse text-yellow-800">
                    <Lightbulb className="text-yellow-600" />
                    <span>تمرين تطبيقي:</span>
                  </h3>
                  <p className="text-yellow-800 font-medium">
                    {currentLesson.exercise}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <div className="text-6xl mb-6">📖</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  اختر درساً لتبدأ التعلم
                </h2>
                <p className="text-gray-600 text-lg">
                  انقر على أي درس من القائمة على اليسار لتبدأ رحلة التعلم الممتعة!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
