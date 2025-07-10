
import { useState } from 'react';
import { Play, Save, Share, RotateCcw, Code, Lightbulb, Trophy } from 'lucide-react';
import CodeEditor from '../components/CodeEditor';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [savedProjects, setSavedProjects] = useState<number[]>([]);

  const projects = [
    {
      id: 1,
      title: 'الحاسبة البسيطة',
      icon: '🧮',
      difficulty: 'مبتدئ',
      color: 'bg-green-500',
      description: 'اصنع حاسبة تستطيع جمع وطرح الأرقام',
      skills: ['المتغيرات', 'الدوال', 'العمليات الحسابية'],
      starter_code: `// الحاسبة البسيطة
function حاسبة(رقم1, عملية, رقم2) {
    // أكمل الكود هنا
    if (عملية === "+") {
        return رقم1 + رقم2;
    } else if (عملية === "-") {
        return رقم1 - رقم2;
    }
    // أضف المزيد من العمليات
}

// اختبار الحاسبة
console.log("5 + 3 = " + حاسبة(5, "+", 3));
console.log("10 - 4 = " + حاسبة(10, "-", 4));`,
      challenge: 'أضف عمليات الضرب والقسمة، وتأكد من التعامل مع القسمة على صفر!'
    },
    {
      id: 2,
      title: 'مولد كلمات المرور',
      icon: '🔐',
      difficulty: 'متوسط',
      color: 'bg-blue-500',
      description: 'أنشئ برنامجاً يولد كلمات مرور قوية وآمنة',
      skills: ['الحلقات', 'المصفوفات', 'الدوال العشوائية'],
      starter_code: `// مولد كلمات المرور
function مولد_كلمة_مرور(الطول = 8) {
    const أحرف = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let كلمة_المرور = "";
    
    // أكمل الكود هنا باستخدام حلقة
    for (let i = 0; i < الطول; i++) {
        // اختر حرفاً عشوائياً
        let فهرس_عشوائي = Math.floor(Math.random() * أحرف.length);
        كلمة_المرور += أحرف[فهرس_عشوائي];
    }
    
    return كلمة_المرور;
}

// اختبار المولد
console.log("كلمة مرور من 8 أحرف: " + مولد_كلمة_مرور(8));
console.log("كلمة مرور من 12 حرف: " + مولد_كلمة_مرور(12));`,
      challenge: 'أضف خيارات لتحديد نوع الأحرف المطلوبة (أرقام فقط، أحرف فقط، إلخ)'
    },
    {
      id: 3,
      title: 'لعبة الذاكرة',
      icon: '🧠',
      difficulty: 'متوسط',
      color: 'bg-purple-500',
      description: 'اصنع لعبة لتقوية الذاكرة بعرض أرقام وحفظها',
      skills: ['المصفوفات', 'الشروط', 'الحلقات'],
      starter_code: `// لعبة الذاكرة
function لعبة_الذاكرة() {
    // إنشاء تسلسل عشوائي
    const التسلسل = [];
    const طول_التسلسل = 5;
    
    console.log("🧠 مرحباً بك في لعبة الذاكرة!");
    console.log("سأعرض عليك " + طول_التسلسل + " أرقام، احفظها!");
    
    // إنشاء التسلسل العشوائي
    for (let i = 0; i < طول_التسلسل; i++) {
        التسلسل.push(Math.floor(Math.random() * 10));
    }
    
    // عرض التسلسل
    console.log("\\n📢 احفظ هذه الأرقام:");
    console.log(التسلسل.join(" - "));
    
    // محاكاة إجابة المستخدم
    const إجابة_المستخدم = [3, 7, 1, 9, 2]; // مثال
    
    // التحقق من الإجابة
    let النتيجة = 0;
    for (let i = 0; i < التسلسل.length; i++) {
        if (i < إجابة_المستخدم.length && التسلسل[i] === إجابة_المستخدم[i]) {
            النتيجة++;
        }
    }
    
    console.log("\\n🎯 النتيجة: " + النتيجة + "/" + طول_التسلسل);
    
    if (النتيجة === طول_التسلسل) {
        console.log("🏆 ممتاز! ذاكرة رائعة!");
    } else {
        console.log("💪 حاول مرة أخرى لتحسن نتيجتك!");
    }
}

لعبة_الذاكرة();`,
      challenge: 'أضف مستويات صعوبة مختلفة وحفظ أفضل النتائج'
    },
    {
      id: 4,
      title: 'منظم المهام',
      icon: '📝',
      difficulty: 'متقدم',
      color: 'bg-orange-500',
      description: 'اصنع تطبيقاً لإدارة المهام اليومية',
      skills: ['المصفوفات', 'الكائنات', 'إدارة البيانات'],
      starter_code: `// منظم المهام
class منظم_المهام {
    constructor() {
        this.المهام = [];
        this.العداد = 0;
    }
    
    إضافة_مهمة(النص, الأولوية = "عادية") {
        const مهمة_جديدة = {
            الرقم: ++this.العداد,
            النص: النص,
            الأولوية: الأولوية,
            مكتملة: false,
            التاريخ: new Date().toLocaleDateString('ar')
        };
        
        this.المهام.push(مهمة_جديدة);
        console.log("✅ تم إضافة المهمة: " + النص);
    }
    
    إكمال_مهمة(الرقم) {
        const المهمة = this.المهام.find(م => م.الرقم === الرقم);
        if (المهمة) {
            المهمة.مكتملة = true;
            console.log("🎉 تم إكمال المهمة: " + المهمة.النص);
        }
    }
    
    عرض_المهام() {
        console.log("\\n📋 قائمة المهام:");
        console.log("================");
        
        if (this.المهام.length === 0) {
            console.log("لا توجد مهام حالياً");
            return;
        }
        
        this.المهام.forEach(مهمة => {
            const حالة = مهمة.مكتملة ? "✅" : "⏳";
            const أولوية = مهمة.الأولوية === "مهمة" ? "🔴" : 
                         مهمة.الأولوية === "متوسطة" ? "🟡" : "🟢";
            
            console.log(\`\${حالة} \${أولوية} \${مهمة.الرقم}. \${مهمة.النص} (\${مهمة.التاريخ})\`);
        });
    }
}

// اختبار المنظم
const منظمي = new منظم_المهام();

منظمي.إضافة_مهمة("حل واجب الرياضيات", "مهمة");
منظمي.إضافة_مهمة("قراءة كتاب", "عادية");
منظمي.إضافة_مهمة("تعلم البرمجة", "مهمة");

منظمي.عرض_المهام();
منظمي.إكمال_مهمة(1);
منظمي.عرض_المهام();`,
      challenge: 'أضف إمكانية حذف المهام وفلترتها حسب الحالة أو الأولوية'
    },
    {
      id: 5,
      title: 'آلة البيع الذكية',
      icon: '🥤',
      difficulty: 'متقدم',
      color: 'bg-red-500',
      description: 'اصنع محاكي لآلة بيع المشروبات مع إدارة المال',
      skills: ['الكائنات', 'إدارة الحالة', 'العمليات المالية'],
      starter_code: `// آلة البيع الذكية
class آلة_البيع {
    constructor() {
        this.المنتجات = {
            A1: { الاسم: "كوكا كولا", السعر: 2.5, الكمية: 10 },
            A2: { الاسم: "بيبسي", السعر: 2.5, الكمية: 8 },
            B1: { الاسم: "عصير برتقال", السعر: 3.0, الكمية: 5 },
            B2: { الاسم: "ماء", السعر: 1.0, الكمية: 15 }
        };
        
        this.النقود_المدخلة = 0;
        this.الباقي = 0;
    }
    
    عرض_المنتجات() {
        console.log("\\n🥤 مرحباً بك في آلة البيع الذكية!");
        console.log("=====================================");
        
        for (let كود in this.المنتجات) {
            const منتج = this.المنتجات[كود];
            const متوفر = منتج.الكمية > 0 ? "✅ متوفر" : "❌ نفد";
            console.log(\`\${كود}: \${منتج.الاسم} - \${منتج.السعر} ريال (\${منتج.الكمية}) \${متوفر}\`);
        }
    }
    
    إدخال_نقود(المبلغ) {
        this.النقود_المدخلة += المبلغ;
        console.log(\`💰 تم إدخال \${المبلغ} ريال. المجموع: \${this.النقود_المدخلة} ريال\`);
    }
    
    شراء_منتج(الكود) {
        const المنتج = this.المنتجات[الكود];
        
        if (!المنتج) {
            console.log("❌ كود غير صحيح!");
            return;
        }
        
        if (المنتج.الكمية === 0) {
            console.log("❌ عذراً، " + المنتج.الاسم + " غير متوفر!");
            return;
        }
        
        if (this.النقود_المدخلة < المنتج.السعر) {
            const المطلوب = المنتج.السعر - this.النقود_المدخلة;
            console.log(\`❌ نقود غير كافية! تحتاج \${المطلوب} ريال إضافي\`);
            return;
        }
        
        // إتمام عملية الشراء
        المنتج.الكمية--;
        this.الباقي = this.النقود_المدخلة - المنتج.السعر;
        
        console.log("\\n🎉 تم شراء " + المنتج.الاسم + " بنجاح!");
        
        if (this.الباقي > 0) {
            console.log(\`💵 الباقي: \${this.الباقي} ريال\`);
        }
        
        this.النقود_المدخلة = 0;
        this.الباقي = 0;
    }
}

// تجربة آلة البيع
const آلتي = new آلة_البيع();

آلتي.عرض_المنتجات();
آلتي.إدخال_نقود(2);
آلتي.إدخال_نقود(1);
آلتي.شراء_منتج("A1");
آلتي.عرض_المنتجات();`,
      challenge: 'أضف إمكانية إرجاع النقود وإحصائيات المبيعات'
    }
  ];

  const toggleSaveProject = (projectId: number) => {
    if (savedProjects.includes(projectId)) {
      setSavedProjects(savedProjects.filter(id => id !== projectId));
    } else {
      setSavedProjects([...savedProjects, projectId]);
    }
  };

  const currentProject = projects.find(project => project.id === selectedProject);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🚀 المشاريع العملية
          </h1>
          <p className="text-xl text-gray-600">
            طبق ما تعلمته في مشاريع حقيقية ومفيدة
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Projects List */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">قائمة المشاريع</h2>
            <div className="space-y-4">
              {projects.map((project) => {
                const isSaved = savedProjects.includes(project.id);
                const isSelected = selectedProject === project.id;

                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project.id)}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="text-2xl">{project.icon}</span>
                        <div>
                          <h3 className="font-bold text-lg text-gray-800">
                            {project.title}
                          </h3>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${project.color} text-white`}>
                            {project.difficulty}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSaveProject(project.id);
                        }}
                        className={`p-1 rounded ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                      >
                        <Save size={20} fill={isSaved ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            {currentProject ? (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-3xl">{currentProject.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">
                        {currentProject.title}
                      </h2>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${currentProject.color} text-white mt-2`}>
                        {currentProject.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <button
                      onClick={() => toggleSaveProject(currentProject.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        savedProjects.includes(currentProject.id)
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-yellow-100 hover:text-yellow-600'
                      }`}
                    >
                      <Save size={20} />
                    </button>
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Share size={20} />
                    </button>
                  </div>
                </div>

                {/* Project Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">📋 وصف المشروع</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                {/* Skills Required */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">🛠️ المهارات المطلوبة</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Editor */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2 rtl:space-x-reverse">
                    <Code className="text-blue-500" />
                    <span>كود البداية:</span>
                  </h3>
                  <CodeEditor initialCode={currentProject.starter_code} />
                </div>

                {/* Challenge */}
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-r-4 border-orange-400 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 flex items-center space-x-2 rtl:space-x-reverse text-orange-800">
                    <Trophy className="text-orange-600" />
                    <span>التحدي الإضافي:</span>
                  </h3>
                  <p className="text-orange-800 font-medium leading-relaxed">
                    {currentProject.challenge}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <div className="text-6xl mb-6">🚀</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  اختر مشروعاً لتبدأ البناء
                </h2>
                <p className="text-gray-600 text-lg">
                  انقر على أي مشروع من القائمة لتبدأ رحلة البناء والإبداع!
                </p>
                <div className="mt-8 flex justify-center space-x-4 rtl:space-x-reverse">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <p className="text-sm text-gray-600">مشاريع متدرجة</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">💡</div>
                    <p className="text-sm text-gray-600">أفكار إبداعية</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🏆</div>
                    <p className="text-sm text-gray-600">تحديات ممتعة</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
