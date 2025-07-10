
import { Heart, Code, Users, Target, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="text-blue-500" size={32} />,
      title: 'هدفنا',
      description: 'جعل تعلم البرمجة متاحاً وممتعاً لكل طفل ومبتدئ في العالم العربي'
    },
    {
      icon: <Lightbulb className="text-yellow-500" size={32} />,
      title: 'رؤيتنا',
      description: 'بناء جيل من المبرمجين الصغار القادرين على إبداع الحلول التقنية'
    },
    {
      icon: <Users className="text-green-500" size={32} />,
      title: 'مجتمعنا',
      description: 'مجتمع داعم من المتعلمين والمعلمين يشاركون رحلة التعلم معاً'
    },
    {
      icon: <Rocket className="text-purple-500" size={32} />,
      title: 'مستقبلنا',
      description: 'إضافة المزيد من اللغات والمشاريع والأدوات التفاعلية'
    }
  ];

  const stats = [
    { number: '6+', label: 'دروس تفاعلية', icon: '📚' },
    { number: '20+', label: 'تمرين عملي', icon: '💻' },
    { number: '5+', label: 'مشاريع متنوعة', icon: '🚀' },
    { number: '100%', label: 'محتوى عربي', icon: '🌟' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🌟</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              عن كود كيدز
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              منصة تعليمية عربية مبتكرة تهدف إلى تعليم البرمجة للأطفال والمبتدئين
              بأسلوب بسيط وممتع وتفاعلي
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  مهمتنا التعليمية 🎯
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  في عالم يتطور فيه التكنولوجيا بسرعة البرق، نؤمن بأن تعلم البرمجة ليس مجرد مهارة تقنية،
                  بل هو طريقة تفكير وحل المشكلات تفيد الطفل في جميع جوانب حياته.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  لذلك صممنا كود كيدز ليكون البوابة الأولى للأطفال والمبتدئين في العالم العربي
                  لاستكشاف عالم البرمجة بطريقة آمنة وممتعة ومحفزة.
                </p>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-blue-600">
                  <Code size={24} />
                  <span className="font-semibold text-lg">تعلم • اكتشف • ابدع</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">برمجة بلا حدود</h3>
                  <p className="text-gray-600">
                    من فكرة بسيطة إلى مشروع حقيقي
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            ما يميز كود كيدز؟ ✨
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            أرقامنا تتحدث 📊
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <p className="text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              فلسفتنا في التعليم 🧠
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold mb-3 text-blue-800">التعلم باللعب</h3>
                <p className="text-blue-700">
                  نحول المفاهيم المعقدة إلى ألعاب وأنشطة ممتعة
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-3 text-green-800">التعلم التشاركي</h3>
                <p className="text-green-700">
                  نشجع على المشاركة والتعاون بين المتعلمين
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold mb-3 text-purple-800">التعلم بالبناء</h3>
                <p className="text-purple-700">
                  نؤمن بأن أفضل طريقة للتعلم هي بناء مشاريع حقيقية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">خططنا المستقبلية 🚀</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-3">لغات برمجة متعددة</h3>
                <p className="text-gray-300">
                  إضافة دروس في Python و Lua وغيرها من اللغات المناسبة للمبتدئين
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3">أدوات تفاعلية</h3>
                <p className="text-gray-300">
                  تطوير أدوات برمجة مرئية وألعاب تعليمية تفاعلية
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3">نظام المكافآت</h3>
                <p className="text-gray-300">
                  إضافة شارات وجوائز لتحفيز المتعلمين على التقدم
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-bold mb-3">منصة للمعلمين</h3>
                <p className="text-gray-300">
                  أدوات خاصة للمعلمين لمتابعة تقدم طلابهم
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">تواصل معنا 📧</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            نحب سماع آرائكم ومقترحاتكم لتطوير المنصة وجعلها أفضل للجميع
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@codekids.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              📧 راسلنا
            </a>
            <a
              href="#"
              className="bg-green-500 px-8 py-4 rounded-full text-lg font-bold hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
            >
              💬 انضم لمجتمعنا
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
